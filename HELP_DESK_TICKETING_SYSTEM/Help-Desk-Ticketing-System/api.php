<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "helpdesk";

  $conn = new mysqli($servername, $username, $password, $dbname);

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $sql = "SELECT * FROM tickets";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      echo json_encode($row);
    }
  } else {
    echo "0 results";
  }

  $conn->close();
?>