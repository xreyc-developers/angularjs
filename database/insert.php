<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$subject = $request->subject;
$email = $request->email;
$message = $request->message;


$servername = "localhost";
$username = "id8447815_xreycdeveloper";
$password = "strongking22"; //Your User Password
$dbname = "id8447815_xreycdeveloper"; //Your Database Name



$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO messages ('subject', 'email', 'message') VALUES ($subject, $email , $message)";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>