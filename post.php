<?php
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$message = "Сообщение от " . $name . "\r\n" . "Email - " . $email . "\r\n" . "Телефон: " .$tel;


$message = wordwrap($message, 70, "\r\n");


mail('info@bios-rf.ru', 'Message from website', $message);
$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'index.html';

exit();


    ?>