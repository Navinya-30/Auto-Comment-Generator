# 📅 10-Day GitHub Push Guide

This file tells you **exactly what to do each day** — what code to write, what to commit, and what command to push.

---

## ✅ Pre-Day 1 Setup (Do this ONCE)

Install these tools first:

```bash
# 1. Install Node.js from https://nodejs.org (v18 or later)
node --version   # should show v18+

# 2. Install the Yeoman VS Code extension generator
npm install -g yo generator-code

# 3. Install vsce (packaging tool — needed on Day 10)
npm install -g @vscode/vsce

# 4. Make sure you have Git
git --version
```

Create a GitHub repo named `auto-comment-generator` (empty, no README).

---

## 📅 Day 1 — Project Setup & Scaffolding

### What you learn
- How VS Code extensions are structured
- What `package.json` does for extensions
- How to use Yeoman to scaffold a project

### Steps

```bash
# 1. Scaffold the project with Yeoman
yo code
```

When prompted:
- What type? → **New Extension (JavaScript)**
- Name? → `auto-comment-generator`
- Identifier? → `auto-comment-generator`
- Description? → `Generates comments for selected code`
- Enable JS/TS checking? → No
- Package manager? → npm

```bash
# 2. Open in VS Code
cd auto-comment-generator
code .

# 3. Replace the generated files with the ones from this repo
# (copy package.json, src/extension.js, etc.)

# 4. Initialize Git and push
git init
git add .
git commit -m "Day 1: Project setup and scaffolding"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/auto-comment-generator.git
git push -u origin main
```

### Key file to understand
Open `package.json` — look at these sections:
- `"main"` → points to your extension entry file
- `"contributes"` → where commands are registered
- `"activationEvents"` → when the extension loads

---

## 📅 Day 2 — Hello World Extension

### What you learn
- How `activate()` works
- How to register a command
- How to test your extension with F5

### Steps

In `src/extension.js`, make sure `activate()` shows a message:
```javascript
function activate(context) {
  let disposable = vscode.commands.registerCommand(
    'auto-comment-generator.generateComment',
    function () {
      vscode.window.showInformationMessage('Hello from Auto Comment Generator!');
    }
  );
  context.subscriptions.push(disposable);
}
```

**Test it:**
1. Press `F5` — a new VS Code window opens (Extension Development Host)
2. Press `Ctrl+Shift+P` in that window
3. Type "Generate Comment" → press Enter
4. You should see the message pop up!

```bash
git add .
git commit -m "Day 2: Hello World extension running with F5"
git push
```

---

## 📅 Day 3 — Read Selected Text

### What you learn
- `vscode.window.activeTextEditor`
- `editor.selection`
- `editor.document.getText(selection)`

### Steps

Update the command function:
```javascript
function () {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const selection = editor.selection;
  const text = editor.document.getText(selection);

  vscode.window.showInformationMessage(`You selected: ${text.substring(0, 50)}`);
}
```

**Test it:**
1. F5 → open any JS or Python file
2. Select a line of code
3. Run the command
4. See your selected text in the message!

```bash
git add .
git commit -m "Day 3: Reading selected text from the editor"
git push
```

---

## 📅 Day 4 — Insert Text Above Selection

### What you learn
- `editor.edit(editBuilder => ...)`
- `editBuilder.insert(position, text)`
- `new vscode.Position(line, character)`

### Steps

```javascript
await editor.edit(editBuilder => {
  const insertPosition = new vscode.Position(selection.start.line, 0);
  editBuilder.insert(insertPosition, '// Test comment\n');
});
```

**Test it:**
1. F5 → select a line
2. Run the command
3. A comment should appear ABOVE your selected line!

```bash
git add .
git commit -m "Day 4: Inserting comment text above selected code"
git push
```

---

## 📅 Day 5 — Command Palette + Keybinding

### What you learn
- `"contributes"` in `package.json`
- How to add keyboard shortcuts
- How to add right-click menu entries

### Steps

Open `package.json` and make sure these are in `"contributes"`:

```json
"commands": [
  {
    "command": "auto-comment-generator.generateComment",
    "title": "Generate Comment"
  }
],
"keybindings": [
  {
    "command": "auto-comment-generator.generateComment",
    "key": "ctrl+alt+c",
    "mac": "cmd+alt+c",
    "when": "editorTextFocus"
  }
],
"menus": {
  "editor/context": [
    {
      "command": "auto-comment-generator.generateComment",
      "when": "editorHasSelection"
    }
  ]
}
```

**Test it:**
1. F5 → select code
2. Try `Ctrl+Alt+C` — works!
3. Try right-clicking selected code — you see "Generate Comment"!

```bash
git add .
git commit -m "Day 5: Command palette, keybinding, and right-click menu"
git push
```

---

## 📅 Day 6 — Rule-Based Comment Logic

### What you learn
- Using `.match()` and regex for pattern detection
- Building a decision-making function
- How rule-based NLP works

### Steps

Create the `generateSmartComment(code)` function (see `src/extension.js`).

This function checks the code for patterns like `function`, `for`, `if`, `class`, etc. and returns a human-readable comment.

**Test it with these snippets:**
```javascript
function add(a, b) { return a + b; }
// Should generate: "Function: add — performs an operation..."

for (let i = 0; i < 10; i++) { ... }
// Should generate: "Loop: iterates over a collection..."

if (user.isAdmin) { ... }
// Should generate: "Condition: checks a case..."
```

```bash
git add .
git commit -m "Day 6: Rule-based comment generation with keyword detection"
git push
```

---

## 📅 Day 7 — Multi-Language Support

### What you learn
- `editor.document.languageId`
- How different languages format comments
- Handling multiple file types

### Steps

Create the `formatComment(text, languageId)` function.

```javascript
// For Python files:     # This is a comment
// For JS files:         // This is a comment
// For HTML files:       <!-- This is a comment -->
// For CSS files:        /* This is a comment */
```

**Test it:**
1. Open a `.py` file → run command → should use `#`
2. Open a `.js` file → run command → should use `//`
3. Open an `.html` file → run command → should use `<!-- -->`

```bash
git add .
git commit -m "Day 7: Multi-language comment style support"
git push
```

---

## 📅 Day 8 — Error Handling & Edge Cases

### What you learn
- Defensive programming
- `vscode.window.showWarningMessage()`
- Handling edge cases gracefully

### Steps

Add these guards at the start of your command function:
```javascript
// Guard 1: No editor open
if (!editor) {
  vscode.window.showWarningMessage('No active editor found!');
  return;
}

// Guard 2: Nothing selected
if (selection.isEmpty) {
  vscode.window.showWarningMessage('Select some code first!');
  return;
}

// Guard 3: Empty/whitespace selection
if (selectedText.trim().length === 0) {
  vscode.window.showWarningMessage('Selected text is empty!');
  return;
}
```

**Test edge cases:**
1. Run command with nothing selected → should show warning
2. Run command with only spaces selected → should show warning
3. Run command with no file open → should show warning

```bash
git add .
git commit -m "Day 8: Error handling and edge case guards"
git push
```

---

## 📅 Day 9 — README + Documentation

### What you learn
- How to write a great README
- Markdown formatting
- How to document a project professionally

### Steps

The `README.md` is already written! Just:
1. Replace `your-username` with your actual GitHub username
2. Replace `your-name` with your name in `package.json`
3. Add a screenshot (optional but great):
   - Press `F5`, run the extension, take a screenshot
   - Save it as `images/screenshot.png`
   - Add to README: `![Screenshot](images/screenshot.png)`

```bash
git add .
git commit -m "Day 9: README, documentation, and project description"
git push
```

---

## 📅 Day 10 — Final Cleanup & Publish-Ready

### What you learn
- How to package a VS Code extension
- `.vscodeignore` — what to exclude
- How to create a release on GitHub

### Steps

```bash
# 1. Make sure everything works one last time (F5 test)

# 2. Package the extension
vsce package
# This creates a file like: auto-comment-generator-0.1.0.vsix

# 3. Install it locally to test the real thing
code --install-extension auto-comment-generator-0.1.0.vsix

# 4. Final commit
git add .
git commit -m "Day 10: Final cleanup, packaged extension v0.1.0"
git push

# 5. Create a GitHub Release
# Go to your repo on GitHub
# Click "Releases" → "Create a new release"
# Tag: v0.1.0
# Title: Auto Comment Generator v0.1.0
# Attach the .vsix file
# Publish!
```

### 🎉 You're done!

Your extension is:
- Working ✅
- Documented ✅
- On GitHub ✅
- Packaged ✅

---

## 🔢 Quick Reference: All Git Commands

```bash
# Daily workflow (after making changes)
git add .
git commit -m "Day X: what you did"
git push

# Check what changed
git status
git diff

# See your history
git log --oneline
```
