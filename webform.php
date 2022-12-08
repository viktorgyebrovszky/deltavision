<?php

// if(isset($_POST['email']) && $_POST['email'] != ''){
  $userName = $_POST['name'];
  // $userBusiness = $_POST['business'];
  $userEmail = $_POST['email'];
  $messageSubject = $_POST['subject'];
  $message = $_POST['message'];

  $to = "viktorgoa@gmail.com";
  $body = "";
  $body .= "Name: ".$userName. "\r\n";
  // $body .= "Business: ".$userBusiness. "\r\n";
  $body .= "Email address: ".$userEmail. "\r\n";
  $body .= "Message: ".$message. "\r\n";

  mail($to, $messageSubject, $body);
// }



?>
