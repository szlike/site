<?php
  $to = "szlike@gmail.com";
  $headers = "From: tester \r\n";
  $headers .= "Reply-To: szlike@gmail.com \r\n";
  $email_subject = "test email";
  $email_body = "body test \r\n";
  mail($to,$email_subject,$email_body,$headers);
 ?>