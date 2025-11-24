const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

//Llamadas a las rutas:
app.use('/', require('./router/rutas'));
app.use('/pokemon', require('./router/pokemon'));
app.get('/', (req, res) => {
  res.send('Hello World!')
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/contacto', (req, res) => {
  res.send('Estamos en contacto')
})

app.use((req, res) => {
  res.status(404).render("404",{
    titulo: "Error 404",
    descripcion: "Page Not Found"
      })
  })

  
  
