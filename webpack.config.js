// Importar un administrador de rutas de archivos
const path = require('path');

// Exportamos un objeto de configuración
// que sera usado por webpack
module.exports = {
  mode: 'production',
  // 1. El archivo de entrada o indexador
  entry: "./client/index.js",
  // 2. Especificar el archivo de salida
  output: {
    // 2.1 Ruta absoluta de salida
    path: path.resolve(__dirname, "public"),
    // 2.2 Nombre del archivo de salida
    filename: "bundle.js"
  },
  // 3. Configurando el servidor de desarrollo
  module : {
    rules : [
       {
          // expresiones regular
          test : /\.js$/,
          exclude : / (node_modules | bower_components) /,
          use : [
             {
                loader : "babel-loader",
                options : {
                   presets : [ 
                      [
                         "@babel/preset-env" ,
                         {
                            "modules" : false,
                            "useBuiltIns" : "usage",
                            "targets" : " > 0.25%, not dead",
                            "corejs" : 3
 
                         }
                      ]
                   ]
                }
             }
          ]
       }
    ]
   }
}