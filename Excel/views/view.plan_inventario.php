<?php
require_once('include/MVC/View/views/view.html.php');
class customSCO_OrdenCompraViewPlan_inventario extends ViewHtml {

  public function display() {  
    echo '
    <style>
        #my{
            //margin: auto;
            //display: table;
        }

        .jexcel>thead>tr>td {
            font-size: 13px;
            text-align: left;
            background-color:#dbe4db !important;
            color:#000;
        }

        .jexcel>tbody>tr>td {
            padding: 3px;
            font-size: 13px;
            text-align: left;
        }

        .detail tr td {
            color: #444444 !important;
            border-color: #cbdae6 !important;
            background-color: #fff !important;
        }
        .jexcel>tbody>tr>td.readonly {
            color: rgba(50, 150, 100, 0.8);
        }
        .botones{
            
        }
    </style>
    ';
    echo ' 
    <script src="/custom/include/javascript/Excel/js/jquery-3.3.1.min.js"></script>
    <script src="/custom/include/javascript/Excel/js/jquery.jexcel.js"></script>
    <link rel="stylesheet" href="/custom/include/javascript/Excel/css/jquery.jexcel.css" type="text/css" />
    <link rel="stylesheet" href="/custom/in?clude/javascript/Excel/css/style.css" type="text/css" /> 
    <br>
    <div class="container-fluid">
        <h2><b>HBM PLAN INVENTARIO</b></h2>
        <div class="panel panel-success">
            <div class="panel-heading">Excel</div>            
            <div class="panel-body">
                <div class="botones">                    
                    <button type="button" id="json" onclick="get()" class="btn btn-primary btn-sm">Enviar datos</button>
                    <button type="button" onclick="limpiar()"  class="btn btn-secondary btn-sm">Limpiar Excel</button>
                </div>
                <br>
                <div id="my"></div>
            </div>
        </div>
    </div>  
    ';
    
    echo "<script>
    $.support.cors = true;
    data = [];
    update = function (obj, cel, row) {
        function checkPos(pos) {
            return pos == producto;
        }
    }
    
    $('#my').jexcel({ 
        data:data,
        onchange:update,
        colHeaders: ['Codigo cliente','Codigo Producto','Codigo Vendedor', 'Organizacion Ventas', 'Canal', 'Area Mercado', 'Cantidad Minima','Cantidad Maxima'],
        colWidths: [ 130, 130, 130, 150, 90, 150, 110, 110],
        columns: [
            { type: 'text'},
            { type: 'text', readOnly:false},
            { type: 'text', readOnly:false},
            { type: 'text', readOnly:false},
            { type: 'text'},
            { type: 'text'},
            { type: 'text'},
            { type: 'text'}        
          ]    
        });
    $('#json').on('click', function () {
        var data = $('#my').jexcel('getData');
    });

    function limpiar(){
        $('#my').jexcel({ 
        data:[],
        onchange:update,
        colHeaders: ['Codigo cliente','Codigo Producto','Codigo Vendedor', 'Organizacion Ventas', 'Canal', 'Area Mercado', 'Cantidad Minima','Cantidad Maxima'],
        colWidths: [ 130, 130, 130, 150, 90, 150, 110, 110],
        columns: [
            { type: 'text'},
            { type: 'text', readOnly:false},
            { type: 'text', readOnly:false},
            { type: 'text', readOnly:false},
            { type: 'text'},
            { type: 'text'},
            { type: 'text'},
            { type: 'text'}        
            ]     
        });
    }

    function get() {     
        var datos = $('#my').jexcel('getData');
        datos = JSON.stringify(datos);        
        console.log(datos);

        $.ajax({
            type: 'GET',
            url: 'index.php?to_pdf=true&module=SCO_OrdenCompra&action=envioDatos',
            data: {datos:datos},
            success: function (e) {
                console.log('Conexion Exitosa', e);
                alert('Envio exitoso de la Informacion');
                //location.reload(true);
            },
            error: function (data) {
                console.log('ERROR, No se pudo conectar', data);
                alert('ERROR!!!, No se pudo procesar la informacion. Intentelo nuevamente');
            }
        });
    }
    </script>";
  }
}
?>