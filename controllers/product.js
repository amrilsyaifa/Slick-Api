const _ = require('lodash')
const Product = require('../models/product')

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
        Product.find().then(products => {
            res.json(products)
        }).catch(err => {
            console.log(err)
        })
    })

    //Update
    app.put('/api/products/:id', (req,res) => {
        Product.update({ _id : req.params.id}, req.body)
        .then(() => {
            res.json({"info" : "Success Updated"})
        }).catch(err => {
            console.log(err)
        })
    })

    //Delete
    app.delete('/api/products/:id', (req, res) => {
        Product.remove({ _id: req.params.id})
        .then(() => {
            res.json({"info" : "Succed Removed"})
        }).catch(err => {
            console.log(err)
        })
    })
}

module.exports = product