<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?php echo $options->ucrmPublicUrl; ?> - Signup</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="ucrm-client-signup-form/config/environment" content="%7B%22modulePrefix%22%3A%22ucrm-client-signup-form%22%2C%22environment%22%3A%22production%22%2C%22rootURL%22%3A%22/%22%2C%22locationType%22%3A%22none%22%2C%22EmberENV%22%3A%7B%22FEATURES%22%3A%7B%7D%2C%22EXTEND_PROTOTYPES%22%3A%7B%22Date%22%3Afalse%7D%7D%2C%22APP%22%3A%7B%22rootElement%22%3A%22%23ember-signup%22%2C%22host%22%3A%22<?php echo $options->pluginPublicUrl; ?>%22%2C%22completionText%22%3A%22<?php echo rawurlencode((string) $config['COMPLETION_TEXT']); ?>%22%2C%22frontendKey%22%3A%22<?php echo \Ucsp\Interpreter::getFrontendKey(); ?>%22%2C%22isLead%22%3A%22<?php echo $config['LEAD'] ? 'yes' : 'no'; ?>%22%2C%22name%22%3A%22ucrm-client-signup-form%22%2C%22version%22%3A%221.0.0+5acad376%22%7D%2C%22exportApplicationGlobal%22%3Afalse%7D" />

      <?php $publicUrl = str_replace('.php', '/', $options->pluginPublicUrl); ?>
      <link rel="stylesheet" type="text/css" href="<?php echo $publicUrl . 'vendor.css' ?>">
      <link rel="stylesheet" type="text/css" href="<?php echo $publicUrl . 'ucrm-client-signup-form.css' ?>">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

  </head>
  <style>
    .header, .form-description, .account-wrapper > div, .footer  {
      background-color: <?php echo htmlspecialchars($config['BACKGROUND_COLOR'], ENT_QUOTES); ?>;
    }
    .menu li a, .text-center, .form-description, .footer-section p, .footer-section span {
      color: <?php echo htmlspecialchars($config['TEXT_COLOR'], ENT_QUOTES); ?>;
    }
  </style>

  <body style="background-image: url('<?php echo htmlspecialchars($config['BACKGROUND_IMAGE'], ENT_QUOTES); ?>');height:auto;"><!-- onpageshow="settextColor()" -->
    <header class="header">
      <nav>
        <ul class="menu">
          <li><a href="https://www.airmaxcm.com/wireless/index.php">Home</a></li>
          <li><a href="https://www.airmaxcm.com/wireless/index.php/about">About</a></li>
          <li><a href="https://www.airmaxcm.com/wireless/index.php/view-plans">View Packages</a></li>
          <li><a href="https://www.airmaxcm.com/wireless/index.php/support-tools/terms-conditions">TERMS and CONDITIONS</a></li>
        </ul>
      </nav>
    </header>

    <?php if (! empty($config['LOGO_URL'])) { ?>
      <img src="<?php echo htmlspecialchars($config['LOGO_URL'], ENT_QUOTES); ?>" class="logo">
    <?php } ?>

    <div class="main-panel">
      <?php if (! empty($config['FORM_TITLE'])) { ?>
        <h1 class="text-center mt-2" style="color:<?php echo htmlspecialchars($config['FORM_TITLE_COLOR'], ENT_QUOTES); ?>"><?php echo htmlspecialchars($config['FORM_TITLE'], ENT_QUOTES); ?></h1>
      <?php } ?>

      <br clear="all">
      <?php if (! empty($config['FORM_DESCRIPTION'])) { ?>
        <div class="form-description">
          <?php echo htmlspecialchars($config['FORM_DESCRIPTION'], ENT_QUOTES); ?>
        </div>
        <br clear="all">
      <?php } ?>

      <div id="ember-signup"></div>
    </div>


    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <?php
            $email = $config['FOOTEREMAIL'];
            if(empty($email))$email = 'airmaxhelpdesk@gmail.com';
            $phone = $config['FOOTERPHONE'];
            if(empty($phone))$phone = '1-866-449-8651 / 928-565-6707';
            $company = $config['FOOTERCOMPANY'];
            if(empty($company))$company = '© 2014 - 2024 Airmax Internet.';
          ?>
          <p><span class="bi bi-phone-fill"> : <?php echo $phone; ?></span>&nbsp&nbsp<span class="bi bi-envelope-open-heart"> : <?php echo $email; ?></span>&nbsp&nbsp<span class="bi bi-clock"> Mon Fri 9am 6pm</span></p>
          <p><?php echo $company; ?></p>
        </div>
      </div>
    </footer>
    <script type="text/javascript" src="<?php echo $publicUrl . 'vendor.js'; ?>"></script>
    <script type="text/javascript" src="<?php echo $publicUrl . 'ucrm-client-signup-form.js'; ?>"></script>

    <div id="ember-bootstrap-wormhole"></div>
    <div id="ember-basic-dropdown-wormhole"></div>

    <!-- Begin of Chaport Live Chat code -->
    <script type="text/javascript">
    (function(w,d,v3){
    w.chaportConfig = {
    appId : '65778b6b2217dc35d31e2c51'
    };

    if(w.chaport)return;v3=w.chaport={};v3._q=[];v3._l={};v3.q=function(){v3._q.push(arguments)};v3.on=function(e,fn){if(!v3._l[e])v3._l[e]=[];v3._l[e].push(fn)};var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://app.chaport.com/javascripts/insert.js';var ss=d.getElementsByTagName('script')[0];ss.parentNode.insertBefore(s,ss)})(window, document);
    </script>
    <!-- End of Chaport Live Chat code -->

  </body>
</html>