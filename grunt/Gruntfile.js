module.exports = function (grunt){
    grunt.initConfig({
        min : {
            dist : {
                src : 'calculator/*.js' ,
                dest:'calc.js'
            }
        }        
    });
};
