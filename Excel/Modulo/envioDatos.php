<?php
if (! defined ( 'sugarEntry' ))define ( 'sugarEntry', true );
require_once ('data/BeanFactory.php');
require_once ('include/entryPoint.php');
	
$datos = $_POST['datos'];

$arr1 = str_replace("[[", "", $datos);
$arr1 = str_replace("]]", "", $arr1);
$arr1 = str_replace("[", "", $arr1);
$arr1 = str_replace("],", "|", $arr1);
$arr1 = str_replace("&quot;","'",$arr1);	
$arr1 = str_replace("','", "~", $arr1);
$arr1 = str_replace("'", "", $arr1);

$arr2 = explode("|", $arr1);

for ($i=0; $i<count($arr2); $i++)
{
$textfila = $arr2[$i];
$fila = explode("~", $textfila);


$KUNNR = $fila[0];
$ProductCode = $fila[1];
$CodVendedor = $fila[2];
$OrgVenta = $fila[3];
$CodCanal = $fila[4];
$AreaMercado = $fila[5];
if($fila[6] == ''){
	$CantidadMin = 0;
}else{
	$CantidadMin = $fila[6];
}
if($fila[7] == ''){
	$CantidadMax = 0;
}else{
	$CantidadMax = $fila[7];
}

if($i==0){
	$json .= '{"KUNNR":"'.$KUNNR.'","ProductCode":"'.$ProductCode.'","CodVendedor":"'.$CodVendedor.'","OrgVenta":"'.$OrgVenta.'","CodCanal":"'.$CodCanal.'","AreaMercado":"'.$AreaMercado.'","CantidadMin":"'.$CantidadMin.'","CantidadMax":"'.$CantidadMax.'"}';	
}else{
	$json .= ',{"KUNNR":"'.$KUNNR.'","ProductCode":"'.$ProductCode.'","CodVendedor":"'.$CodVendedor.'","OrgVenta":"'.$OrgVenta.'","CodCanal":"'.$CodCanal.'","AreaMercado":"'.$AreaMercado.'","CantidadMin":"'.$CantidadMin.'","CantidadMax":"'.$CantidadMax.'"}';	
}

}


$proyecto = " SELECT ServicioWeb
FROM suitecrm.wsh_webservicio
WHERE modulo = 'PlanInventario'";
$res_proyecto = $GLOBALS['db']->query($proyecto, true);
$row_proyecto = $GLOBALS['db']->fetchByAssoc($res_proyecto);
$ServicioWeb = $row_proyecto['ServicioWeb'];   



$url= $ServicioWeb;
$curl=curl_init($url);
$data = '{"OrgVentaHansa":"1100","PlanInventario":['.$json.']}';



curl_setopt($curl,CURLOPT_HTTPHEADER,array("Content-type:application/json"));
curl_setopt($curl,CURLOPT_POST,true);
curl_setopt($curl,CURLOPT_POSTFIELDS,$data);
curl_exec($curl);
curl_close($curl);

?> 
