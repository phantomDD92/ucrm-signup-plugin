<?php

require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


$developmentMode = true;
$mailer = new PHPMailer($developmentMode);

try {
    $mailer->SMTPDebug = 2;
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


    $mailer->Host = 'smtp.gmail.com';
    $mailer->SMTPAuth = true;
    $mailer->Username = 'airmaxbilling@gmail.com';
    $mailer->Password = 'dhdz mbtu ioxu ncpf';
    $mailer->SMTPSecure = 'tls';
    $mailer->Port = 587;

    $mailer->setFrom('airmaxbilling@gmail.com', 'New Signup');
    $mailer->addAddress('sales.airmaxcm@gmail.com', 'sales.airmaxcm@gmail.com');

    $mailer->isHTML(true);
    $mailer->Subject = 'New Client Lead';
    $mailer->Body = 'New Signup';

    $mailer->send();
    $mailer->ClearAllRecipients();
    echo "MAIL HAS BEEN SENT SUCCESSFULLY";

} catch (Exception $e) {
    echo "EMAIL SENDING FAILED. INFO: " . $mailer->ErrorInfo;
}