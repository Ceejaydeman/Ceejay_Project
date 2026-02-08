<?php
if(isset($_POST["login"])){
    $id = $_POST['id'];
 
      $sql="DELETE FROM users WHERE id =$'id'";

      echo "username:" .htmlspecialchars($username)
;
      
}
?>