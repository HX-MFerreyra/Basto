'use strict'

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const animalRoutes = require('./routes/animals');
const cors = require('cors');

const port = 3000;
const url = 'mongodb+srv://melisaf:pass123@cluster0.nu1doki.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', true);
//config para evitar fallos de conexión.
mongoose.Promise = global.Promise;

//body parser
//middleware para analizar body a través de la URL
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

//CORS: to allow requests AJAX Y HTTP from the Front
app.use(cors());

//     (req, res, next) => {
// //     res.header('Access-Control-Allow-Origin', '*');
// //     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
// //     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
// //     res.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS');
// //     next();
// // })

//We upload the path files
app.use('/animals', animalRoutes);

mongoose.connect(url, {useNewUrlParser: true})
.then(()=> {
    console.log('Connection to DB successfully');
    app.listen(port, ()=> {
        console.log('Server listen on port ' + port);
    });
})