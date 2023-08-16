const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

const port = process.envPORT || 3001;
app.listen(port, ()=>console.log(`Corriendo servidor en puerto ${port}`));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/formulario', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/formulario.html'))
})