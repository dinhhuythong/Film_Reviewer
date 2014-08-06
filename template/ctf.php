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
		<!--<h1>Simple #3</h1>
		<h2>Website Slogan or Tagline</h2>-->
	</div>

	<div id="menu">
		<ul>
			<li><a href="pdc.php">PHIM ĐANG CHIẾU</a></li>
			<li><a href="psc.php">PHIM SẮP CHIẾU</a></li>
			<li><a href="pdac.php">PHIM ĐÃ CHIẾU</a></li>
			<li><a href="#">Ý KIẾN</a></li>
			<li><a href="#">LIÊN HỆ</a></li>
		</ul>
	</div>
	<div id="content">
		<?php
			$con = new createConnection();
			$con->connectToDatabase();
			$con->selectDatabase();
			if(isset($_GET['t']) && isset($_GET['r']))
			{
				$r = $_GET['r'];
				$t = $_GET['t'];
				// phim da chieu table film
				if(strcmp($t, "dac")==0)
				{
					$sql="select * from film where id='".$r."'";
				}
				//phim dang chieu table filmdangchieu
				else if(strcmp($t, "dc")==0)
				{
					$sql="select * from filmdangchieu where id='".$r."'";
				}
				else if(strcmp($t, "sc")==0)
				{
					$sql="select * from filmsapchieu where id='".$r."'";
				}
				$query=mysql_query($sql);
				if(mysql_num_rows($query) == 0)
				{
					echo "Nội dung không tồn tại";
				}
				else
				{
					while($row=mysql_fetch_array($query))
					{
		?>
						<!-- Film 1 -->
						<img style="margin: 0 20px 20px 0; float: left; margin: 0 20px 0 0; width:250px; height: 320px;" src="<?php echo $row['images'] ?>" alt="image" />
						<!-- information -->
						<h2><b>
							<?php echo $row['name'] ?>
						</b></h2>
						<p>
							<b>Director:</b>
							<?php echo $row['director'] ?>
						</p>
						<p>
							<b>Director:</b>
							<?php echo $row['director'] ?>
						</p>
						<p>
							<b>Cast:</b>
							<?php echo $row['cast'] ?>
						</p>
						<p>
							<b>Release Date:</b>
							<?php echo $row['releaseDate'] ?>
						</p>
						<p>
							<b>Running time:</b>
							<?php echo $row['runningTime'] ?>
						</p>
						<p>
							<b>Category:</b>
							<?php echo $row['category'] ?>
						</p>
						<p>
							<b>Information:</b>
							<?php echo $row['information'] ?>
						</p>
		<?php
					}
				}
			
			}else{
				echo "Nôi dung đang được xây dựng, quay lại sau !!!!!";
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
