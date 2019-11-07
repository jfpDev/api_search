//const products = objetoTomadoDesdeArchivo;

'use strict';

const jsonFILE = require('fs');

let productsJSON = jsonFILE.readFileSync('db_CC.json');
const products = JSON.parse(productsJSON);
/*let productsJSON = jsonFILE.readFileSync('db_CC.json', (err, data) => {
  if (err) throw err;
  //return JSON.parse(data);
  //let productsLOCAL = JSON.parse(data);
  products = JSON.parse(data);
  //console.log(productsLOCAL);
  //products = productsLOCAL;
});*/


//const products = JSON.parse(jsonFILE.readFile('db_CC.json'));

//const productsJSON = '{"name": "Cueros_Colombia", "products": ["Linea Hombre","Linea Dama","Linea Ninos","Linea Deportiva"],"receipt": ["Compra","Compra2","Compra3"]}';
//const products = JSON.parse(productsJSON);


function busqueda(entradaUsuario){
  let recorrerProducts = 0;
  //console.log(products.products.length);
  while (recorrerProducts < products.products.length){
      if (products.products[recorrerProducts] === entradaUsuario){
        return console.log("Efectivamente sí está");
        //return products.products[recorrerProducts];
      }else {
        recorrerProducts++;
        if (recorrerProducts == products.products.length){
          //return 'La búsqueda no tuvo éxito - Producto no disponible';
          return console.log("La busqueda no tuvo éxito");
        }
      }
  }
}


/*
const resultadoBusqueda = function busqueda(entradaUsuario){
  return iteracion(entradaUsuario);
};

*/

busqueda("Linea Hombre");
