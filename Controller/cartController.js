const carts = require("../Models/cartModel");

exports.addToCart = async (req, res) => {
    const { id, title, price, description, category, image, rating, quantity } = req.body

    const userId = req.payload

    try {
        const existingProduct = await carts.findOne({ userId, id })
        if (existingProduct) {
            existingProduct.quantity += 1
            existingProduct.grandtotal = existingProduct.price * existingProduct.quantity
            await existingProduct.save()
            res.status(200).json("Cart item quantity incremented")
        }
        else {
            const newCart = new carts({
                userId, id, title, price, description, category, image, rating, quantity, grandtotal: price
            })
            await newCart.save()
            res.status(200).json("Product added in to cart")
        }
    }
    catch {
        res.status(400).json("add to cart api failed")
    }
}


exports.getCart = async (req, res) => {
    const userId = req.payload
    try {
        const products = await carts.find({ userId })
        if (products) {
            res.status(200).json(products)
        }
        else {
            res.status(400).json("empty cart")
        }
    }
    catch {
        res.status(400).json("get cart api failed")
    }
}


exports.removeCart = async (req, res) => {
    const { _id } = req.params
    try {
        await carts.deleteOne({ _id })

        res.status(200).json("products removed from cart")

    }
    catch {
        res.status(400).json("delete cart api failed")
    }
}

exports.incrementCart = async (req, res) => {
    const { _id } = req.params
    try {
        var existingProduct = await carts.findOne({ _id })
        if (existingProduct) {

            existingProduct.quantity += 1
            existingProduct.grandtotal = existingProduct.quantity * existingProduct.price
            await existingProduct.save()
            res.status(200).json("cart item incremented")
        }
        else {
            res.status(400).json("product not found")

        }

    }
    catch {
        res.status(400).json("cart incremented api failed")

    }
}

exports.decrementCart = async (req, res) => {
    const { _id } = req.params
    try {
        var existingProduct = await carts.findOne({ _id })
        if (existingProduct) {

            existingProduct.quantity -= 1
            if (existingProduct.quantity == 0) {
                await carts.deleteOne({ _id })
                res.status(200).json("item removed")
            }


            else {
                existingProduct.grandtotal = existingProduct.quantity * existingProduct.price
                await existingProduct.save()
                res.status(200).json("cart item decremented")

            }
        }
        else {
            res.status(400).json("Product not found")

        }

    }
    catch {
        res.status(400).json("cart incremented api failed")

    }
}


exports.emptyCart = async (req, res) => {
    const { userId } = req.payload

    try {
        await carts.deleteMany({ userId })
        res.status(200).json("cart items removed")

    }
    catch {
        res.status(400).json("cart empty api failed")

    }
}