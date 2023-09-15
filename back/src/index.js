
const http = require("http");
const url = require("url");
const getCharById =require("./controllers/getCharById");

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    const parsedUrl = url.parse(req.url,true);
    
    console.log(req.url)

    if(req.url === "/rickandmorty/character/"){
      console.log(req.url)
    }
    
    
    
  if (parsedUrl.pathname.startsWith("/rickandmorty/character/")) {
    const characterId = parsedUrl.pathname.split("/").pop();
   // console.log(characterId)

    const id = parseInt(characterId);
    console.log(id)
    console.log(typeof id)


    if (!isNaN(id)) {
      
      getCharById(res,id);
      
      

     
    } else {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("ID de personaje inválido");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Ruta no encontrada");
  }
    


}).listen(3001, "localhost");





/*
http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    const parsedUrl = url.parse(req.url,true);
    const queryParams = querystring.parse(parsedUrl.query);//no se bien que hace este metodo consultar

    
  if (parsedUrl.pathname.startsWith("/rickandmorty/character/")) {
    const pathParts = parsedUrl.pathname.split("/");
    const characterId = pathParts[pathParts.length - 1];

    // Convertir el id a número
    const idNumber = parseInt(characterId);

    // Verificar si el id es un número válido
    if (!isNaN(idNumber)) {
      // Buscar el personaje en el archivo data.js
      const character = data.find((character) => character.id === idNumber);

      if (character) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(character));
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Personaje no encontrado");
      }
    } else {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("ID de personaje inválido");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Ruta no encontrada");
  }
    


}).listen(3001, "localhost");


*/