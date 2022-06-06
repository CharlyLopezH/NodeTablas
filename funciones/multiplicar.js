//Recibir parametros para multiplicarlos desde x, hasta y; generando archivo de texto y con opción de listar en pantalla
const fs= require("fs");
let salida = "";

const generaTabla = async (base, hasta, listado) => {
  try {
    for (let i = 0; i <= hasta; i += 1) {
      salida += `${i} * ${base} = ${base * i}\n`;
    }

    if (listado) {
      console.log("******************************************");
      console.log(`Listando tablas del ${base} hasta ${hasta}`);
      console.log("******************************************");
      console.log(salida);
      console.log('****************** Fin *******************')
    }
    fs.writeFileSync(`./output/Tabla del ${base} hasta el ${hasta}.txt`,salida)
    //El async devuelve-retorna una promesa, lo que se devuelve es el nombre del archivo.
    return `Tabla-${base}-hasta-${hasta}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  generaTabla,
};
