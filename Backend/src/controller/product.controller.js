const products = require('../model/product.model');

module.exports.getallproduct = async(request,response,next)=>{
    try{
        let product1 = await products.find();
        response.status(200).send({success:true,product1});
    }catch(error){
        console.log(error);
        response.status(400).send({success:false,message:error.message});
    }
}

module.exports.getsingleproduct = async(request,response,next)=>{
    try{
        let product1 = await products.findOne({_id:request.params.id})
        if(!product1){
            response.send("id doesn't exist")
        }
        response.status(200).send({success:true,product1});
    }catch(error){
        response.status(400).send({success:false,message:error.message});
    }

}

module.exports.createproduct = async(request,response)=>{
    try{
        console.log(request)
        const{productname,price,description,image} = request.body;
        let product1 = new products({productname,price,description,image});
        let result = await product1.save();
        response.send('product1 is saved'+product1);
    }catch(error){
        console.log(error);
    }
}

module.exports.updateproduct = async(request,response,next)=>{
    try{
        let product = await products.findOne({_id:request.params.id})
        if(!product){
            response.send("id doesn't exist")
        }
        console.log("request is",request);
        let updateproduct1 = {
            productname:request.body.productname,
            price:request.body.price,
            description:request.body.description
        }
        let result = await products.updateOne({_id: request.params.id},updateproduct1);
        response.send({success:true,product:{_id: request.params.id}});
    }catch(error){
        response.status(400).send({success:false,message:error.message});
    }
}

module.exports.deleteproduct = async (request, response, next) => {
    console.log("ID = " + request.params._id)
    try {
        let result = await products.deleteOne({ _id: request.params.id })

        response.status(200).json({ success: true, _id: request.params.id });
    }

    catch (error) { console.log(error); }

}