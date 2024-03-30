const express=require('express')
const { getAllProducts, getProduct } = require('../Controller/productController')
const { register, login } = require('../Controller/userController')
const { addToWishlist, getWishlist, removeWishlist } = require('../Controller/wishlistController')
const { middlewareFunction } = require('../middlewares/jwtMiddlewares')
const { addToCart, getCart, removeCart, incrementCart, decrementCart, emptyCart } = require('../Controller/cartController')






// route
const router=new express.Router()


// path to retrieve all products
router.get('/get-all-products',getAllProducts)

// path to get single data
router.get('/get-product/:id',getProduct)

router.post('/add-new-user',register)

router.post('/login',login)

router.post('/user/add-to-wishlist',middlewareFunction,addToWishlist)

router.get('/user/get-Wishlist/:userId',middlewareFunction,getWishlist)

router.delete('/user/remove-wishlist/:_id',middlewareFunction,removeWishlist)

router.post('/user/add-to-cart',middlewareFunction,addToCart)

router.get('/user/get-cart',middlewareFunction,getCart)

router.delete('/user/remove-cart/:_id',middlewareFunction,removeCart)

router.get('/user/increment-cart/:_id',middlewareFunction,incrementCart)

router.get('/user/decrement-cart/:_id',middlewareFunction,decrementCart)

router.delete('/user/empty-cart',middlewareFunction,emptyCart)






module.exports=router