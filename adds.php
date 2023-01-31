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

$user_id = $_SESSION['user'];
$user = mysqli_query($connection, "SELECT * FROM adds where user_id = $user_id");


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['title']) && ($_POST['description']) && ($_POST['price'])) {
        $_title = $_POST['title'];
        $_description = $_POST['description'];
        $_price = $_POST['price'];
        mysqli_query($connection, "INSERT INTO adds (title, description, price) VALUES ('" . $_title . "', '" . $_description . "', '" . $_price . "')");

    }
} else if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    if (isset($_GET['id'])) {
        $adds_id = $_GET['id'];
        mysqli_query($connection, "DELETE FROM adds WHERE id = '$adds_id'");

    }
} else if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    if (isset($_REQUEST['id']) && ($_REQUEST['title']) && ($_REQUEST['description']) && ($_REQUEST['price'])) {
        $adds_id = $_REQUEST['id'];
        $_title = $_REQUEST['title'];
        $_description = $_REQUEST['description'];
        $_price = $_REQUEST['price'];
        mysqli_query($connection, "UPDATE adds SET name = '$_title', lastname = '$_description', email = '$_price' WHERE id = '$adds_id'");

    }
} else if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (isset($_GET['id'])) {
        $adds_id = $_GET['id'];
        $query = mysqli_query($connection, "SELECT * FROM adds WHERE adds_id = '$adds_id'");

        echo (json_encode($adds));
    } else {
        $query = mysqli_query($connection, "SELECT * FROM adds inner join users on adds.id = users.id");
        while ($row[] = mysqli_fetch_assoc($query)) {
            $adds = $row;
        }
        ;
        echo (json_encode($adds));
    }
}

?>