// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "import-to-lazy" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(
    "import-to-lazy.convertToLazyImport",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      const editor = vscode.window.activeTextEditor;

      if (editor) {
        const document = editor.document;
        const selection = editor.selection;
        const text = document.getText(selection);

        const regex = /import\s+(\w+)\s+from\s+['"](.+?)['"]/;
        const match = text.match(regex);

        if (match) {
          const [fullMatch, componentName, importPath] = match;
          const lazyImport = `const ${componentName} = lazy(() => import('${importPath}'))`;

          editor.edit((editBuilder) => {
            editBuilder.replace(selection, lazyImport);
          });
        } else {
          vscode.window.showInformationMessage(
            "No import statement found in the selected text.",
          );
        }
      }
    },
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
