// Import es la nueva sintaxis para requerir modulos 
import express from 'express';
//const express = require('express')
const app = express();
import morgan from 'morgan'
//const morgan = require('morgan');
import cors from 'cors'
//const cors = require('cors');
import path from 'path';
import mongoose from 'mongoose';
// Importacion de nuestra configuracion dentro de /routes
import router from './routes';

// Cadena conexion a base de datos
mongoose.connect('mongodb://localhost/dbsistema', {
    useUnifiedTopology: true,
    useNewUrlParser: true })
    .then(db => console.log('DB conectada'))
    .catch(error => console.log(error));

// MIDDLEWARES - Funciones que se ejecutan previo a las rutas
app.use(morgan('dev'));
app.use(cors());
// Recibir datos de un formulario
app.use(express.json())
app.use(express.urlencoded({extended:true}));
// Servir archivos estaticos desde la carpeta publica con express
app.use(express.static(path.join(__dirname, 'public')));

// Asignacion de quien manejara las rutas en este caso nuestro archivo index dentro de /routes
app.use('/api', router);

// Asignacion de puerto, asignacion por sistema o default 3000
app.set('port', process.env.PORT || 3000)

// Escucha servidor
app.listen(app.get('port'), ()=>{
    console.log('Server on port '+ app.get('port'))

})