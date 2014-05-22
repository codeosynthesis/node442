var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res) {
    mongoose.model('users').find(function(err,users){
        res.send(users);
    });
});

router.get('/:name/:password', function(req, res,next) {
    console.log('recieved connection for '+req.params.name+' -- '+req.params.password);
    var DB=require('../schema/users.js');
    DB.addUser(req,res,next);


});

module.exports = router;
