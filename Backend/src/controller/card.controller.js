const Cart = require('../model/card.model');
const Products = require('../model/product.model')

const getcartProducts = async (req, res, next) => {
    try {
        const cartproducts = await Cart.find({ userId: req.user.id })
        if (cartproducts) {
            let cartitems = await Promise.all(cartproducts.map(async item => {
                let product = await Products.findOne({ _id: item.productId })
                let total = product.price * item.quantity
                let productName = product.pname
                let price = product.price
                let id = product._id
                let quantity = item.quantity
                return { id, productName, quantity, total, price }
            }))
            let cartPrice = cartitems.map(item => item.total).reduce((acc, next) => acc + next)
            let totalquantity = cartitems.map(item => item.quantity).reduce((acc, next) => acc + next)
            res.send({ cartitems, cartPrice, totalquantity })
        }
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}
// add products to cart
const AddcartProducts = async (req, res, next) => {
    try {
        const productdetais = await Products.findById(req.body.productId)
        const productexist = await Cart.findOne({ productId: req.body.productId,userId:req.user.id})
        if (productexist !== null) {
            console.log("exits hai")
            const quantityincrease = parseInt(productexist.quantity) + 1
            if (quantityincrease > 5) {
                quantityincrease = 5
            }
            let result = await Cart.updateOne({ _id: productexist._id }, { quantity: quantityincrease });
            res.status(200).send({ success: true, Quantityupdated: result })
        }else{

            const cartadd = new Cart({
                productId: req.body.productId,
                userId: req.user.id,
                Productname: productdetais.pname,
                price: productdetais.price,
                quantity: 1,
            })
            const result = await cartadd.save();
            const cartproducts = await Cart.find({ userId: req.user.id })
            if (cartproducts) {
                let cartitems = await Promise.all(cartproducts.map(async item => {
                    let product = await Products.findOne({ _id: item.productId })
                    let total = product.price * item.quantity
                    let quantity = item.quantity
                    return { quantity, total }
                }))
                let cartPrice = cartitems.map(item => item.total).reduce((acc, next) => acc + next)
                let totalquantity = cartitems.map(item => item.quantity).reduce((acc, next) => acc + next)
                res.status(200).send({ success: true, addcart: { result, totalquantity, cartPrice } })
            }
        }


    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}
// updatecartproducts
const updatecartproducts = async (req, res, next) => {
    try {
        let prodcart = await Cart.findOne({ productId: req.query.id,userId:req.user.id });
        if (!prodcart) {
            res.send("Product cart does not exist");
        }
            let updateproductcart = {
                quantity: req.body.quantity,
            };
            let result = await Cart.updateOne({ _id: prodcart._id }, updateproductcart);
            const cartproducts = await Cart.find({ userId: req.user.id })
            if (cartproducts) {
                let cartitems = await Promise.all(cartproducts.map(async item => {
                    let product = await Products.findOne({ _id: item.productId })
                    let total = product.price * item.quantity
                    let quantity = item.quantity
                    return { quantity, total }
                }))
                let cartPrice = cartitems.map(item => item.total).reduce((acc, next) => acc + next)
                let totalquantity = cartitems.map(item => item.quantity).reduce((acc, next) => acc + next)
                res.send({ success: true, cart: { _id: req.query.id, updateproductcart, totalquantity, cartPrice } });
            }


    } catch (err) {
        res.send({ success: false, message: err.message });
    }
}
// DELETE CART PRODUCTS 
let deletecart = async (req, res, next) => {
    try {
        let prod = await Cart.findOne({ productId: req.query.id,userId:req.user.id  });
        if (!prod) {
            res.send(" cart Product does not exist");
        }

        let result = await Cart.deleteOne({ _id: prod._id});
        const cartproducts = await Cart.find({ userId: req.user.id })
        if (cartproducts) {
            let cartitems = await Promise.all(cartproducts.map(async item => {
                let product = await Products.findOne({ _id: item.productId })
                let total = product.price * item.quantity
                let quantity = item.quantity
                return { quantity, total }
            }))
            let cartPrice = cartitems.map(item => item.total).reduce((acc, next) => acc + next)
            let totalquantity = cartitems.map(item => item.quantity).reduce((acc, next) => acc + next)
            res.status(200).json({ success: true, deletecart: { productId: req.query.id, cartPrice, totalquantity } });
        }
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }

};
module.exports = { getcartProducts, AddcartProducts, updatecartproducts, deletecart }
















// module.exports.getallcard = async(request,response,next)=>{
//     try{
//         let card1 = await cards.find();
//         response.status(200).send({success:true,card1});
//     }catch(error){
//         console.log(error);
//         response.status(400).send({success:false,message:error.message});
//     }
// }

// module.exports.getsinglecard = async(request,response,next)=>{
//     try{
//         let card = await cards.findOne({_id:request.params.id})
//         if(!card){
//             response.send("id doesn't exist")
//         }
//         response.status(200).send({success:true,card});
//     }catch(error){
//         response.status(400).send({success:false,message:error.message});
//     }
// }

// module.exports.createcard = async(request,response,next)=>{
//     try{
//         const{name,imgUrl} = request.body;
//         let card1 = new cards({name,imgUrl});
//         let result = await card1.save();
//         response.send('card1 is saved'+card1);
//     }catch(error){
//         console.log(error);
//     }
// }

// module.exports.updatecard = async(request,response,next)=>{
//     try{
//         let card = await cards.findOne({_id:request.params.id})
//         if(!card){
//             response.send("id doesn't exist")
//         }
//         let updatecard1 = {
//             name:request.body.name,
//             imgUrl:request.body.imgUrl
//         }
//         let result = await cards.updateOne({_id: request.params.id},updatecard1);
//         response.send({success:true,card:{id: request.params.id,}});
//     }catch(error){
//         response.status(400).send({success:false,message:error.message});
//     }
// }

// module.exports.deletecard = async (request, response, next) => {
//     console.log("ID = " + request.params.id)
//     try {
//         let result = await cards.deleteOne({ _id: request.params.id })

//         response.status(200).json({ success: true, id: request.params.id });
//     }

//     catch (error) { console.log(error); }

// }

