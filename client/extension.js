const vscode = require('vscode');
const ARRAYS = require('./lists.js');


// Creación de la lista de comandos para autocompletar.
const CompletionList = []
for ( const [cmd, info] of Object.entries(ARRAYS.COMMANDS) ) {
	var CompletionItem = new vscode.CompletionItem(cmd);		// Nombre del elemento.

	if ( info['type'] == 'snippet' ) {
		CompletionItem.insertText = new vscode.SnippetString(info['snippet']);	// Snippet.
	}

	CompletionItem.documentation = new vscode.MarkdownString(info['doc']);		// Documentación.
	CompletionList.push(CompletionItem);
};


function activate(context) {

	// Hover de palabras.
	vscode.languages.registerHoverProvider('messi', {
		provideHover(document, position, token) {
			const range = document.getWordRangeAtPosition(position);
			const word = document.getText(range);

			const signo = '**Fútbol**: Cambia el signo de la posición actual de la lista.';
			const sustantivo = '**Sustantivo**: Suman uno a la posición actual de la lista.';
			const adjetivo = '**Adjetivo**: Multiplican por dos a la posición actual de la lista.';

			if (word == 'fútbol') { var res = new vscode.Hover(signo)
			} else if (ARRAYS.NOUNS.includes(word)) { var res = new vscode.Hover(sustantivo)
			} else if (ARRAYS.ADJECTIVES.includes(word)) { var res = new vscode.Hover(adjetivo) };
			return res;
		}
	});

	// Autocompletado de elementos.
	const CompletionProvider = vscode.languages.registerCompletionItemProvider('messi', {
		provideCompletionItems(document, position, token, context) {
			return CompletionList;
		}
	});

	context.subscriptions.push(CompletionProvider);
};


function deactivate() { };


module.exports = {
	activate,
	deactivate
};
