<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$msg = "Name: ".$name;
$msg .= "\nEmail: ".$email;
$msg .= "\nSubject: ".$subject;
$msg .= "\nMessage: ".$message;

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("vuyani.shabangu@gmail.com","VSHABANGU.CO.ZA Website Contact",$msg);
?> 