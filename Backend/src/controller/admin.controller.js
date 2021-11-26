const admins = require("../model/admin.model");
const admin = require("../model/admin.model");

module.exports.getalldetail1 = async(request,response,next)=>{
    try{
        let admin1 = await admins.find();
        response.status(200).send({success:true,admin1});
    }catch(error){
        console.log(error);
        response.status(400).send({success:false,message:error.message});
    }
}

module.exports.getsingleadmin = async(request,response,next)=>{
    console.log("<<<<<<<<<<<<",request.params.id);
    try{
        let admin = await admins.findOne({username:request.params.id})
        if(admin===null){
            response.send({islogged:false});
        }
        
        response.status(200).send({islogged:true,admin});
    }catch(error){
        response.status(400).send({success:false,message:error.message});
    }
}

module.exports.createadmin = async(request,response,next)=>{
    try{
        const{username,email,password} = request.body;
        let admin1 = new admins({username,email,password});
        let result = await admin1.save();
        response.send('user1 is saved'+admin1);
    }catch(error){
        console.log(error);
    }
}

module.exports.updateadmin = async(request,response,next)=>{
    try{
        let admin = await admins.findOne({_id:request.params.id})
        if(!admin){
            response.send("id doesn't exist")
        }
        let updateadmin1 = {
            username:request.body.username,
            email:request.body.email,
            password:request.body.password
        }
        let result = await admins.updateOne({_id: request.params.id},updateadmin1);
        response.send({success:true,admin:{id: request.params.id,}});
    }catch(error){
        response.status(400).send({success:false,message:error.message});
    }
}

module.exports.deleteadmin = async (request, response, next) => {
    console.log("ID = " + request.params.id)
    try {
        let result = await admins.deleteOne({ _id: request.params.id })

        response.status(200).json({ success: true, id: request.params.id });
    }

    catch (error) { console.log(error); }

}