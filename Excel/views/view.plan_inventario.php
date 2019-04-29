<?php
require_once('include/MVC/View/views/view.html.php');

class customSCO_OrdenCompraViewPlan_inventario extends ViewHtml {

  public function display() {   
    global $current_user;
    $id_usuario = $current_user->iddivision_c;    
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
        .modal-header{
            background-color:blue;
        }
        .miVentanaSucc .modal-body{
            background-color:#dbe4db ;
        }
    </style>
    ';
    if($id_usuario == 01){
    echo ' 

    <link rel="stylesheet" href="/custom/include/javascript/Excel/css/jquery.jexcel.css" type="text/css" />
    <link rel="stylesheet" href="/custom/in?clude/javascript/Excel/css/style.css" type="text/css" /> 
        
    <script src="/custom/include/javascript/Excel/js/jquery.jexcel.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>


    <div class="modal fade" id="miVentanaErrRes" role="dialog">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="alert alert-danger">
                    <strong><b><h2 style="color:red;">Algo salio mal! :-(</h2></b></strong> 
                    <h3 style="color:red;">Intentelo nuevamente mas tarde.</h3>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="miVentanaErrConx" role="dialog">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="alert alert-danger">
                    <strong><b><h2 style="color:red;">ERROR!!!</h2></b></strong> 
                    <h3 style="color:red;">No se pudo procesar la informacion. Intentelo nuevamente.</h3>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="miVentanaSucc" role="dialog">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="alert alert-success">
                    <strong><b><h2 style="color:green;">ENVIO EXITOSO</h2></b></strong> 
                    <h3 style="color:green;">De datos de Excel.</h3>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>


    <br>
    <div class="container-fluid">
        <h2><b>HBM PLAN INVENTARIO</b></h2>
        <div class="panel panel-success">          
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
    }else{
        echo '<div class="alert alert-danger">
                    <strong>Usuario no autorizado</strong> 
                    <h3 style="color:red;">No esta autorizado para ver esta pagina.</h3>
                    </div>';
    }
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
        colWidths: [ 130, 130, 130, 150, 90, 170, 110, 110],
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
        colWidths: [ 130, 130, 130, 150, 90, 170, 110, 110],
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
        var x = datos[0];
        console.log('VARIABLE' + datos);
        datos = JSON.stringify(datos); 

        console.log(datos);

        $.ajax({
            type: 'POST',
            url: 'index.php?to_pdf=true&module=SCO_OrdenCompra&action=envioDatos',
            data: {datos:datos},
            success: function (e) {
                
                var res = e.substring(0, 3);
                if(res == 200){
                    $('#miVentanaSucc').modal('show');    
                }else{
                    $('#miVentanaErrRes').modal('show');
                }
                console.log('Conexion Exitosa', e);                
                $('#miVentana').modal('show');
            },
            error: function (e) {
                console.log('ERROR, No se pudo conectar', e);
                $('#miVentanaErrConx').modal('show');
            }
        });
    }
    </script>";
  }
}
?>