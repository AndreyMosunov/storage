<?php
session_start();
$connection = mysqli_connect(
    "localhost",
    "root",
    "",
    "database"
);

$connection->set_charset("utf8");

if (!$connection) {
    die("Связь не установлена:" . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    if (!empty($_REQUEST['email']) && (!empty($_REQUEST['password']))) {
        $email = $_REQUEST['email'];
        $password = $_REQUEST['password'];
        $query = mysqli_query($connection, "SELECT id FROM users WHERE email = '$email' && password = '$password'");
        $user_id = mysqli_fetch_assoc($query);
        if (!empty($user_id)) {
            $_SESSION['user'] = $user_id;
        }
    }
}
echo (json_encode($user_id)); 

?>