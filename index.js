require('dotenv').config()


const express=require('express')

const cors=require('cors')

const router=require('./Routes/routes')

const cartServer=express()

cartServer.use(cors())

cartServer.use(express.json())

require('./Connections/connection')

cartServer.use(router)


// cartServer.post('/postexc',(req,res)=>{
//     res.json(123)
// })



const PORT=8000 || process.env.port
cartServer.listen(PORT,()=>{
    console.log(`_________________Ecart Server started at Port Number ${PORT}_________________`);
})