<?php
include('connection.php');
$con = new createConnection();
$con->connectToDatabase();
$con->selectDatabase();
$sql="select * from image";
$query=mysql_query($sql);
if(mysql_num_rows($query) == 0)
{
	echo "Chua co du lieu";
}
else
{
	while($row=mysql_fetch_array($query))
	{
		echo $row['url']."-";
	}
}
$con->closeConnection();
?>