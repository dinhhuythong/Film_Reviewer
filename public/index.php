<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<meta name="description" content="Simple Template #3 from simpletemplates.org" />
<meta name="keywords" content="simple #3, template, simpletemplates.org" />
<link rel="stylesheet" type="text/css" href="style.css" />
<title>Simple Template #3 - simpletemplates.org</title>
<?php 
	include('connection.php');
?>
</head>
<body>
<div id="wrap">

	<div id="header">
		<h1>Simple #3</h1>
		<h2>Website Slogan or Tagline</h2>
	</div>

	<div id="menu">
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">About Us</a></li>
			<li><a href="#">What We Do</a></li>
			<li><a href="#">The Team</a></li>
			<li><a href="#">Contact Us</a></li>
		</ul>
	</div>
	 <div id="content">
		<?php 
			$con = new createConnection();
			$con->connectToDatabase();
			$con->selectDatabase();
			$sql="select * from film";
			$query=mysql_query($sql);
			if(mysql_num_rows($query) == 0)
			{
				echo "Chua co du lieu";
			}
			else
			{
				while($row=mysql_fetch_array($query))
				{
				?>	
				<!-- Film 1 -->
				<h2><a href="#" style="text-decoration: none"><?php echo $row['name'] ?> </a></h2>
				<!-- image -->
				<img style="margin: 0 20px 20px 0; float: left; margin: 0 20px 0 0; width:180px; height: 250px;" src="<?php echo $row['images'] ?>" alt="image" />
				<!-- information -->
				<p>
					<b>Information:</b>
					<?php echo $row['summary'] ?>
				</p>
				<!-- like, comment, rate -->
				<p>
				<a href="#" style="text-decoration: none">Rate:<?php echo $row['rate'] ?> </a>&nbsp;&nbsp;<a href="#" style="text-decoration: none">Comment:<?php echo $row['comment'] ?> </a>&nbsp;&nbsp;<a href="#" style="text-decoration: none"> Like:<?php echo $row['likes'] ?> </a>  
				</p>
				<div class="clear"> </div>
		<?php 
			}
		}
		$con->closeConnection();		
		?>
	</div>
	<div class="footer">
		<h2>© Copyright 2006-2014 Test</h2>
	</div>
</div>
</body>
</html>
