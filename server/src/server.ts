import {
	createConnection,
	TextDocuments,
	ProposedFeatures,
	InitializeParams,
	CompletionItemKind,
	TextDocumentSyncKind,
	InitializeResult,
	HoverParams, Hover
} from 'vscode-languageserver/node';
import {
	TextDocument
} from 'vscode-languageserver-textdocument';
const connection = createConnection(ProposedFeatures.all);
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

connection.onInitialize((_params: InitializeParams) => {
	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			hoverProvider: true,
			workspace: {
				workspaceFolders: {
					supported: true
				}
			}
		}
	};
	return result;
});

connection.onHover(
	(_params: HoverParams): Hover => {
		return {
			contents: 'Hover',
		};
	}
);

documents.listen(connection);
connection.listen();
