const users = require("../Models/userModels");
const jwt=require("jsonwebtoken")

exports.register = async (req, res) => {
    const { username, email, password } = req.body

    try {
        const user = await users.findOne({ email })
        
        if (user) {
            res.status(400).json("user already exist please login")
        }
        
        else {
            const newUser = new users(
                { username, email, password }
            )

            await newUser.save()
            res.status(201).json(newUser)
        }
    }

    catch {
        res.status(400).json("register api failed")
    }
}


exports.login=async(req,res)=>{
    const {email,password}=req.body

    try{
        const user=await users.findOne({email,password})
        if(user){


            // generate token
            const token=jwt.sign({uid:user._id},process.env.JWT_SECERT_KEY)

            res.status(200).json({user,token}) //user token stored in collection
        }
        else{
            res.status(401).json("incorrect email or password")
        }
    }
    catch{
        res.status(400).json("login api failed")
    }
}