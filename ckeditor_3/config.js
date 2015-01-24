/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.toolbar_Full =
		[
		   // { name: 'document',    items : [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },
		    //{ name: 'clipboard',   items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
		   // { name: 'editing',     items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
		    //{ name: 'forms',       items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
		    //'/',
		    { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike' ] },
		    { name: 'paragraph',   items : [ 'NumberedList','BulletedList'] },
		    //{ name: 'links',       items : [ 'Link','Unlink','Anchor' ] },
		    //{ name: 'insert',      items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak' ] },
		    //'/',
		    { name: 'styles',      items : [ 'Styles','Format' ] },
		    //{ name: 'colors',      items : [ 'TextColor','BGColor' ] },
		    { name: 'tools',       items : [ 'Maximize' ] }
		];
};
