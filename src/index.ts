let listaProductos: string[] = ["Camisa", "Pantalones"];
let listaPrecios: number[] = [30000, 40000];
let historialVentas: string[] = [];

let nombreUsuario: string | null = prompt("Bienvenido, por favor ingresa tu nombre:");
let seleccionMenu: string | null = "";

function mostrarCatalogo(): void {
  let mensaje: string = "Catálogo de productos:\n";
  for (let i = 0; i < listaProductos.length; i++) {
    mensaje += `${i + 1}. ${listaProductos[i]} - $${listaPrecios[i]}\n`;
  }
  alert(mensaje);
}

function procesarCompra(): void {
  const seleccionProducto: string | null = prompt("¿Qué producto deseas comprar? (Ingresa el número correspondiente)");

  if (seleccionProducto === "1" || seleccionProducto === "2") {
    const indice = Number(seleccionProducto) - 1;
    historialVentas.push(`${nombreUsuario} compró ${listaProductos[indice]}`);
    alert("Compra realizada con éxito.");
  } else {
    alert("Opción inválida. Por favor, elige un número válido.");
  }
}

function mostrarVentas(): void {
  if (historialVentas.length === 0) {
    alert("Aún no se han registrado ventas.");
  } else {
    let registro: string = "Historial de ventas:\n";
    for (let venta of historialVentas) {
      registro += `- ${venta}\n`;
    }
    alert(registro);
  }
}

function agregarProductoAlInicio(): void {
  const nuevoProducto: string | null = prompt("Ingresa el nombre del nuevo producto:");
  const nuevoPrecioStr: string | null = prompt("Ingresa el precio del producto:");
  const nuevoPrecio: number = Number(nuevoPrecioStr);

  if (nuevoProducto && !isNaN(nuevoPrecio)) {
    listaProductos.unshift(nuevoProducto);
    listaPrecios.unshift(nuevoPrecio);
    alert(`Producto "${nuevoProducto}" agregado al inicio del catálogo.`);
  } else {
    alert("Entrada inválida. Asegúrate de ingresar un nombre y un precio numérico.");
  }
}

function eliminarPrimerProducto(): void {
  const productoEliminado = listaProductos.shift();
  listaPrecios.shift();
  alert(`Producto eliminado del inicio: ${productoEliminado}`);
}

// Bucle principal del menú
while (seleccionMenu !== "6") {
  seleccionMenu = prompt(
    "Menú Principal:\n" +
    "1. Ver catálogo\n" +
    "2. Realizar compra\n" +
    "3. Ver historial de ventas\n" +
    "4. Agregar producto al inicio\n" +
    "5. Eliminar primer producto\n" +
    "6. Salir del sistema\n\n" +
    "Selecciona una opción:"
  );

  switch (seleccionMenu) {
    case "1":
      mostrarCatalogo();
      break;
    case "2":
      procesarCompra();
      break;
    case "3":
      mostrarVentas();
      break;
    case "4":
      agregarProductoAlInicio();
      break;
    case "5":
      eliminarPrimerProducto();
      break;
    case "6":
      alert("Gracias por utilizar el sistema de compras.");
      break;
    default:
      alert("Opción no reconocida. Intenta nuevamente.");
  }
}
