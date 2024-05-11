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

    public function makeStateList($countryStates){

        $countrylist=$GLOBALS['country_list'];
        $temp_states=trim($countryStates,";\r\n ");
        if(empty($temp_states)){
            return [];
        }
        $temp_array = explode(";",$temp_states);
        $n1=count($temp_array);
        $res_json = [];
        for($i=0; $i<$n1; $i++) {
            $temp_cnt_array = explode(":",$temp_array[$i]);
            $country_name = trim($temp_cnt_array[0],"\r\n ");
            $countryId=$countrylist[$country_name];
            // $res_json[$countryId]["countryId"]=$countryId;
            $temp_state_array = explode(",",$temp_cnt_array[1]);
            $n2=count($temp_state_array);
            $res_states = [];
            for($j=0; $j<$n2; $j++) {
                $res_states[$j]['id']=$j+1;
                $res_states[$j]['countryId']=$countryId;
                $res_states[$j]['name']=trim($temp_state_array[$j]," ");
                $res_states[$j]['code']=$res_states[$j]['name'];
            }
            $res_json[$countryId]=$res_states;
        }
        return $res_json;
    }

    public function get($endpoint, $data)
    {
        if (self::validateGet($endpoint)) {
            if($endpoint === 'countries/states') {
                if(!($data['countryId'] === 249 || $data['countryId'] === 54)){
                    $config=$GLOBALS['config'];
                    $states = $this->makeStateList($config['SET_STATE']);
                    if(array_key_exists($data['countryId'], $states)){
                        return $states[$data['countryId']];
                    }
                    else {
                        return [];
                    }
                    
                    // $ret = array(
                    //     array(
                    //         "id" => 1,
                    //         "countryId" => 249,
                    //         "name" => "Alabama",
                    //         "code" => "AL",
                    //         "title" => $config['SET_STATE'],
                    //     ),
                    //     array(
                    //         "id" => 2,
                    //         "countryId" => 249,
                    //         "name" => "Alaska",
                    //         "code" => "AK",
                    //     )
                    // );
                    // return $ret;
                }
            }

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
                    // $mailer->SMTPDebug = 0;
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

                    $mailerhost = $config['MAILERHOST'];
                    if(empty($mailerhost))$mailerhost = 'smtp.gmail.com';
                    $mailerport = $config['MAILERPORT'];
                    if(empty($mailerport))$mailerport = 507;
                    $username = $config['MAILERUSERNAME'];
                    if(empty($username))$username = 'airmaxbilling@gmail.com';
                    $password = $config['MAILERPASSWORD'];
                    if(empty($password))$password = 'dhdz mbtu ioxu ncpf';
                    $mailer->Host = $mailerhost;
                    $mailer->SMTPAuth = true;
                    //$mailer->Username = 'airmaxbilling@gmail.com';
                    $mailer->Username = $username;
                    $mailer->Password = $password;
                    $mailer->SMTPSecure = 'tls';
                    $mailer->Port = $mailerport;

                    //$mailer->setFrom($config['EMAIL'], 'New Signup');
                    $mailtitle = $config['MAILTITLE'];
                    if(empty($mailtitle))$mailtitle = 'New Signup';
                    $mailer->setFrom($username, $mailtitle);
                    $tomail = $config['RECEIVEREMAIL'];
                    if(empty($tomail))$tomail = 'airmaxhelpdesk@gmail.com';
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
