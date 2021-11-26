const users = require('../model/user.model');

module.exports.getalldetail1 = async(request,response,next)=>{
    try{
        let user1 = await users.find();
        response.status(200).send({success:true,user1});
    }catch(error){
        console.log(error);
        response.status(400).send({success:false,message:error.message});
    }
}

module.exports.getsingleuser = async(request,response,next)=>{
    console.log("<<<<<<<<<<<<",request.params.id);
    try{
        let user = await users.findOne({username:request.params.id})
        if(user===null){
            response.send({islogged:false});
        }
        
        response.status(200).send({islogged:true,user});
    }catch(error){
        response.status(400).send({success:false,message:error.message});
    }
}

module.exports.createuser = async(request,response,next)=>{
    try{
        const{username,email,password} = request.body;
        let user1 = new users({username,email,password});
        let result = await user1.save();
        response.send('user1 is saved'+user1);
    }catch(error){
        console.log(error);
    }
}

module.exports.createproductinuser = async (request, response, next) => {
    try {
        const { username = 'atif', product = {}, product: { type = 'increase' } } = request.body;
        console.log("***************", username, request.body)
        let user = await users.findOne({ username: username })
        console.log('aaaaaaaaaaaaaa', user)
        if (!user) {
            response.send("id doesn't exist")
        }
        let productsData = []
        if (user.userproducts) {
            productsData = JSON.parse(JSON.stringify(user.userproducts))
        }
        let productFound = false
        if (user.userproducts.length) {
            productsData = productsData.map((item) => {
                if (item.image === product.image) {
                    console.log('found', item)
                    productFound = true
                    if (type === 'increase') {
                        return { ...item, qty: item.qty + 1 }
                    }
                    else {
                        if (item.qty - 1 > 0) {
                            return { ...item, qty: item.qty - 1 }
                        }
                    }
                }
                return item
            })
        }
        if (!productFound) {
            productsData = [...productsData, product]
            console.log('uuuuuuuuuuuuuuu', productsData)
        }
        let updateuser1 = {
            userproducts: productsData
        }
        console.log('uuuuuuuuuuuuuaaaaaaaaaaaaaaaaaaaaauu', productsData)

        let result = await users.updateOne({ username }, updateuser1);
        response.send({ success: true, user: { id: request.params.id, } });
    } catch (error) {
        console.log(error);
    }
}

module.exports.updateuser = async(request,response,next)=>{
    try{
        let user = await users.findOne({_id:request.params.id})
        if(!user){
            response.send("id doesn't exist")
        }
        let updateuser1 = {
            username:request.body.username,
            email:request.body.email,
            password:request.body.password
        }
        let result = await users.updateOne({_id: request.params.id},updateuser1);
        response.send({success:true,user:{id: request.params.id,}});
    }catch(error){
        response.status(400).send({success:false,message:error.message});
    }
}

module.exports.deleteuser = async (request, response, next) => {
    console.log("ID = " + request.params.id)
    try {
        let result = await users.deleteOne({ _id: request.params.id })

        response.status(200).json({ success: true, id: request.params.id });
    }

    catch (error) { console.log(error); }

}

