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
  </head>
  <body>
    <header class="header">
      <nav>
        <ul class="menu">
          <li><a href="<?php $publicUrl ?>">Home</a></li>
          <li><a href="<?php $publicUrl ?>">About</a></li>
          <li><a href="<?php $publicUrl ?>">Services</a></li>
          <li><a href="<?php $publicUrl ?>">Portfolio</a></li>
          <li><a href="<?php $publicUrl ?>">Contact</a></li>
        </ul>
      </nav>
    </header>

    <div class="main-panel">
      <?php if (! empty($config['LOGO_URL'])) { ?>
        <img src="<?php echo htmlspecialchars($config['LOGO_URL'], ENT_QUOTES); ?>" class="logo">
      <?php } ?>

      <?php if (! empty($config['FORM_TITLE'])) { ?>
        <h1 class="text-center mt-2"><?php echo htmlspecialchars($config['FORM_TITLE'], ENT_QUOTES); ?></h1>
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
          <h3>About Us</h3>
          <p>
            Our Business Information Report Snapshot is a collection of business credit scores and ratings that help you gauge the financial health of your customers, suppliers, and business partners.
          </p>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="<?php $publicUrl ?>">Home</a></li>
            <li><a href="<?php $publicUrl ?>">About</a></li>
            <li><a href="<?php $publicUrl ?>">Services</a></li>
            <li><a href="<?php $publicUrl ?>">Portfolio</a></li>
            <li><a href="<?php $publicUrl ?>">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Contact Us</h3>
          <p>
            8481 Aviator Ln Englewood, CO, 80112-7128 United States
          </p>
          <p>Email: airmax.ge@yahoo.com</p>
          <p>Phone: +995593303384, +995568555565</p>
        </div>
      </div>
    </footer>
    <script type="text/javascript" src="<?php echo $publicUrl . 'vendor.js'; ?>"></script>
    <script type="text/javascript" src="<?php echo $publicUrl . 'ucrm-client-signup-form.js'; ?>"></script>

    <div id="ember-bootstrap-wormhole"></div>
    <div id="ember-basic-dropdown-wormhole"></div>
  </body>
</html>