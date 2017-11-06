// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var mod_vscode = require('vscode');

// This method is called when your extension is activated.
// Your extension is activated the very first time the command is executed
function fn_activate(argContext)
{
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "jgInsertTag" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var tmpDisposable = mod_vscode.commands.registerCommand('extension.jgInsertTag', function () {
        // The code you place here will be executed every time your command is executed
        var tmpEditor     = mod_vscode.window.activeTextEditor;
        //var tmpDoc        = tmpEditor.document;
        var tmpSelections = tmpEditor.selections;

        tmpEditor.edit(function (argEditBuilder) {
            for (var ii = 0; ii < tmpSelections.length; ii++)
			{
                argEditBuilder.replace(tmpSelections[ii], "");
                argEditBuilder.insert(tmpSelections[ii].active, "<=== JG: ");
            }
        });
    });

    argContext.subscriptions.push(tmpDisposable);
}

exports.activate = fn_activate;


// This method is called when your extension is deactivated
function fn_deactivate()
{
}

exports.deactivate = fn_deactivate;