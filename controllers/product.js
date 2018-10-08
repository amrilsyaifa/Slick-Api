const _ = require('lodash')

// function product (app) {

// }

// module.exports = app => {

// }

const product = app => {
    let _products = []

    //Create
    app.post('/api/products', (req,res) => {
        // console.log(req.body)
        // console.log(_products)

        _products.push(req.body)
        res.json({"info" : "Success Created"})
        
        // console.log(_products)
    })

    //Read

    //Update

    //Delete
}

module.exports = product