// ============================================================
// AUTO COMMENT GENERATOR - VS Code Extension
// Main entry point: extension.js
// ============================================================

const vscode = require('vscode');

// activate() is called when the extension is first used
function activate(context) {
  console.log('Auto Comment Generator is now active!');

  // Register the main command — wires up the command ID to our handler
  let disposable = vscode.commands.registerCommand(
    'auto-comment-generator.generateComment',
    generateCommentCommand
  );

  context.subscriptions.push(disposable);
}

// Command handler
function generateCommentCommand() {
  // DAY 3: Get a reference to the currently focused editor
  const editor = vscode.window.activeTextEditor;

  // Guard: if no file is open, do nothing
  if (!editor) return;

  // DAY 3: Get the user's current selection (start/end positions)
  const selection = editor.selection;

  // DAY 3: Extract the actual string content from the selection range
  const text = editor.document.getText(selection);

  // DAY 3: Show a preview of the selected text (first 50 chars) in a popup
  vscode.window.showInformationMessage(`You selected: ${text.substring(0, 50)}`);
}

// deactivate() is called when the extension is disabled
function deactivate() {
  console.log('Auto Comment Generator deactivated.');
}

module.exports = { activate, deactivate };
