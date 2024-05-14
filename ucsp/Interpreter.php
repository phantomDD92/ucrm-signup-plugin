<?php

declare(strict_types=1);
namespace Ucsp;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

class Interpreter
{
    private static $whiteListedGet = [
        'countries' => ['states'],
    ];

    private static $whiteListedPost = [
        'clients' => [],
    ];

    private static $dataUrl = null;

    private $response;

    private $code;
    // private $config;

    private $ready = false;

    public function __construct()
    {
        $this->api = \Ubnt\UcrmPluginSdk\Service\UcrmApi::create();
        // $configManager = \Ubnt\UcrmPluginSdk\Service\PluginConfigManager::create();
        // $config = $configManager->loadConfig();

    }

    public static function setDataUrl($dataUrl)
    {
        self::$dataUrl = $dataUrl;
    }

    public static function setFrontendKey($key)
    {
        if (! file_exists(self::$dataUrl . 'frontendKey')) {
            file_put_contents(self::$dataUrl . 'frontendKey', $key, LOCK_EX);
            return true;
        }
        return false;
    }

    public static function getFrontendKey()
    {
        if (file_exists(self::$dataUrl . 'frontendKey')) {
            return file_get_contents(self::$dataUrl . 'frontendKey');
        }
        return false;
    }

    public function isReady()
    {
        return $this->ready;
    }

    public function getResponse()
    {
        return $this->response;
    }

    public function getCode()
    {
        return $this->code;
    }

    public function get($endpoint, $data)
    {
        if (self::validateGet($endpoint)) {
            if($endpoint === 'countries/states' && $data['countryId']===300) {
                $config=$GLOBALS['config'];
                $config['FORM_DEFAULT_COUNTRY_STATE'];
                $temp_array = explode(",",$config['FORM_DEFAULT_COUNTRY_STATE']);
                if(count($temp_array) < 4 ){
                    $temp_array[3]=1;
                    $temp_array[4]="";
                    $temp_array[5]="";
                }
                return array(
                    "countryId" => $temp_array[0],
                    "countryName" => $temp_array[1],
                    "countryCode" => $temp_array[2],
                    "stateId" => $temp_array[3],
                    "stateName" => $temp_array[4],
                    "stateCode" => $temp_array[5]
                );               
            }

            // if($endpoint === 'countries/states' && !($data['countryId']===249 ||$data['countryId']===54)) {
            //     return [];
            // }       
            return $this->api->get(
                $endpoint,
                $data
            );
        }
        throw new \UnexpectedValueException('{"code":404,"message":"No route GET: ' . $endpoint . '"}', 404);
    }

    public function post($endpoint, $data)
    {
        $config=$GLOBALS['config'];
        if (self::validatePost($endpoint)) {
            if($endpoint === 'clients') {
                $developmentMode = true;
                $mailer = new PHPMailer($developmentMode);
                try {
                    // set initial mailer settings
                    $mailer->isSMTP();
                    if ($developmentMode) {
                        $mailer->SMTPOptions = [
                            'ssl'=> [
                            'verify_peer' => false,
                            'verify_peer_name' => false,
                            'allow_self_signed' => true
                            ]
                        ];
                    }
                    $mailerhost = $config['MAILER_HOST'];
                    if(empty($mailerhost))$mailerhost = 'smtp.gmail.com';
                    $mailerport = $config['MAILER_PORT'];
                    if(empty($mailerport))$mailerport = 587;
                    $username = $config['MAILER_USERNAME'];
                    if(empty($username))$username = 'you_mailname@gmail.com';
                    $password = $config['MAILER_PASSWORD'];
                    if(empty($password))$password = '1234 5678 abcd efgh';
                    $mailer->Host = $mailerhost;
                    $mailer->SMTPAuth = true;
                    //$mailer->Username = 'airmaxbilling@gmail.com';
                    $mailer->Username = $username;
                    $mailer->Password = $password;
                    $mailer->SMTPSecure = 'tls';
                    $mailer->Port = $mailerport;

                    //$mailer->setFrom($config['EMAIL'], 'New Signup');
                    $mailtitle = $config['MAILER_TITLE'];
                    if(empty($mailtitle))$mailtitle = 'Example Mail Title';
                    $mailer->setFrom($username, $mailtitle);
                    $tomail = $config['RECEIVER_EMAIL'];
                    if(empty($tomail))$tomail = 'tomail@gmail.com';
                    $mailer->addAddress($tomail, $tomail);
                    //$mailer->addAddress('airmaxhelpdesk@gmail.com', 'airmaxhelpdesk@gmail.com');

                    $mailer->isHTML(true);
                    $mailer->Subject = 'New Client Lead';
                    $contact = $data['contacts'][ array_key_first($data['contacts']) ];
                    // $mailer->Body = 'New Signup';
                    $mailer->Body = '<!DOCTYPE html>
                    <html>
                    <head>
                        <title>New Signup</title>
                    </head>
                    <body>
                        <p>User name: '.$contact->name.'</p>
                        <p>User mail: '.$contact->email.'</p>
                        <p>Phone number: '.$contact->phone.'</p>
                    </body>
                    </html>';

                    $mailer->send();
                    $mailer->ClearAllRecipients();
                    // echo "MAIL HAS BEEN SENT SUCCESSFULLY";

                } catch (Exception $e) {
                    // echo "EMAIL SENDING FAILED. INFO: " . $mailer->ErrorInfo;
                    throw new \UnexpectedValueException('{"code":404,"message":"EMAIL SENDING FAILED. INFO: ' . $mailer->ErrorInfo . '"}', 404);
                }
            }
            return $this->api->post(
                $endpoint,
                $data
            );
        }
        throw new \UnexpectedValueException('{"code":404,"message":"No route POST: ' . $endpoint . '"}', 404);
    }

    public function run($payload)
    {
        if (! empty($payload)) {
            $payloadDecoded = json_decode($payload);

            if (! empty($payloadDecoded->frontendKey)) {
                if ($payloadDecoded->frontendKey != self::getFrontendKey()) {
                    throw new \UnexpectedValueException('frontendKey is invalid', 400);
                }

                if (! empty($payloadDecoded->api)) {
                    if (empty($payloadDecoded->api->endpoint)) {
                        throw new \UnexpectedValueException('endpoint is not set', 400);
                    }
                    if (empty($payloadDecoded->api->type)) {
                        throw new \UnexpectedValueException('type is not set', 400);
                    }

                    try {
                        $data = empty($payloadDecoded->api->data) ? [] : (array) $payloadDecoded->api->data;
                        if ($payloadDecoded->api->type == 'GET') {
                            $response = $this->get($payloadDecoded->api->endpoint, $data);
                        } elseif ($payloadDecoded->api->type == 'POST') {
                            $response = $this->post($payloadDecoded->api->endpoint, $data);
                        } else {
                            throw new \UnexpectedValueException('type is invalid', 400);
                        }

                        $this->code = 200;
                        $this->response = json_encode($response);
                        $this->ready = true;
                    } catch (\GuzzleHttp\Exception\ClientException $e) {
                        $this->response = $e->getResponse()->getBody()->getContents();
                        $this->code = $e->getCode();
                        $this->ready = true;
                    }
                } else {
                    throw new \UnexpectedValueException('data is invalid', 400);
                }
            }
        }
    }

    private static function parseAndValidateEndpoint($endpoint, $whitelist)
    {
        // # Remove backslash if at start of string
        $endpoint = ltrim($endpoint, '/');

        // # create array from URL
        $endpoint_array = explode('/', $endpoint);

        // # if first item is not in top level white list return false, else continue validation
        if (! array_key_exists($endpoint_array[0], $whitelist)) {
            return false;
        }

        // # if three levels deep continue validation
        if (count($endpoint_array) == 3) {

        // # If third level endpoint uses "second level ids" return true
            if (! empty($whitelist[$endpoint_array[0]]['second_level_ids'])) {
                return in_array($endpoint_array[2], $whitelist[$endpoint_array[0]]['second_level_ids']);

            // # If second level endpoint uses "third level ids" return true
            } elseif (! empty($whitelist[$endpoint_array[0]]['third_level_ids'])) {
                return in_array($endpoint_array[1], $whitelist[$endpoint_array[0]]['third_level_ids']);
            }
            return false;

        // # if two levels deep continue validation
        } elseif (count($endpoint_array) == 2) {
            if (in_array($endpoint_array[1], $whitelist[$endpoint_array[0]])) {
                return true;
            }
            return false;
        } elseif (count($endpoint_array) == 1) {
            return true;
        }
        // # fail validations by default, must be whitelisted and a specific level deep
        return false;
    }

    private static function validateGet($endpoint)
    {
        return self::parseAndValidateEndpoint($endpoint, self::$whiteListedGet);
    }

    private static function validatePost($endpoint)
    {
        return self::parseAndValidateEndpoint($endpoint, self::$whiteListedPost);
    }
}
