// const vscode = require('vscode');
// const symbolsCyrToLat = require('./symbols-cyr-to-lat');

// /* Helpper */

// const toArray = context => {
// 	return Array.prototype.slice.call(context);
// };

// const converter = (text, converTable) => {
// 	const symbols = toArray(text);
// 	return symbols.map(symbol => (!(symbol in converTable) ? symbol : converTable[symbol])).join('');
// };

// /* /Helpper */

// const translitCyrToLat = () => {
// 	const editor = vscode.window.activeTextEditor;
// 	if (!editor) return;

// 	const selections = editor.selections;

// 	if (selections.length === 0) return;

// 	selections.forEach(selectionItem => {
// 		const text = editor.document.getText(selectionItem);
// 		const convertedText = converter(text, symbolsCyrToLat);

// 		editor.edit(editBuilder => {
// 			editBuilder.replace(selectionItem, convertedText);
// 			return true;
// 		});
// 	});
// };

// const reg = (name, callback) => {
// 	vscode.commands.registerCommand(`extension.${name}`, callback);
// };

// exports.activate = context => {
// 	context.subscriptions.push(reg('translitCyrToLat', translitCyrToLat));
// };

// exports.deactivate = () => {};
