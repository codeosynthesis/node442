define([
	'require',
    //waits for dom rendered
    //does not wait for assets
    'dojo/ready',
    'dojo/on',
    'dojo/dom',
], function(require,ready, on, dom){
	var app = {};

    ready(function()
    {
        on(dom.byId('rozBtn'),'click',app.onBtnClick);
        console.log('dom loaded');
    });
    app.onBtnClick=function()
    {
        require(['digit/Dialog'],function(Dialog)
            {
                var dialog = new Dialog(
                {
                    title:'hi guys',
                   // content: 'This is content' 
                   href:appConfig.baseUrl +'/app/dialog.html'
                });
                dialog.show();
            });    
    };   
	return app;
});
