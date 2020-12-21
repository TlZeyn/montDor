const express = require('express')
const bodyParser = require('body-parser')
const connection = require ('./conf')
const api = require('./routes/index')
const dotenv = require('dotenv')
const cors = require('cors')


const port = 5000;

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use('/', api)

dotenv.config();

// Entry point of server 'http://localhost:5000/'
app.get('/', (req, res) => {
    res.send("Hello there, I'm root").status(200)
})

app.listen(port, err => {
    if (err){ throw new Error('Something bad happened :(')}
    console.log(`Server is listening on ${port}`)
}) 