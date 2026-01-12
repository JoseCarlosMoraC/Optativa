const express = require('express')
//Conexión a base de datos
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

//Variables que tendremos siempre:
//Lo correcto será declararlas EN VARIABLES DE ENTORNO
require('dotenv').config()

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ohbjl6o.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri)
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e))

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.use('/', require('./router/rutas'));
app.use('/jugador', require('./router/jugador'));
app.use("/contacto", require('./router/rutas'));

app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/public/html/404.html")
})

app.listen(port, () => {
  console.log(`CoachX corriendo en puerto ${port}`)
})