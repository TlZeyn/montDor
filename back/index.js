const express = require('express')
const bodyParser = require('body-parser')
const connection = require('./conf')
const api = require('./routes/index')
const dotenv = require('dotenv')
const cors = require('cors')

//dependencies for upload
const multer = require('multer');
const path = require('path');

const port = 5000;

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/', api)

dotenv.config();

// Entry point of server 'http://localhost:5000/'
app.get('/', (req, res) => {
    res.send("Hello there, I'm root").status(200)
})


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname )
  }
})

let upload = multer({ storage: storage }).single('file')

app.post('/upload',function(req, res) {
     
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })

});



app.listen(port, err => {
    if (err) { throw new Error('Something bad happened :(') }
    console.log(`Server is listening on ${port}`)
}) 