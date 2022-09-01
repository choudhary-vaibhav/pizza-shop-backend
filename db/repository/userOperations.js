const UserModel = require('../models/user');
module.exports = {
    add(userObject){
        var promise = UserModel.create(userObject);
        return promise;
    },
    find(userObject, response){
        UserModel.findOne({userid:userObject.userid, password:userObject.password},(err, doc)=>{
            if(err){
                response.json({message:'Some DB Error  '});
            }
            else if(doc){
                response.json({message:'Welcome '+userObject.userid});
            }
            else{
                response.json({message:'Invalid Userid or Password'});
            }
        })
    },
    update(userObject, response){
        UserModel.findOneAndUpdate({userid:userObject.userid, password:userObject.password},{phoneno:userObject.phoneno}, (err, doc)=>{
            if(err){
                response.json({message:'Some DB Error  '});
            }
            else if(doc){
                response.json({message:'Updated successfully '});
            }else{
                response.json({message:'Invalid Userid or Password'});
            }
        });
    },
    remove(userObject, response){
        UserModel.findOneAndDelete({userid:userObject.userid, password:userObject.password},(err, doc)=>{
            if(err){
                response.json({message:'Some DB Error  '});
            }
            else if(doc){
                response.json({message:userObject.userid + ' removed'});
            }
            else{
                response.json({message:'Invalid Userid or Password'});
            }
        })
    },
    changePassword(userObject, response){
        UserModel.findOneAndUpdate({userid:userObject.userid, password:userObject.password},{password:userObject.new_password}, (err, doc)=>{
            if(err){
                response.json({message:'Some DB Error  '});
            }
            else if(doc){
                response.json({message:'Password successfully changed '});
            }else{
                response.json({message:'Invalid Userid or Password'});
            }
        });
    }
}