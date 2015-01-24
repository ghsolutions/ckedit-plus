<?php
/**
 * Created by PhpStorm.
 * User: G. Hillebrand-Dinnebier
 * Date: 06.09.14
 * Time: 15:18
 */
require_once 'class.ckeditor.php';
$ckedit = new ckeditor("ckeditor_3");

?>
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <?php
    echo $ckedit->set_js();
    ?>
</head>
<body>

<form>
    <textarea id="edit_1"></textarea>
    <?php
    //echo $ckedit->set_textarea_viaCode("edit_1");
    ?>
    <textarea id="edit_2"></textarea>
    <?php
    echo $ckedit->ckEditor_all_by_Code(array("edit_1","edit_2"));
    ?>
    <?php
       echo $ckedit->ckEditor_by_ClassName("edit_3");
    ?>

</form>

</body>
</html>