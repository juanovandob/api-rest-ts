import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}/`;

const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift(); // ["item", "ts"] -> "item"
  //console.log(file);
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);

  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };

/**
 * El propósito del archivo index.ts en este contexto es facilitar la importación de todos los controladores (routers) 
 * disponibles en el directorio actual. Este archivo se encarga de leer todos los archivos en el mismo directorio 
 * (excepto index.ts) y usar la lógica dentro del bucle para importar y agregar cada uno de esos controladores al enrutador
 *  principal.

Obtención del directorio actual:
const PATH_ROUTER = `${__dirname}/`;
Define el directorio actual donde se espera que estén ubicados los controladores.

Función para limpiar el nombre del archivo: cleanFileName 

Lectura de archivos en el directorio actual: readdirSync

readdirSync(PATH_ROUTER) obtiene la lista de archivos en el directorio actual de manera síncrona.
filter se utiliza para excluir el archivo index.ts de la iteración.
Para cada archivo, se usa import dinámico para importar el módulo asociado y se utiliza el enrutador de ese módulo 
(moduleRouter.router).
Luego, se agrega ese enrutador al enrutador principal (router) con una ruta basada en el nombre del archivo limpio 
(/${cleanName}).
Este enfoque modular permite agregar nuevos controladores simplemente creando nuevos archivos en el mismo directorio, 
sin necesidad de modificar manualmente el archivo index.ts. Cada controlador tiene su propio archivo y lógica, */
