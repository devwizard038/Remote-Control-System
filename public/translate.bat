@ECHO OFF
CD ..\translate
%LOCALAPPDATA%\..\Roaming\nvm\v14.16.0\node translate.js minifyall
%LOCALAPPDATA%\..\Roaming\nvm\v14.16.0\node translate.js translateall
%LOCALAPPDATA%\..\Roaming\nvm\v14.16.0\node translate.js extractall
DEL ..\emails\translations\*-min_*
Pause