<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$msg = $_POST['msg'];

if (!empty($email) && !empty($msg)) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $reciever = "msdmunna77@gmail.com";
        $subject = "Form : $name <$email> ";
        $body = "Name : $name\nEmail: $email\nPhone : $phone\n\nMessage : $$msg ";
        $sender = "Form : $email";
        if (mail($reciever, $subject, $body, $sender)) {
            echo "Your Message has been Send";
        } else {
            echo "Sorry your message didn't sned";
        }
    } else {
        echo "Your email is not valid";
    }
} else {
    echo "Email and Password field is required";
}
