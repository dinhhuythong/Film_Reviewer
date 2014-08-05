<?php

/**
 * @author ThongDinh
 * @copyright 2014
 */

class createConnection //create a class for make connection
{
    var $host="127.0.0.1";
    var $username="root";    // specify the sever details for mysql
    Var $password="";
    var $database="filmreviewer";
    var $myconn;

    function connectToDatabase() // create a function for connect database
    {

        $conn= mysql_connect($this->host,$this->username,$this->password);

        if(!$conn)// testing the connection
        {
            die (mysql_error());
        }

        else
        {
            $this->myconn = $conn;
        }

        return $this->myconn;

    }

    function selectDatabase() // selecting the database.
    {
        mysql_select_db($this->database);  //use php inbuild functions for select database

        if(mysql_error()) // if error occured display the error message
        {
            die (mysql_error());
        }
    }

    function closeConnection() // close the connection
    {
        mysql_close($this->myconn);
    }

}

?>