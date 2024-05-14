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
    /**----------- Set Header background-color, opacity, text-color -----------**/
    .header {
      background-color: <?php echo htmlspecialchars($config['HEADER_BACKGROUND_COLOR'], ENT_QUOTES); ?>;
      height:60px;
      <?php 
        if ($config['HEADER_BACKGROUND_TRANSPARENCY']) {
          echo 'opacity: 0.8';
        }
      ?>
    }
    .menu li a {
      color: <?php echo htmlspecialchars($config['HEADER_TEXT_COLOR'], ENT_QUOTES); ?>;
    }

    /**----------- Set Form background-color, opacity, title, description text-color -----------**/
    .account-wrapper > div {
      background-color: <?php echo htmlspecialchars($config['FORM_BACKGROUND_COLOR'], ENT_QUOTES); ?>;
      <?php 
        if ($config['FORM_BACKGROUND_TRANSPARENCY']) {
          echo 'opacity: 0.8';
        }
      ?>
    }
    .main-panel {
      min-height: calc(100vh - 160px)
    }
    .form-description, .text-center {
      color: <?php echo htmlspecialchars($config['FORM_TEXT_COLOR'], ENT_QUOTES); ?>;
    }
    /**----------- Set Footer background-color, opacity, text-color -----------**/
    .footer {
      margin-top:0px;
      background-color: <?php echo htmlspecialchars($config['FOOTER_BACKGROUND_COLOR'], ENT_QUOTES); ?>;
      <?php 
        if ($config['FOOTER_BACKGROUND_TRANSPARENCY']) {
          echo 'opacity: 0.8';
        }
      ?>
    }
    .footer-section p  {
      color: <?php echo htmlspecialchars($config['FOOTER_TEXT_COLOR'], ENT_QUOTES); ?>;
    }
    .footer-section span {
      margin-left: 3px;
      margin-right: 3px;
    }

  </style>

  <body style="background-image: url('<?php echo htmlspecialchars($config['BACKGROUND_IMAGE'], ENT_QUOTES); ?>');"><!-- onpageshow="settextColor()" -->
    <header class="header">
      <nav>
        <ul class="menu">
          <?php 
            if (empty($config['HEADER_MENU'])) { 
              $menu = array('Home','Services','About');
              $menulink = array('#','#','#');
            }else{
              $headermenu = $config['HEADER_MENU'];
              $headermenu_array = explode(",",$headermenu);
              $menu_cnt = count($headermenu_array);
              $menu = array();
              $menulink = array();
              for($i=0;$i<$menu_cnt;$i++){
                $pos=strpos($headermenu_array[$i],":");
                //$menu_temp = explode(":",$headermenu_array[$i]);
                array_push($menu,trim(substr($headermenu_array[$i], 0,$pos), " "));
                array_push($menulink,trim(substr($headermenu_array[$i], $pos+1), " "));
              }
            }
            $menu_cnt = count($menu);
            for($i=0;$i<$menu_cnt;$i++){
              echo '<li><a href="'.$menulink[$i].'">'.$menu[$i].'</a></li>';
            }
          ?>
        </ul>
      </nav>
    </header>

    <div class="main-panel">
      <?php if (! empty($config['LOGO_IMAGE'])) { ?>
        <img src="<?php echo htmlspecialchars($config['LOGO_IMAGE'], ENT_QUOTES); ?>" class="logo">
      <?php } ?>
      <?php if (! empty($config['FORM_TITLE'])) { ?>
        <h1 class="text-center mt-2" style="color:<?php echo htmlspecialchars($config['FORM_TEXT_COLOR'], ENT_QUOTES); ?>"><?php echo htmlspecialchars($config['FORM_TITLE'], ENT_QUOTES); ?></h1>
      <?php }?>

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
            $email = $config['FOOTER_EMAIL'];
            if(empty($email))$email = 'example@gmail.com';
            $phone = $config['FOOTER_PHONE'];
            if(empty($phone))$phone = '1-234-567-8901 / 123-456-7890';
            $company = $config['FOOTER_COMPANY'];
            if(empty($company))$company = '© 2014 - 2024 example Company.';
            $service_time = $config['FOOTER_SERVICE_TIME'];
            if(empty($service_time))$service_time = ' Mon Fri 9am 6pm';
          ?>
          <p><span class="bi bi-phone-fill"> : <?php echo $phone; ?></span>&nbsp&nbsp<span class="bi bi-envelope-open-heart"> : <?php echo $email; ?></span>&nbsp&nbsp<span class="bi bi-clock"><?php echo $service_time; ?>
            </span>
          </p>
          <p><?php echo $company; ?></p>
        </div>
      </div>
    </footer>
    <script type="text/javascript" src="<?php echo $publicUrl . 'vendor.js'; ?>"></script>
    <script type="text/javascript" src="<?php echo $publicUrl . 'ucrm-client-signup-form.js'; ?>"></script>

    <div id="ember-bootstrap-wormhole"></div>
    <div id="ember-basic-dropdown-wormhole"></div>

    <?php echo $config['HTML_BLOCK']; ?>

  </body>
</html>