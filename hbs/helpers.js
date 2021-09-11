const hbs = require('hbs');
//Helpers
hbs.registerHelper('getYear',()=>{  //helpers pueden ser llamados como parametros en los hbs
    return new Date().getFullYear();
})
hbs.registerHelper('capitalizar',(texto)=>{
    let palabras=texto.split(' ')
    palabras.forEach((palabra, i)=>{
        palabras[i]=palabra.toUpperCase()
    })
    return palabras.join(' ')
})