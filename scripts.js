$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
  });
    
function agregarFila(){
    var botonAgregar= document.getElementById('botonAgregar');
    var codigo      = document.getElementById('productoCodigo').value;
    var descripcion = document.getElementById('productoDescripcion').value;
    var proveedor   = document.getElementById('productoProveedor').value;
    var table       = document.getElementsByTagName('table')[0];
    var newRow      = table.insertRow(table.rows.length);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);

    cel1.innerHTML = codigo;
    cel2.innerHTML = descripcion;
    cel3.innerHTML = 0;
    cel4.innerHTML = proveedor;
}

