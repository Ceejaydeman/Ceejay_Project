<?php
if(isset($_POST["login"])){
    $username = $_POST['username'];
     $email = $_POST['email'];
      $password = $_POST['password'];
      $sql="SELECT*FROM users WHERE username=$'username'";

      echo "username:" .htmlspecialchars($username)
      ."<br>";
      echo "email:" .htmlspecialchars($email)
      ."<br>";
      echo "password:" .htmlspecialchars($password);
      
}
?>