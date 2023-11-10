// Obtener elementos del formulario y la tabla
const facturaForm = document.getElementById('factura-form');
const tablaFacturas = document.getElementById('tabla-facturas');
const totalPagar = document.getElementById('totalPagar');
const buscador = document.getElementById('buscador');
const buscarProveedorBtn = document.getElementById('buscarProveedor');
const ordenarNumeroOCBtn = document.getElementById('ordenarNumeroOC');
const ordenarProveedorBtn = document.getElementById('ordenarProveedor');
const ordenarMontoBtn = document.getElementById('ordenarMonto');
const ordenarCondicionVentaBtn = document.getElementById('ordenarCondicionVenta');
const ordenarFechaVencimientoBtn = document.getElementById('ordenarFechaVencimiento');
const guardarFacturasBtn = document.getElementById('guardarFacturas');

// Arreglo para almacenar las facturas
let facturas = [];

// Función para agregar una factura
function agregarFactura(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const numeroOC = document.getElementById('numeroOC').value;
    const numeroFactura = document.getElementById('numeroFactura').value;
    const proveedor = document.getElementById('proveedor').value;
    const fecha = document.getElementById('fecha').value;
    const condicionVenta = document.getElementById('condicionVenta').value;
    const fechaVencimiento = document.getElementById('fechaVencimiento').value;
    const monto = parseFloat(document.getElementById('monto').value);

    // Validar los valores ingresados
    if (!numeroOC || !numeroFactura || !proveedor || !fecha || !condicionVenta || !fechaVencimiento || isNaN(monto)) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }

    // Crear un objeto factura
    const factura = {
        numeroOC,
        numeroFactura,
        proveedor,
        fecha,
        condicionVenta,
        fechaVencimiento,
        monto
    };

    // Agregar la factura al arreglo
    facturas.push(factura);

    // Limpiar el formulario
    facturaForm.reset();

    // Actualizar la tabla
    actualizarTabla();
    guardarFacturas();
}

// Función para editar una factura
function editarFactura(index) {
    // Obtener la factura a editar
    const factura = facturas[index];

    // Rellenar el formulario con los valores de la factura seleccionada
    document.getElementById('numeroOC').value = factura.numeroOC;
    document.getElementById('numeroFactura').value = factura.numeroFactura;
    document.getElementById('proveedor').value = factura.proveedor;
    document.getElementById('fecha').value = factura.fecha;
    document.getElementById('condicionVenta').value = factura.condicionVenta;
    document.getElementById('fechaVencimiento').value = factura.fechaVencimiento;
    document.getElementById('monto').value = factura.monto;

    // Eliminar la factura del arreglo
    facturas.splice(index, 1);

    // Actualizar la tabla
    actualizarTabla();
    guardarFacturas();
}

// Función para eliminar una factura
function eliminarFactura(index) {
    // Confirmar la eliminación
    if (confirm('¿Seguro que deseas eliminar esta factura?')) {
        // Eliminar la factura del arreglo
        facturas.splice(index, 1);

        // Actualizar la tabla
        actualizarTabla();
        guardarFacturas();
    }
}

// Función para ordenar la tabla por un criterio
function ordenarPorCriterio(criterio) {
    facturas.sort((a, b) => {
        if (criterio === 'monto') {
            return a[criterio] - b[criterio];
        } else {
            return a[criterio].localeCompare(b[criterio]);
        }
    });

    // Actualizar la tabla
    actualizarTabla();
}

// Función para filtrar las facturas por proveedor
function filtrarPorProveedor() {
    const textoBusqueda = buscador.value.trim().toLowerCase();
    const facturasFiltradas = facturas.filter(factura => factura.proveedor.toLowerCase().includes(textoBusqueda));
    // Actualizar la tabla con las facturas filtradas
    actualizarTabla(facturasFiltradas);
}

// Función para actualizar la tabla
function actualizarTabla(facturasMostrar) {
    // Limpiar la tabla
    tablaFacturas.innerHTML = '';

    // Usar facturasMostrar si se proporciona, de lo contrario, usar todas las facturas
    const facturasAMostrar = facturasMostrar || facturas;

    facturasAMostrar.forEach((factura, index) => {
        const row = tablaFacturas.insertRow();
        row.innerHTML = `
            <td>${factura.numeroOC}</td>
            <td>${factura.proveedor}</td>
            <td>${factura.numeroFactura}</td>
            <td>$${factura.monto.toFixed(2)}</td>
            <td>${factura.condicionVenta}</td>
            <td>${factura.fechaVencimiento}</td>
            <td>
                <button class="editar-button" data-index="${index}">Editar</button>
                <button class="eliminar-button" data-index="${index}">Eliminar</button>
            </td>
        `;
    });

    // Calcular y mostrar el total a pagar
    const total = facturasAMostrar.reduce((total, factura) => total + factura.monto, 0);
    totalPagar.textContent = total.toFixed(2);

    // Agregar eventos a los botones de editar y eliminar
    const editarButtons = document.querySelectorAll('.editar-button');
    const eliminarButtons = document.querySelectorAll('.eliminar-button');

    editarButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            editarFactura(index);
        });
    });

    eliminarButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            eliminarFactura(index);
        });
    });
}

// Agregar un evento para el formulario
facturaForm.addEventListener('submit', agregarFactura);

// Agregar eventos de clic para los botones de ordenamiento
ordenarNumeroOCBtn.addEventListener('click', () => ordenarPorCriterio('numeroOC'));
ordenarProveedorBtn.addEventListener('click', () => ordenarPorCriterio('proveedor'));
ordenarMontoBtn.addEventListener('click', () => ordenarPorCriterio('monto'));
ordenarCondicionVentaBtn.addEventListener('click', () => ordenarPorCriterio('condicionVenta'));
ordenarFechaVencimientoBtn.addEventListener('click', () => ordenarPorCriterio('fechaVencimiento'));

// Agregar un evento para el botón de búsqueda de proveedor
buscarProveedorBtn.addEventListener('click', filtrarPorProveedor);

// Función para guardar las facturas en el almacenamiento local
function guardarFacturas() {
    // Convierte el arreglo de facturas a formato JSON
    const facturasJSON = JSON.stringify(facturas);

    // Almacena el JSON en el almacenamiento local
    localStorage.setItem('facturas', facturasJSON);
}

// Función para cargar las facturas desde el almacenamiento local
function cargarFacturas() {
    // Obtiene el JSON almacenado en el almacenamiento local
    const facturasJSON = localStorage.getItem('facturas');

    // Si hay información almacenada, conviértela de nuevo a un arreglo de facturas
    if (facturasJSON) {
        facturas = JSON.parse(facturasJSON);
    }
}

// Llama a la función para cargar las facturas al cargar la página
cargarFacturas();

// Llama a la función para guardar las facturas cada vez que se actualiza la tabla
actualizarTabla();