const mongoose = require('mongoose')

// model-schema

const userSchema = {
  
    username: {
        type: String,
        require: true
    },
  
    email: {
        type: String,
        require: true,
        unique:true
    },
    password: {
        type: String,
        require: true
    }
}

// model

const users=mongoose.model("users",userSchema)

// export

module.exports=users