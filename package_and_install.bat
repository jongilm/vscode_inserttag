@echo off
rem git init
rem git add .
rem git commit -m "Initial checkin"
rem git remote add origin https://github.com/jongilm/vscode_inserttag.git
rem git push origin master
rem -----------------------------------------------------
rem npm install -g vsce
rem C:\Users\jonathang\AppData\Roaming\npm\vsce -> C:\Users\jonathang\AppData\Roaming\npm\node_modules\vsce\out\vsce
rem + vsce@1.32.0
rem added 61 packages in 4.89s
rem -----------------------------------------------------
rem vsce publish
rem Personal Access Token for publisher 'jongilm':
rem Error: Invalid Resource
rem -----------------------------------------------------

vsce package
echo Expect: Created: c:\home\dev_jg\vscode_inserttag\jgInsertTag-0.0.1.vsix
pause

code --install-extension jgInsertTag-0.0.1.vsix
echo Expect: Extension 'jgInsertTag-0.0.1.vsix' was successfully installed!
pause

code --list-extensions|grep jg
echo Expect: jongilm.jgInsertSignature
echo Expect: jongilm.jgInsertTag
pause

