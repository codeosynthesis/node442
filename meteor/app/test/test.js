//messages =
if (Meteor.isClient) 
{
    console.log('client');
    console.log(this);
    Template.chatPane.messages = function()
    {
        return messages.find();
    }
    var sendMessage = function(e)
    {
        messages.insert({content: $('textarea').val()});
    }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    console.log('server');
    console.log(this);
    // code to run on server at startup
  });
}
