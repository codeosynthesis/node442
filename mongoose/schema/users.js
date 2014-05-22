var DB={}
DB.mongoose=require('mongoose');
DB.mongoose.connect('mongodb://127.0.0.1/test');
DB.usersSchema=new DB.mongoose.Schema({
    name:{
        type:String,
        validate: [
            function(val){return /^[a-zA-Z-0-9]{1,30}$/.test(val)} 
            , 'uh oh, {PATH} not valid username'
        ],
        index:{unique: true,dropDups:true}
    },
    password:String
});
DB.usersModel=DB.mongoose.model('users',DB.usersSchema);
DB.usersModel.on('index',function(err){
    console.log('indexing db');
    console.error(err);
});


DB.addUser=function(req,res,next){
    console.log('adduser');

    new DB.usersModel({
        name:req.params.name,
        password:req.params.password
    }).save(function(err,docs){
        if(err)
        {
            if(err.code === 11000)
            {
                res.send('user exists');
            } 
            
        }
        else
        {
            DB.usersModel.find({},function(err,docs)
            {
                res.send(docs);
            })
        }
    });

    
};

module.exports=DB;
