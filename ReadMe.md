# Sistema de Gestión de Facturas y Proveedores

Este es un simulador de facturas que permite registrar y contabilizar facturas de proveedores. Los usuarios pueden ingresar la información de la factura, y la aplicación mostrará una lista de todas las facturas registradas en una tabla.

## Cómo Funciona

1. **Llena el formulario con la información de la factura, incluyendo el número de orden de compra (OC), número de factura, nombre del proveedor, fecha, fecha de vencimiento, condición de venta y monto.**

2. **Haz clic en "Agregar Factura" para registrar la factura en la lista.**

3. **La tabla muestra la lista de todas las facturas registradas con las siguientes columnas:**
   - Número de OC
   - Número de Factura
   - Proveedor
   - Fecha
   - Fecha de Vencimiento
   - Condición de Venta
   - Monto
   - Seleccionar: Permite seleccionar facturas individuales.
   - Acciones: Permite editar o eliminar facturas.

4. **En la parte inferior de la tabla, se muestra el "Total a pagar," que es la suma de los montos de todas las facturas registradas.**

5. **Puedes filtrar las facturas por proveedor ingresando el nombre del proveedor en el campo de filtro y haciendo clic en "Filtrar por Proveedor."**

## Funciones Agregadas

- **Editar Factura:**
Puedes editar una factura haciendo clic en el botón "Editar" en la columna de acciones. La factura se elimina temporalmente de la lista para su edición.

- **Eliminar Factura:**
Puedes eliminar una factura haciendo clic en el botón "Eliminar" en la columna de acciones.

- **Filtrar por Proveedor:**
Puedes filtrar las facturas por proveedor para ver la información específica de ese proveedor y el total a pagar solo para ese proveedor.

## Estructura de Archivos

- `index.html`: El archivo principal de HTML para la página web.
- `style.css`: El archivo de hojas de estilo CSS para dar formato a la página.
- `script.js`: El archivo de JavaScript para manejar la lógica del simulador.

## Requisitos del Sistema

- Navegador web moderno compatible (Ejemplo: Google Chrome, Mozilla Firefox, Microsoft Edge).

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript


## Instrucciones de Uso

1. Abre el archivo `index.html` en tu navegador web.
2. Llena el formulario con los detalles de la factura y haz clic en "Agregar Factura" para registrarla.
3. Utiliza las funciones de edición, eliminación, selección y filtrado según tus necesidades.

## Licencia

Este proyecto no lleva licencia.

## Colaboradores

- Cristian Varela https://github.com/crisvarela98 - Desarrollador principal

## Actualizaciones y Versiones

- Versión 1.0 (Fecha de lanzamiento: Noviembre/2023): Implementación inicial de las características principales. Agregadas funciones de guardar la información.
- Versión 1.1 (Proximamente):
Bibliotecas Requeridas para Exportación

- Para exportar a Excel, se requiere la biblioteca [exceljs](https://github.com/exceljs/exceljs).
- Para exportar a Word, se requiere la biblioteca [docx](https://github.com/dolanmiu/docx).
- Para exportar a PDF, se requiere la biblioteca [pdfmake](https://github.com/bpampuch/pdfmake).

## Información de Contacto

Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto conmigo:

- Correo Electrónico: crisvarela98@gmail.com
- Sitio Web: https://crisvarela98.github.io/

