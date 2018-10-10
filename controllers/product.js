const _ = require('lodash')
const Product = require('../models/product')

// function product (app) {

// }

// module.exports = app => {

// }

const product = app => {
    let _products = []

    //Create
    app.post('/api/products', (req,res) => {

        const newProduct = new Product(req.body)
        newProduct.save().then(() => {
            res.json({"info" : "Success Created"})
        }).catch(err => {
            console.log(err)
        })
    })

    //Read
    app.get('/api/products', (req,res) => { 
        res.json(_products)
    })

    //Update
    app.put('/api/products/:id', (req,res) => {
        //proses update
        const index = _.findIndex(_products, {
            id: parseInt(req.params.id)
        })

        console.log(index)

        //akan merusa data data lama di timpa
        // _products[index] = req.body

        //solusi tidak merusak data dengan lodash merge
        _.merge(_products[index], req.body)        

        res.json({"info" : "Success Updated"})
    })

    //Delete
    app.delete('/api/products/:id', (req, res) => {

        _.remove(_products, tes => {
            return tes.id === parseInt(req.params.id)
        })
        res.json({"info" : "Succed Removed"})
    })
}

module.exports = product