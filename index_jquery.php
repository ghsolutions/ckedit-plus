<?php
/**
 * Created by PhpStorm.
 * User: G. Hillebrand-Dinnebier
 * Date: 06.09.14
 * Time: 15:18
 */
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