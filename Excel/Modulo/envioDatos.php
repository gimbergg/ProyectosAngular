<?php
if (! defined ( 'sugarEntry' ))define ( 'sugarEntry', true );
require_once ('data/BeanFactory.php');
require_once ('include/entryPoint.php');
	
$datos = $_GET['datos'];

$arr1 = str_replace("[[", "", $datos);
$arr1 = str_replace("]]", "", $arr1);
    
$arr1 = str_replace("[", "", $arr1);
$arr1 = str_replace("],", "|", $arr1);
$arr1 = str_replace("&quot;","'",$arr1);	
$arr1 = str_replace("','", "~", $arr1);
$arr1 = str_replace("'", "", $arr1);

$arr2 = explode("|", $arr1);	
$arridoc = array_pop($arr2);
$arrprec = array_pop($arr2);
$arrprec = explode(",", $arrprec);

for ($i=0; $i<count($arr2); $i++)
{
$textfila = $arr2[$i];
$fila = explode("~", $textfila);
$KUNNR = $fila[0];
$ProductCode = $fila[0];
$CantidadMin = $fila[1];
$CodUsuario = $fila[2];
$FechaModificacion = $fila[3];
$Fecha = $fila[4];
$CodVendedor = $fila[5];
$OrgVenta = $fila[6];
$CodCanal = $fila[7];
$CodSector = $fila[8];
}


$url="http://192.168.1.24:55/mule/planinventario";
$curl=curl_init($url);
$data = $arr2;

curl_setopt($curl,CURLOPT_HTTPHEADER,array("Content-type:application/json"));
curl_setopt($curl,CURLOPT_POST,true);
curl_setopt($curl,CURLOPT_POSTFIELDS,$data);
curl_exec($curl);
curl_close($curl);

echo $datos;

?> 

