// middleware functions-- Token verification

const jwt=require('jsonwebtoken')

exports.middlewareFunction=(req,res,next)=>{
    console.log("________indide middleWare______");

    //token
    try{
        const token=req.headers['access_token'].split(" ")[1]   //spilt the Bearer ${token} in this we need only the token 

        // verify
        const jwtResponse=jwt.verify(token,process.env.JWT_SECERT_KEY)

        //store the user id payload in req payload

        req.payload=jwtResponse.uid

        next()
    }
    catch{
        res.status(401).json("authentication failed please login again")
    }
}