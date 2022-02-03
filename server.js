const express = require('express');
const { Server } = require('http');
const ProductContainer = require('./contenedor');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const products = new ProductContainer('products.json');
products.init();

app.get('/productos', async function (req, res) {

        let respuesta = JSON.parse(await products.getAll());
        res.send(respuesta);

    })

app.get('/productosRandom', async function (req, res) {

        let randomId = (min, max) => {
            return Math.random() * (max - min) + min;
        };
        let maxLength = products.productList.length + 1;
        let idRandom = parseInt(randomId(1, maxLength));

        res.send(await products.getByID(idRandom));
    })


app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`);
})
Server.on("error", (err)) => {
    console.log(`Hubo un error ${err}`)
}