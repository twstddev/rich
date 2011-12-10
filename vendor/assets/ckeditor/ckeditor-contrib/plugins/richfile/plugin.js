(function(){

	CKEDITOR.plugins.add('richfile',
	{
	    init: function(editor) {

			// register a callback that actually inserts a selected image
	    editor._.insertImagefn = CKEDITOR.tools.addFunction(function(url, id, name){
				this.insertHtml('<img src="' + url + '" alt="" data-rich-file-id="' + id + '" />');
			}, editor );

			editor._.insertFilefn = CKEDITOR.tools.addFunction(function(url, id, name){
				this.insertHtml('<a href="' + url + '" data-rich-file-id="' + id + '">' + name + '</a>');
			}, editor );

			// clean up the callback
			editor.on( 'destroy', function () { CKEDITOR.tools.removeFunction( this._.insertImagefn ); } );

			editor.addCommand( 'insertRichImage', {
				exec: function(editor) {
					var params = {};
					params.CKEditor = editor.name;
					params.CKEditorFuncNum = editor._.insertImagefn;
					params.default_style = editor.config.default_style;
					params.allowed_styles = editor.config.allowed_styles;
					params.insert_many = editor.config.insert_many;
					params.type = "image"
					var url = addQueryString(editor.config.richBrowserUrl, params );
					editor.popup(url, 860, 400);
				}
			});

			editor.addCommand( 'insertRichFile', {
				exec: function(editor) {
					var params = {};
					params.CKEditor = editor.name;
					params.CKEditorFuncNum = editor._.insertFilefn;
					params.default_style = "original";
					params.allowed_styles = "original";
					params.insert_many = editor.config.insert_many;
					params.type = "file"
					var url = addQueryString(editor.config.richBrowserUrl, params );
					editor.popup(url, 860, 400);
				}
			});

			editor.ui.addButton( 'richImage', {
				label : "Browse and upload images",
				command: 'insertRichImage',
				icon: '/assets/rich/images.png'
			});

			editor.ui.addButton( 'richFile', {
				label : "Browse and upload files",
				command: 'insertRichFile',
				icon: '/assets/rich/files.png'
			});

	    }
	});

})();
