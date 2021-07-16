// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: vscode.ExtensionContext) {
	/*
	let disposable = vscode.commands.registerCommand('vscode-systemverilog.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from vscode-systemverilog!');
	});
	context.subscriptions.push(disposable);

	vscode.languages.registerHoverProvider('systemverilog', {
		provideHover(document, position, token) {
			return {
				contents: ['Hover Content']
			};
		}
	});
	*/

	let serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);
	let debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };
	let serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
			options: debugOptions
		}
	};
	let clientOptions: LanguageClientOptions = {
		documentSelector: [{ scheme: 'file', language: 'systemverilog' }]
	};
	client = new LanguageClient(
		'languageServerExample',
		'Language Server Example',
		serverOptions,
		clientOptions
	);
	client.start();
}

// this method is called when your extension is deactivated
export function deactivate() {

}
