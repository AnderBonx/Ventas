
let registrosVentas: { id: string; producto: string; cantidad: number }[] = [];
let catalogoProductos: { nombre: string; precio: number }[] = [];
let listaUsuarios: { nombre: string; correo: string }[] = [];
let finalizarPrograma = false;

function mostrarMenuPrincipal() {
  let eleccion: number;
  do {
    if (finalizarPrograma) break;
    eleccion = parseInt(readlineSync.question(
      "Seleccione una opción:\n1. Módulo Ventas\n2. Módulo Productos\n3. Módulo Usuarios\n0. Salir\n> "
    ));
    switch (eleccion) {
      case 1:
        menuVentas();
        break;
      case 2:
        menuProductos();
        break;
      case 3:
        menuUsuarios();
        break;
      case 0:
        console.log("¡Programa finalizado!");
        break;
      default:
        console.log("Opción inválida");
    }
  } while (eleccion !== 0);
}

function menuVentas() {
  let opcionVenta: number;
  do {
    opcionVenta = parseInt(readlineSync.question(
      "GESTIÓN DE VENTAS\n1. Agregar\n2. Ver\n3. Editar\n4. Quitar\n0. Atrás\n9. Terminar programa\n> "
    ));
    switch (opcionVenta) {
      case 1: agregarVenta(); break;
      case 2: verVentas(); break;
      case 3: editarVenta(); break;
      case 4: quitarVenta(); break;
      case 9: finalizarPrograma = true; return;
      case 0: break;
      default: console.log("Opción inválida");
    }
  } while (opcionVenta !== 0 && !finalizarPrograma);
}

function agregarVenta() {
  let codigo = readlineSync.question("ID de la venta: ");
  let nombreProducto = readlineSync.question("Nombre del producto: ");
  let unidades = parseInt(readlineSync.question("Cantidad vendida: "));
  registrosVentas.push({ id: codigo, producto: nombreProducto, cantidad: unidades });
  console.log("Venta agregada correctamente.");
}

function verVentas() {
  if (registrosVentas.length === 0) {
    console.log("No hay ventas disponibles.");
  } else {
    console.log("LISTADO DE VENTAS:");
    registrosVentas.forEach((venta, pos) => {
      console.log(`${pos + 1}. ID: ${venta.id} - Producto: ${venta.producto} - Cantidad: ${venta.cantidad}`);
    });
  }
}

function editarVenta() {
  verVentas();
  let indice = parseInt(readlineSync.question("Número de venta a modificar: ")) - 1;
  if (registrosVentas[indice]) {
    registrosVentas[indice].producto = readlineSync.question("Nuevo producto: ");
    registrosVentas[indice].cantidad = parseInt(readlineSync.question("Nueva cantidad: "));
    console.log("Venta modificada.");
  } else {
    console.log("Índice no válido.");
  }
}

function quitarVenta() {
  verVentas();
  let indice = parseInt(readlineSync.question("Número de venta a eliminar: ")) - 1;
  if (registrosVentas[indice]) {
    registrosVentas.splice(indice, 1);
    console.log("Venta eliminada.");
  } else {
    console.log("Índice no válido.");
  }
}

function menuProductos() {
  let opcionProducto: number;
  do {
    opcionProducto = parseInt(readlineSync.question(
      "GESTIÓN DE PRODUCTOS\n1. Agregar\n2. Ver\n3. Editar\n4. Quitar\n0. Atrás\n9. Terminar programa\n> "
    ));
    switch (opcionProducto) {
      case 1: agregarProducto(); break;
      case 2: verProductos(); break;
      case 3: editarProducto(); break;
      case 4: quitarProducto(); break;
      case 9: finalizarPrograma = true; return;
      case 0: break;
      default: console.log("Opción inválida");
    }
  } while (opcionProducto !== 0 && !finalizarPrograma);
}

function agregarProducto() {
  let nombreProd = readlineSync.question("Nombre del producto: ");
  let valor = parseFloat(readlineSync.question("Precio del producto: "));
  catalogoProductos.push({ nombre: nombreProd, precio: valor });
  console.log("Producto agregado.");
}

function verProductos() {
  if (catalogoProductos.length === 0) {
    console.log("No hay productos registrados.");
  } else {
    console.log("CATÁLOGO DE PRODUCTOS:");
    catalogoProductos.forEach((prod, pos) => {
      console.log(`${pos + 1}. Nombre: ${prod.nombre} - Precio: $${prod.precio.toFixed(2)}`);
    });
  }
}

function editarProducto() {
  verProductos();
  let idx = parseInt(readlineSync.question("Número del producto a editar: ")) - 1;
  if (catalogoProductos[idx]) {
    catalogoProductos[idx].nombre = readlineSync.question("Nuevo nombre: ");
    catalogoProductos[idx].precio = parseFloat(readlineSync.question("Nuevo precio: "));
    console.log("Producto editado.");
  } else {
    console.log("Índice inválido.");
  }
}

function quitarProducto() {
  verProductos();
  let idx = parseInt(readlineSync.question("Número del producto a eliminar: ")) - 1;
  if (catalogoProductos[idx]) {
    catalogoProductos.splice(idx, 1);
    console.log("Producto eliminado.");
  } else {
    console.log("Índice inválido.");
  }
}

function menuUsuarios() {
  let opcionUsuario: number;
  do {
    opcionUsuario = parseInt(readlineSync.question(
      "GESTIÓN DE USUARIOS\n1. Registrar\n2. Ver\n3. Modificar\n4. Borrar\n0. Atrás\n9. Terminar programa\n> "
    ));
    switch (opcionUsuario) {
      case 1: registrarUsuario(); break;
      case 2: verUsuarios(); break;
      case 3: modificarUsuario(); break;
      case 4: borrarUsuario(); break;
      case 9: finalizarPrograma = true; return;
      case 0: break;
      default: console.log("Opción inválida");
    }
  } while (opcionUsuario !== 0 && !finalizarPrograma);
}

function registrarUsuario() {
  let nombre = readlineSync.question("Nombre del usuario: ");
  let email = readlineSync.question("Correo electrónico: ");
  listaUsuarios.push({ nombre, correo: email });
  console.log("Usuario registrado.");
}

function verUsuarios() {
  if (listaUsuarios.length === 0) {
    console.log("No hay usuarios registrados.");
  } else {
    console.log("LISTADO DE USUARIOS:");
    listaUsuarios.forEach((u, i) => {
      console.log(`${i + 1}. Nombre: ${u.nombre} - Correo: ${u.correo}`);
    });
  }
}

function modificarUsuario() {
  verUsuarios();
  let i = parseInt(readlineSync.question("Número del usuario a modificar: ")) - 1;
  if (listaUsuarios[i]) {
    listaUsuarios[i].nombre = readlineSync.question("Nuevo nombre: ");
    listaUsuarios[i].correo = readlineSync.question("Nuevo correo: ");
    console.log("Usuario actualizado.");
  } else {
    console.log("Índice no válido.");
  }
}

function borrarUsuario() {
  verUsuarios();
  let i = parseInt(readlineSync.question("Número del usuario a borrar: ")) - 1;
  if (listaUsuarios[i]) {
    listaUsuarios.splice(i, 1);
    console.log("Usuario eliminado.");
  } else {
    console.log("Índice no válido.");
  }
}

mostrarMenuPrincipal();