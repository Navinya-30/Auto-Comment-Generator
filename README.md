# 🤖 Auto Comment Generator

> A VS Code extension that automatically generates meaningful comments for your selected code — no AI API needed.

[![VS Code](https://img.shields.io/badge/VS%20Code-%3E%3D1.85.0-blue?logo=visual-studio-code)](https://code.visualstudio.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Python](https://img.shields.io/badge/Python-Supported-blue?logo=python)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

---

## ✨ What It Does

Select any code → Run the command → A meaningful comment is inserted above it. Instantly.

**Before:**
```javascript
function calculateTax(price, rate) {
  return price * rate / 100;
}
```

**After:**
```javascript
// Function: calculateTax — performs an operation and returns a result
function calculateTax(price, rate) {
  return price * rate / 100;
}
```

---

## 🚀 Features

- ✅ Detects **functions**, **classes**, **loops**, **conditions**, **try/catch**, **imports**, **variables**
- ✅ Supports **JavaScript**, **TypeScript**, **Python**, **Java**, **C/C++**, **Go**, **Rust**, and more
- ✅ Correct comment style per language (`//`, `#`, `<!-- -->`, `/* */`, `--`)
- ✅ Command Palette integration
- ✅ Keyboard shortcut: `Ctrl+Alt+C`
- ✅ Right-click context menu entry
- ✅ Friendly error messages

---

## 📦 Installation

### Option 1: From VS Code Marketplace (coming soon)
Search `Auto Comment Generator` in the VS Code Extensions panel.

### Option 2: Run locally from source

**Prerequisites:** [Node.js](https://nodejs.org/) (v18+) and [VS Code](https://code.visualstudio.com/)

```bash
# 1. Clone the repo
git clone https://github.com/your-username/auto-comment-generator.git

# 2. Open in VS Code
cd auto-comment-generator
code .

# 3. Press F5 to launch Extension Development Host
```

---

## 🧑‍💻 How to Use

### Method 1: Command Palette
1. Select some code in the editor
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
3. Type `Generate Comment` and press Enter

### Method 2: Keyboard Shortcut
1. Select some code
2. Press `Ctrl+Alt+C` (or `Cmd+Alt+C` on Mac)

### Method 3: Right-Click Menu
1. Select some code
2. Right-click → **Generate Comment**

---

## 🛠️ Project Structure

```
auto-comment-generator/
├── src/
│   └── extension.js        ← Main extension logic (all 10 days of work!)
├── images/
│   └── icon.png            ← Extension icon (128×128 px)
├── .vscode/
│   └── launch.json         ← Debug config (press F5 to test)
├── package.json            ← Extension manifest & commands
├── .vscodeignore           ← Files excluded from package
├── CHANGELOG.md            ← Version history
└── README.md               ← You are here!
```

---

## 🧠 How the Comment Logic Works

This is a **rule-based** system (no API, no cost, works offline):

| Code Pattern | Detected As | Example Output |
|---|---|---|
| `function foo()` | Function | `// Function: foo — performs an operation and returns a result` |
| `class Bar` | Class | `// Class: Bar — defines a blueprint for creating objects` |
| `for (...)` | For loop | `// Loop: iterates over a collection and processes each item` |
| `while (...)` | While loop | `// Loop: continues executing while the condition remains true` |
| `if (...)` | Condition | `// Condition: checks a case and executes matching branch` |
| `try { ... }` | Error handling | `// Error handling: attempts an operation and catches any exceptions` |
| `import ...` | Import | `// Import: loads an external module or dependency` |
| `const x = ...` | Variable | `// Variable: stores the value for x` |

---

## 💬 Language Support

| Language | Comment Style | Supported |
|---|---|---|
| JavaScript / TypeScript | `// comment` | ✅ |
| Python | `# comment` | ✅ |
| Java / C / C++ / Go / Rust | `// comment` | ✅ |
| HTML / XML | `<!-- comment -->` | ✅ |
| CSS / SCSS | `/* comment */` | ✅ |
| SQL | `-- comment` | ✅ |
| Ruby / Shell / YAML | `# comment` | ✅ |

---

## 🔭 Roadmap (Future Features)

- [ ] AI-powered smart comments using Claude / OpenAI API
- [ ] "Explain like a beginner" mode
- [ ] "Explain in 1 line" vs "Explain in detail" options
- [ ] JSDoc / docstring style generation
- [ ] Inline comments for complex logic
- [ ] Auto-detect complex code and suggest comments

---

## 🏗️ Built Day by Day

This project was built in 10 days as a learning exercise:

| Day | What Was Built |
|---|---|
| Day 1 | Project setup, `yo code`, folder structure, first Git commit |
| Day 2 | Hello World extension, `activate()`, debug with F5 |
| Day 3 | Reading selected text with `editor.selection` |


---

## 🤝 Contributing

Pull requests welcome! Please open an issue first to discuss changes.

```bash
# Fork → Clone → Branch → Code → PR
git checkout -b feature/my-improvement
```

---

## 📄 License

[MIT](./LICENSE) © Navinya Ghanekar


---

## ⭐ Show Some Love

If this extension saves you time, please **star this repo** — it helps others find it!
