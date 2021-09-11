const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');   //para llamar a los metodos helpers
const port=process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

// app.get('/', (req, res) => {
//     //   res.send('Hola mundo')
//     let salida = {
//         nombre: 'jose',
//         edad: 22,
//         url: req.url
//     }
//     res.send(salida)
// })
// app.get('/data', (req, res) => {    //para llamar a otra direccion
//       res.send('Hola data')
// })

//Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');  




app.get('/', (req, res) => {    //vista home
    res.render('home.hbs', {
        nombre: 'fernado',
    });
})

app.get('/about', (req, res) => {    //vidta about
    res.render('about.hbs');
})


app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`)
})