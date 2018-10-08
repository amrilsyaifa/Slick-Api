const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
const product = require('./controllers/product')(app)
// product(app)



app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.listen(5000, () => {
    console.log('Running on port 5000')
})