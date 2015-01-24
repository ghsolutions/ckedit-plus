# CkEditor-Plus
- PHP-Class for implementing CKEditor to your PHP-Projekt with few lines of Code.
- CkEditor-Plus lets you switch between the Versions of CKEditor with one command
- CKEditor-Plus has a fallback to CkEditor 3 for IE smaller than Version 9
- For Usage look at index_jquery.php and index_basic.php
- Licensed under GPL 2.0
- Added global Variable URL_TO_DIRECTORY to define the path to the directory woth the files in it
- Usage: 
	- define URL_TO_DIRECTORY in class.ckeditor.php
	- open the file it should be implmentef and add require_once './../class.ckeditor.php';
	- then register the object with the wanted version of ckeditor $ckedit = new ckeditor("ckeditor_full");
	- example:
	<?php
	require_once './../class.ckeditor.php';
	$ckedit = new ckeditor("ckeditor_full");
	?>
	<!DOCTYPE html>
	<html>
	<head>
	    <title></title>
	
	</head>
	<body>
	
	<form>
	    <textarea id="edit_1"></textarea>
	    <textarea id="edit_2"></textarea>
	</form>
	<?php
	echo $ckedit->set_jquery_js();
	?>
	<?php
	echo $ckedit->ckEditor_all_by_jQuery(array("edit_1", "edit_2"));
	?>
	</body>
	</html>
