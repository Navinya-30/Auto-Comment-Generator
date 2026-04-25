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

function generateCommentCommand() {}

function deactivate() {}

module.exports = { activate, deactivate };
