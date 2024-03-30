const  mongoose  = require("mongoose")

mongoose.connect(process.env.BASE_URL)
.then(()=>{
    console.log("_________________MongoDB Atlas Connected Successfully_________");
}).catch((err)=>{
    console.log(`____MongoDB not Connected Reason:${err}____`);
})