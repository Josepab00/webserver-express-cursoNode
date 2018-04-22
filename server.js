const express = require('express');
const app = express();
const hbs = require('hbs');


const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

//HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//HBS helpers
hbs.registerHelper('getAgno', () => {

    agno: new Date().getFullYear();

})

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(" ");

    palabras.forEach((palabras, idx) => {
        palabras[idx] = palabras.charAt(0).toUpperCase() + palabras.slice(1).toLowerCase();
    });

    return palabras.join(" ");
})

app.get('/', (req, res) => {

    res.render('home', {

        nombre: 'Jose',
    });

});

app.get('/about', (req, res) => {

    res.render('about', {

        nombre: 'Jose',
    });

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});