define([ 'dojo/has', 'require' ], function (has, require) {
  var app = {};
  if (has('host-browser')) {
    require([ './window', 'dojo/domReady!' ], function (Window) {
      app.window = new Window().placeAt(document.body);
    });
  }
});
