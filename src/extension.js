const vscode = require('vscode');

const Commands = vscode.commands;
const Window = vscode.window;
const symbolsCyrToLat = require('./symbols-cyr-to-lat');

const toArray = context => Array.prototype.slice.call(context);

const converter = (text, converTable) =>
	toArray(text).map(symbol => (!(symbol in converTable) ? symbol : converTable[symbol])).join('');

const translitCyrToLat = () => {
  const editor = Window.activeTextEditor;
  if (!editor) return;

  const selections = editor.selections;

  if (selections.length === 0) return;

  editor.edit(editBuilder => {
    selections.forEach(selectionItem => {
      const text = editor.document.getText(selectionItem);
      const convertedText = converter(text, symbolsCyrToLat);

      editBuilder.replace(selectionItem, convertedText);
    });
  });
};

const reg = (name, callback) => {
  Commands.registerTextEditorCommand(`extension.${name}`, callback);
};

exports.activate = context => {
  context.subscriptions.push(reg('translitCyrToLat', translitCyrToLat));
};

exports.deactivate = () => {};
