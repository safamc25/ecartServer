const mongoose = require('mongoose')

// model-schema

const wishlistSchema = {
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
    }

}

// model

const wishlists=mongoose.model("wishlists",wishlistSchema)

// export

module.exports=wishlists