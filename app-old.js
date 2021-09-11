const http = require('http'); //http propio de node
http.createServer((req, res) => { //create server usa callback, req=peticiones al seervidor, res=Respuestas del servidor
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida={
        nombre:'jose',
        edad:22,
        url:req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
})
    .listen(8080);
console.log("escuchando el puerto 8080");