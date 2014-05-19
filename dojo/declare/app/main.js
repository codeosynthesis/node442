define([
	'require',
	'dojo/_base/declare',
	'dojo/ready',
	'dojo/on',
	'dojo/dom',
	'dojo/dom-construct'
], function(require, declare, ready, on, dom, construct){

	var app = {};

    declare('ClassA',null, {
        text:'hellow world',
        constructor : function(args){
            //give scope and arguments
            declare.safeMixin(this,args);
        },
        saySomthing : function (){
            var str = '<p> this is from class a ' + this.text+'</p>';
            construct.place(str,dom.byId('container'));
        },
    });

    declare('ClassB',[ClassA],{
        text:'Hello again guys',
        constructor: function(args){
            declare.safeMixin(this,args);
        },
        saySomthing: function()
    {
        this.inherited(arguments);
        var str='<p> htis is from class b ' + this.text+'</p>';
        construct.place(str,dom.byId('container'));
    }
    });

    ready(function(){
        var thing1 = new ClassA();
        thing1.saySomthing();
        var thing2=new ClassA({text: 'youve been replaced'});
        thing2.saySomthing();
        var thing3 = new ClassB();
        thing3.saySomthing();
	});

	return app;
});
