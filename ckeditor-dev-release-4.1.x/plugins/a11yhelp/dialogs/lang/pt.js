﻿/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.plugins.setLang( 'a11yhelp', 'pt', {
	title: 'Instruções de Acessibilidade',
	contents: 'Conteúdos da Ajuda. Pressione em \'ESC\' para fechar esta janela.',
	legend: [
		{
		name: 'Geral',
		items: [
			{
			name: 'Barra de Ferramentas do Editor',
			legend: 'Press ${toolbarFocus} to navigate to the toolbar. Move to the next and previous toolbar group with TAB and SHIFT-TAB. Move to the next and previous toolbar button with RIGHT ARROW or LEFT ARROW. Press SPACE or ENTER to activate the toolbar button.' // MISSING
		},

			{
			name: 'Janela do Editor',
			legend: 'Dentro de uma janela, pressione TAB para navigar para o campo da janela seguinte, pressione SHIFT + TAB para mover para o campo anterior, pressione ENTER para submeter a janela, pressione ESC para cancelar a janela. Para as janelas que têm múltiplos páginas com separadores, pressione ALT + F10 para navegar para a lista do separador. Depois mova para o seguinte separador com TAB ou SETA DIREITA. Mover para o separador anterior com SHIFT + TAB ou SETA ESQUERDA. Pressione ESPAÇO ou ENTER para selecionar o separador da página.'
		},

			{
			name: 'Menu de Contexto do Editor',
			legend: 'Press ${contextMenu} or APPLICATION KEY to open context-menu. Then move to next menu option with TAB or DOWN ARROW. Move to previous option with SHIFT+TAB or UP ARROW. Press SPACE or ENTER to select the menu option. Open sub-menu of current option with SPACE or ENTER or RIGHT ARROW. Go back to parent menu item with ESC or LEFT ARROW. Close context menu with ESC.' // MISSING
		},

			{
			name: 'Caixa Lista Editor',
			legend: 'Inside a list-box, move to next list item with TAB OR DOWN ARROW. Move to previous list item with SHIFT + TAB or UP ARROW. Press SPACE or ENTER to select the list option. Press ESC to close the list-box.' // MISSING
		},

			{
			name: 'Caminho Barra Elemento Editor',
			legend: 'Press ${elementsPathFocus} to navigate to the elements path bar. Move to next element button with TAB or RIGHT ARROW. Move to previous button with  SHIFT+TAB or LEFT ARROW. Press SPACE or ENTER to select the element in editor.' // MISSING
		}
		]
	},
		{
		name: 'Comandos',
		items: [
			{
			name: 'Comando de Anular',
			legend: 'Pressione ${undo}'
		},
			{
			name: 'Comando de Refazer',
			legend: 'Pressione ${redo}'
		},
			{
			name: 'Comando de Negrito',
			legend: 'Pressione ${bold}'
		},
			{
			name: 'Comando de Itálico',
			legend: 'Pressione ${italic}'
		},
			{
			name: 'Comando de Sublinhado',
			legend: 'Pressione ${underline}'
		},
			{
			name: 'Comando de Hiperligação',
			legend: 'Pressione ${link}'
		},
			{
			name: 'Comando de Ocultar Barra de Ferramentas',
			legend: 'Pressione ${toolbarCollapse}'
		},
			{
			name: 'Acesso comando do espaço focus anterior',
			legend: 'Press ${accessPreviousSpace} to access the closest unreachable focus space before the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces.' // MISSING
		},
			{
			name: 'Acesso comando do espaço focus seguinte',
			legend: 'Press ${accessNextSpace} to access the closest unreachable focus space after the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces.' // MISSING
		},
			{
			name: 'Ajuda de Acessibilidade',
			legend: 'Pressione ${a11yHelp}'
		}
		]
	}
	]
});
