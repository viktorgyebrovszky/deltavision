<?php
// echo "<pre>";
//   print_r($_POST);


$message_sent=false;

if(isset($_POST['email']) && $_POST['email'] != ''){

  if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){

    $userName = $_POST['name'];
    // $userBusiness = $_POST['business'];
    $userEmail = $_POST['email'];
    $messageSubject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "viktor@human-digital.com";
    $body = "";
    $body .= "Name: ".$userName. "\r\n";
    // $body .= "Business: ".$userBusiness. "\r\n";
    $body .= "Email address: ".$userEmail. "\r\n";
    $body .= "Message: ".$message. "\r\n";

    mail($to, $messageSubject, $body);

    $message_sent=true;
  }

}

// echo "</pre>";

?>
