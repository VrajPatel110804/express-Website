const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/Cake', (req, res) => {
    res.send('Hello Cake')
})

app.get('/home', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(__dirname + '/views/home.html');
})

app.get('/about', (req, res) => {
    //res.send('Hello World!')
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/contect', (req, res) => {
    //res.send('Hello World!')
    res.sendFile(__dirname + '/views/contect.html');
})



app.get('/cake/suart', (req, res) => {
    res.send('Hello Surat Cake')
})

app.get('/cake/anand', (req, res) => {
    res.send('Hello Anand Cake')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})