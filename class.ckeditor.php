<?php
/**
 * @author G.Hillebrand-Dinnebier | support@gh-solutions.de
 * @copyright 2014 gh-solutions | www.gh-solutions.de
 * @version 1.0 (06.09.2014)
 * @version 1.1 (18.12.2014) | Fallback on CKEdit 3 for MSIE<9
 * @license LGPL 2.0
 */
define("URL_TO_DIRECTORY", "http://www.url.com/confs/")
class ckeditor {
	public $ckeditor_pfad = "";
	public function __construct($ckeditor_pfad = "ckeditor_basic") {
		if (preg_match ( '/(?i)msie [1-8]/', strtolower($_SERVER ['HTTP_USER_AGENT']) )) {//Fallback für IE < 9
			$ckeditor_pfad = "ckeditor_3";
			$this->ckeditor_pfad = trim ( $ckeditor_pfad );
		} else {
			$this->ckeditor_pfad = trim ( $ckeditor_pfad );
		}
	}
	public function set_js() {
		return '<script type="text/javascript" src="' . $this->ckeditor_pfad . '/ckeditor.js"></script>';
	}
	public function set_jquery_js() {
		return '<script type="text/javascript" src="' .URL_TO_DIRECTORY . $this->ckeditor_pfad . '/jquery-1.11.1.min.js"></script>' . '<script type="text/javascript" src="' . URL_TO_DIRECTORY . $this->ckeditor_pfad . '/ckeditor.js"></script>' . '<script type="text/javascript" src="' . URL_TO_DIRECTORY . $this->ckeditor_pfad . '/adapters/jquery.js"></script>';
	}
	public function ckEditor_one_by_Code($edit_id) {
		$_str = '<script type="text/javascript">';
		$_str .= "CKEDITOR.replace( '" . $edit_id . "' );";
		$_str .= '</script>';
		return $_str;
	}
	public function ckEditor_one_by_jQuery($edit_id) {
		$_str = '<script type="text/javascript">';
		$_str .= "$( document ).ready( function() {";
		$_str .= "$( '#" . $edit_id . "' ).ckeditor();";
		$_str .= "} );";
		$_str .= '</script>';
		return $_str;
	}
	public function ckEditor_all_by_Code($arr_edit_ids) {
		$_str = '';
		if (count ( $arr_edit_ids ) > 0 && is_array ( $arr_edit_ids )) {
			$_str .= '<script type="text/javascript">';
			foreach ( $arr_edit_ids as $edit_id ) {
				$_str .= "CKEDITOR.replace( '" . $edit_id . "' );";
			}
			$_str .= '</script>';
		}
		return $_str;
	}
	public function ckEditor_all_by_jQuery($arr_edit_ids) {
		$_str = '';
		if (count ( $arr_edit_ids ) > 0 && is_array ( $arr_edit_ids )) {
			$_str .= '<script type="text/javascript">';
			$_str .= "$( document ).ready( function() {";
			foreach ( $arr_edit_ids as $edit_id ) {
				$_str .= "$( '#" . $edit_id . "' ).ckeditor();";
			}
			$_str .= "} );";
			$_str .= '</script>';
		}
		return $_str;
	}
	public function ckEditor_by_ClassName($field_id, $style_classes = null) {
		return '<textarea class="ckeditor' . ((! is_null ( $style_classes ) && strlen ( $style_classes ) > 0) ? " " . $style_classes : "") . '" id="' . $field_id . '"></textarea>';
	}
}