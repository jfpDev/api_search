//const products = objetoTomadoDesdeArchivo;
const products = {
"name": "Cueros_Colombia",
"products": ["Linea Hombre","Linea Dama","Linea Ninos","Linea Deportiva"],
"receipt": ["Compra1","Compra2","Compra3"]
}
function busqueda(entradaUsuario){
  let recorrerProducts = 0;
  while (recorrerProducts < products.products.length){
      if (products.products[recorrerProducts] === entradaUsuario){
        return products.products[recorrerProducts];
      }else {
        recorrerProducts++;
        if (recorrerProducts == products.products.length){
          return 'La búsqueda no tuvo éxito - Producto no disponible';
        }
      }
  }
}

/*
const resultadoBusqueda = function busqueda(entradaUsuario){
  return iteracion(entradaUsuario);
};

*/

console.log(busqueda(Linea Hombre));
