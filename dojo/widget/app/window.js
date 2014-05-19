define([ 
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin',
  'dojo/dom-construct',
  'dojo/text!./window.html',
  'app/form.js'
  ], function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, domConstruct, template, Form) {
	  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
      templateString : template,

      postCreate : function() {
        this.inherited(arguments);
        var form = new Form();
        domConstruct.place(form.domNode, this.domNode);
      }

	  });
});
