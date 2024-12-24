const express = require('express');
const app = express();
const port = 3000;
const ip = '98.85.28.8';

app.use(express.static('public'));

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/public/index.html');
})


app.listen(port, () => {
    console.log(`Servidor corriendo en http://${ip}:${port}`)
})

