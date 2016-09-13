<script type="text/javascript" src="js/flore_full.js"></script>
<script type="text/javascript" src="js/includefile.js"></script>
<script type="text/javascript" src="js/robot.js"></script>
<?php 
/*
$robot    = 'robot';
$svgCACHE = array();
$robot_dir_array = scandir($robot,1);
for($i=0; $i<count($robot_dir_array); $i++){
	if($robot_dir_array[$i] != '.' && $robot_dir_array[$i] != '..' ){
		// Scan the directory inside svg
		$ind_dir_path = $robot."/".$robot_dir_array[$i];
		$ind_dir = scandir($ind_dir_path,1);
		
		for($j=0; $j<count($ind_dir); $j++){
			if($ind_dir[$j] != '.' && $ind_dir[$j] != '..' ){
					//file_get_contents($path);
				$str = $robot_dir_array[$i]."_".$ind_dir[$j];
				$str_sub =  substr($str, 0, -4);
				//echo $ind_dir_path."/".$ind_dir[$j];
				$svgCACHE[$str_sub] = file_get_contents($ind_dir_path."/".$ind_dir[$j]);
				//break;
			}
		}
	
	//break;
	}
}
//	echo "<pre>";
//	print_r(json_encode($svgCACHE));
	
	$fp = fopen('results.json', 'w');
	fwrite($fp, json_encode($svgCACHE));
	fclose($fp);
	*/
?>
