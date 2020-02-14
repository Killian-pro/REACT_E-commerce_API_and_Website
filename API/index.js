let express = require('express');
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let router = require('./route_products.js')
let router1 = require('./route_remises.js')
let router2 = require('./route_users.js')
let router3 = require('./route_commandes.js')
let router4 = require('./auth.js')
let app = express();




mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/api', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;

db.once("open", function() {
    console.log("Connexion à la base de données réussie", db.client.s.url);
});



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/products', router)
app.use('/commandes', router3)
app.use('/users', router2)
app.use('/remises', router1)
app.use('/auth',router4)


app.listen(3001, 'localhost');
