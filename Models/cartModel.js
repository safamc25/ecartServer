const mongoose = require('mongoose')

// model-schema

const cartSchema = {
    userId: {
        type: String,
        required: true,
       
    },
    id: {
        type: Number,
        required: true,
       
    },
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    rating: {
        rate: {
            type: Number,
            require: true
        },
        count: {
            type: Number,
            require: true
        }
    },
    quantity: {
        type: Number,
        require: true
    },
    grandtotal: {
        type: Number,
        require: true
    }

}

// model

const carts=mongoose.model("carts",cartSchema)

// export

module.exports=carts