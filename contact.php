<?php

DEFINE('ADMIN_EMAIL', 'bobbyluig@gmail.com');

header('Content-Type: application/json');

if (!isset($_POST['first']) || !isset($_POST['last']) || !isset($_POST['message']) || !isset($_POST['email']))
{
	exit();
}

$first = $_POST['first'];
$last = $_POST['last'];
$message = $_POST['message'];
$email = $_POST['email'];

if (strlen($first) == 0 || strlen($last) == 0 || strlen($message) == 0 || strlen($email) == 0)
{
	echo json_encode(array('message' => 'All fields must be filled out.', 'success' => 0));
}
else if (!filter_var($email, FILTER_VALIDATE_EMAIL))
{
	echo json_encode(array('message' => 'Please enter a valid email.', 'success' => 0));
}
else
{
	date_default_timezone_set('America/Los_Angeles');
	$date = date('m/d/Y h:i:s a', time());
	$subject = 'Contact Us';
	
	$body = sprintf("Dear maintainer,\n\nThe following message was sent by %s %s on %s.\n\n<<%s>>\n\nPlease respond to his/her email: %s.", $first, $last, $date, $message, $email);
	$success = mail(ADMIN_EMAIL, $subject, $body);
	
	if ($success)
	{
		echo json_encode(array('message' => 'Your message was sent successfully', 'success' => 1));
	}
	else
	{
		echo json_encode(array('message' => 'Failed to send message. Please try again later.', 'success' => 0));
	}
}
?>