const express = require('express')
const connection = require ('./conf')
const port = 5000;

const app = express();

// Entry point of server 'http://localhost:5000/'
app.get('/', (req, res) => {
    res.send("Hello there, I'm root").status(200)
})

app.listen(port, err => {
    if (err){ throw new Error('Something bad happened :(')}
    console.log(`Server is listening on ${port}`)
}) 