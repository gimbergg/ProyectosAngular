<?php
require_once('include/MVC/View/views/view.html.php');
class customSCO_OrdenCompraViewDescuento_producto extends ViewHtml {

  public function display() {   
    echo ' 
      <script src="/custom/include/javascript/Excel/js/jquery-3.3.1.min.js"></script>
      <script src="/custom/include/javascript/Excel/js/jquery.jexcel.js"></script>
      <link rel="stylesheet" href="/custom/include/javascript/Excel/css/jquery.jexcel.css" type="text/css" />
      <link rel="stylesheet" href="/custom/in?clude/javascript/Excel/css/style.css" type="text/css" /> 
     <br>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <h5 class="card-header">Descuento Productos AEL</h5>
                        <div class="card-body">
                            <button type="button" id="json" onclick="get()" class="btn btn-primary btn-sm">Enviar</button>
                            <button type="button" class="btn btn-secondary btn-sm">Limpiar</button>
                            <br><br>
                            <div id="my"></div>
                        </div>
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
        colHeaders: ['Codigo cliente','Codigo Producto', 'Cantidad Minima','Cantidad Maxima','Codigo Vendedor', 'Organizacion Ventas', 'Canal', 'Area Mercado'],
        colWidths: [ 130, 150, 150, 150, 150, 200, 50, 150],
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
    
    $.support.cors = true;
    function get(method) {     
        $.support.cors = true;
               
        var datos = $('#my').jexcel('getData');
            datos = JSON.stringify(datos);
        var urls = '';
        console.log(datos);
        $.ajax({
            type: 'POST',
            url: urls,
            url: 'index.php?to_pdf=true&module=SCO_OrdenCompra&action=envioDatos',
            data: datos,
            success: function (e) {
                console.log('Conexion Exitosa', e);
                alert('Envio exitoso de la Informacion');
                location.reload(true);
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