<?php

require_once("save.php");
require_once("load1.php");
require_once("load2.php");
require_once("delete.php");
require_once("update.php");

$save = new Save();
$load1 = new Load1();
$load2 = new Load2();
$delete = new Delete();
$update = new Update();

if ($_server["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $teleph_num = $_POST['teleph_num'];
    $password = $_POST['password'];
    if (!empty($_POST["name"]) && ($_POST["lastname"]) && ($_POST["email"]) && ($_POST["teleph_num"]) && ($_POST["password"])) {
        $save->SaveUser($name, $lastname, $email, $teleph_num, $password);
    }
    echo "Создать пользователя = " . $name . $lastname . $email . $teleph_num . $password;

} else if ($_server["REQUEST_METHOD"] == "DELETE") {
    if (!empty($_DELETE["id"])) {
        $delete->DeleteUser($id);
    }
    echo "Удалить пользователя = " . $id;

} else if ($_server["REQUEST_METHOD"] == "UPDATE") {
    if (!empty($_UPDATE["name"]) && ($_UPDATE["lastname"]) && ($_UPDATE["email"]) && ($_UPDATE["teleph_num"]) && ($_UPDATE["password"])) {
        $update->UpdateUser($name, $lastname, $email, $teleph_num, $password);
    }
    echo "Обновить пользователя = " . $name . $lastname . $email . $teleph_num . $password;

} else if ($_server["REQUEST_METHOD"] == "GET") {
    if (!empty($_GET["id"])) {
        $load1->LoadUser($id);
    }
    echo "Получить данные пользователя = " . $id;

} else {
    if (!empty($_GET["name"]) && ($_GET["lastname"]) && ($_GET["email"]) && ($_GET["teleph_num"]) && ($_GET["password"])) {
        $user = $load2->LoadUsers2($name, $lastname, $email, $teleph_num, $password);
    }
    echo "Получить данные пользователей = " . $name . $lastname . $email . $teleph_num . $password;
}
?>