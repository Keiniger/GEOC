$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});

function agregarFila() {
    var botonAgregar = document.getElementById('botonAgregar');
    var codigo = document.getElementById('productoCodigo').value;
    var descripcion = document.getElementById('productoDescripcion').value;
    var proveedor = document.getElementById('productoProveedor').value;
    var table = document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(table.rows.length);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);

    cel1.innerHTML = codigo;
    cel2.innerHTML = descripcion;
    cel3.innerHTML = 0;
    cel4.innerHTML = proveedor;
}

function agregarProducto() {
    document.getElementById('nuevoProducto').insertAdjacentHTML('beforebegin', `
    <div style="display: flex; align-items: center; flex-wrap: wrap;">
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
        <div class="col text-center">
            <a onclick="agregarProducto()" type="submit" data-toggle="popover" data-trigger="hover" title="Logica" data-content="Aca iria la lógica" style="margin-top: 8px;">
                <i class="fas fa-plus-circle h1"></i>
            </a>
        </div>
    </div>`);
}