const UserModel = require('../models/user');
module.exports = {
    add(userObject){
        var promise = UserModel.create(userObject);
        return promise;
    },
    find(userObject){
        UserModel.findOne({userid:userObject.userid, password:userObject.password},(err, doc)=>{
            if(err){
            }
            else if(doc){

            }
            else{

            }
        })
    },
    update(userObject){
        UserModel.updateOne({userid:userObject.userid},{password:userObject.password}, (err)=>{
            if(err){

            }
            else{
                
            }
        });
    },
    remove(userid){

    }
}