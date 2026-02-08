<?php
if(isset($_POST["login"])){
    $username = $_POST['username'];
     $email = $_POST['email'];
      $password = $_POST['password'];
      $sql="INSERT INTO users(useename,email)VALUES('$username','$email)";

      echo "username:" .htmlspecialchars($username)
      ."<br>";
      echo "email:" .htmlspecialchars($email)
      ."<br>";
      echo "password:" .htmlspecialchars($password);
      
}
?>


