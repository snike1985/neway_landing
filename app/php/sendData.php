<?php
$filterData = $_GET['data'];

$json_data = 'Thank you';


$json_data = str_replace("\r\n",'',$json_data);
$json_data = str_replace("\n",'',$json_data);

echo $json_data;
exit;
?>