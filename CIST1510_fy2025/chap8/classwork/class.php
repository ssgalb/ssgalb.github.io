<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST ['name']);
    $email = htmlspecialchars($_POST ['email']);
    $message = htmlspecialchars($_POST ['email']);

    $to = "ssmith@student.gwinnetttech.edu";
    $subject = "New Form Submission from Website";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "Form: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again later.";
    }
}
?>