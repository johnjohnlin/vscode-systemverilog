// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	/*
	let disposable = vscode.commands.registerCommand('vscode-systemverilog.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from vscode-systemverilog!');
	});
	context.subscriptions.push(disposable);
	*/

	vscode.languages.registerHoverProvider('systemverilog', {
		provideHover(document, position, token) {
			return {
				contents: ['Hover Content']
			};
		}
	});
}

// this method is called when your extension is deactivated
export function deactivate() {}
