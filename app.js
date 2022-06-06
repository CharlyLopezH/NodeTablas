const {generaTabla} = require('./funciones/multiplicar');
const argv = require('./config/yargs');
console.clear();


const base=argv.b;
const hasta=argv.h;
const listar=argv.l;

//Llamdo a la función asíncrona que nos devuel la promesa de ejecución de algo:
generaTabla(base,hasta,listar)
.then(nombreArchivo=>console.log(`el archivo ${nombreArchivo} ha sido creado con exito.`))
//Controla alguna falla como un error de acceso en el disco, disco lleno, etc.
.catch(err=>console.log(`¡ATENCIÓN! Hubo un error ${err}` ));