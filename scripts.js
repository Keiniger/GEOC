$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});

var idFila = 4;
function agregarFila() {

    var botonAgregar = document.getElementById('botonAgregar');
    var codigo       = document.getElementById('productoCodigo').value;
    var descripcion  = document.getElementById('productoDescripcion').value;
    var proveedor    = document.getElementById('productoProveedor').value;
    var table        = document.getElementsByTagName('table')[0];
    var newRow       = table.insertRow(table.rows.length);
    
    newRow.id = idFila;

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);

    cel1.innerHTML = codigo;
    cel2.innerHTML = descripcion;
    cel3.innerHTML = 0;
    cel4.innerHTML = proveedor;
    cel5.innerHTML = 
    `<td id=${idFila}>
        <a onclick="borrar(${idFila})" type="submit">
            <i class="fas fa-trash-alt h2" style="margin: 30% 30% 30% 30%;"></i>
        </a>
    </td>`;

    idFila++;
}

var idProducto = 0;
function agregarProducto() {
    document.getElementById('nuevoProducto').insertAdjacentHTML('beforebegin', `
    <div id="${idProducto}" style="display: flex; align-items: center; flex-wrap: wrap;">
        <div class="col" style="flex-grow: 10;">
            <div class="form-group">
                <select class="form-control" id="sel1" placeholder="Categoría" width="50%">
                    <option>Producto</option>
                    <option>Paquete de galletitas de 150gr</option>
                    <option>Paquete de galletitas de 400gr</option>
                    <option>Paquete de galletitas de 700gr</option>
                </select>
            </div>
        </div>
        <div style="display: inline-block; width: 15%;">
            <input type="number" class="form-control" id="cantidad" placeholder="Cantidad">
        </div>
        <a onclick="borrar(${idProducto})" type="submit" data-toggle="popover" data-trigger="hover" title="Logica" data-content="Aca iria la lógica" style="margin: 8px 0px 0px 15px;">
            <i class="fas fa-trash-alt h1"></i>
        </a>
    </div>`);
    idProducto++;
}

function borrar(_id){
    let eliminar = confirm("Está seguro que desea eliminar este producto?");
    if(eliminar){
        document.getElementById(_id).remove();
    }
}

function ordenDeCompraCreada(){
    let ordenCreada = confirm("Orden de compra creada correctamente");
    if(ordenCreada){
        location.reload();
    }
}

var x = window.matchMedia("(max-width: 992px)")
function mediaQuery(x) {
    if (x.matches) { // If media query matches
      document.getElementById("añadir").className = "col";
    } else {
      document.getElementById("añadir").className = "row";
    }
}
