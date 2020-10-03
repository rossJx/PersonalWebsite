<?php

$server = 'localhost';
$username = 'root';
$password = '270897';
$database = 'ross_db';

try {
  $conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);
} catch (PDOException $e) {
  die('Connection Failed: ' . $e->getMessage());
}

?>
