<?php
if(isset($_POST["login"])){
    $username = $_POST['username'];
     $email = $_POST['email'];
      $password = $_POST['password'];
      $sql="SELCT FROM users WHERE id =$'id'";

      echo "username:" .htmlspecialchars($username)
      ."<br>";
      echo "email:" .htmlspecialchars($email)
      ."<br>";
      echo "password:" .htmlspecialchars($password);
      
}
?>