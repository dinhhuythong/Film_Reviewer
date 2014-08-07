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
			$sql="select * from filmdangchieu";
			$query=mysql_query($sql);
			if(mysql_num_rows($query) == 0)
			{
				echo "Nôi dung đang được xây dựng, quay lại sau !!!!!";
			}
			else
			{
				while($row=mysql_fetch_array($query))
				{
				?>	
				<!-- Film 1 -->
				<h2><a href="ctf.php/<?php $row['trthai']."/".$row['id'] ?>" style="text-decoration: none"><?php echo $row['name'] ?> </a></h2>
				<!-- image -->
				<img style="margin: 0 20px 20px 0; float: left; margin: 0 20px 0 0; width:180px; height: 250px;" src="<?php echo $row['images'] ?>" alt="image" />
				<!-- information -->
				<p>
					<b>Information:</b>
					<?php echo $row['summary'] ?>
				</p>
				<!-- like, comment, rate -->
				<?php 
					$sqlImage="select * from image";
					$queryImage = mysql_query($sqlImage);
					if(mysql_num_rows($queryImage) == 0)
					{
						echo "Nôi dung đang được xây dựng, quay lại sau !!!!!";
					}
					else
					{
						while($rowImage=mysql_fetch_array($queryImage))
						{
							if($rowImage['id']==1)//comment
							{
						?>
						<p>
							<a href="#" style="text-decoration: none"><img src="<?php echo $rowImage['url']?>">:<?php echo $row['comment'] ?></img></a>
							&nbsp;&nbsp;  
						<?php 
							}
							if($rowImage['id']==2)//like
							{
						?>
								<a href="#" style="text-decoration: none"><img src="<?php echo $rowImage['url']?>">:<?php echo $row['likes'] ?> </img></a>
								&nbsp;&nbsp;
						<?php
							}
							if($rowImage['id']==3)//rate
							{
						?>
								<a href="#" style="text-decoration: none"><img src="<?php echo $rowImage['url']?>">:<?php echo $row['rate'] ?></img></a>
						</p>
						<?php
							}
						}
					}
				?>
				
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
