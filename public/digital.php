<?php 
							$digital = trim($row['digital']);
							$arrayDigital = split ("\,", $digital); 
							$count = count($arrayDigital);
							for ($i = 0; $i < $count; $i++) {
								if($arrayDigital[$i] == "2D")
								{
									$sqlImage="select * from image where id=4";
									$queryImage = mysql_query($sqlImage);
									$rowImage=mysql_fetch_array($queryImage);
									if(mysql_num_rows($query) == 0)
									{
										echo "Nội dung không tồn tại";
									}else{
									?>
										<img style="width:90px; height:90px;" src="<?php echo $rowImage['url']?>"/>
									<?php
									}
								}
								if($arrayDigital[$i] == "3D")
								{
									$sqlImage="select * from image where id=5";
									$queryImage = mysql_query($sqlImage);
									$rowImage=mysql_fetch_array($queryImage);
									if(mysql_num_rows($query) == 0)
									{
										echo "Nội dung không tồn tại";
									}else{
									?>
										<img style="width:90px; height:90px;" src="<?php echo $rowImage['url']?>"/>
									<?php
									}
								}
								if($arrayDigital[$i] == "4DX")
								{
									$sqlImage="select * from image where id=6";
									$queryImage = mysql_query($sqlImage);
									$rowImage=mysql_fetch_array($queryImage);
									if(mysql_num_rows($query) == 0)
									{
										echo "Nội dung không tồn tại";
									}else{
									?>
										<img style="width:90px; height:90px;" src="<?php echo $rowImage['url']?>"/>
									<?php
									}
								}
							}
						?>