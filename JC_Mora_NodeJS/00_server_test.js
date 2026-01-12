const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.use('/', require('./router/rutas'));
app.use('/escuela', require('./router/escuela'));
app.use('/peques', require('./router/peques'));

app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/public/404.html")
})

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`)
})