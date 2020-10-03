<?php
  session_start();

  session_unset();

  session_destroy();

  header('Location: /ross2/index.php');
?>
