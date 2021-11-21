@echo off
title Instalando Modulos

echo / ---------------------------------------------- /
echo         Website Criado por Skull Rain
echo                 14 / 11 / 2021
echo               All rights reserved.
echo / ---------------------------------------------- /
echo Instalando Modulos requiridos...
echo --------------------------------------
cd %~dp0
cmd /c "npm init"
cmd /c "npm i npm@16"
cmd /c "npm i express"
cmd /c "npm i http"
cmd /c "npm i body-parser"
cmd /c "npm i path"
cmd /c "npm i serve-favicon"
cmd /c "npm i express-flash"
cmd /c "npm i ejs"
cmd /c "npm i express-session"
echo.
echo Feito!
echo Criando ficheiro de inicialização...
echo ------------------------------------
echo @echo off > iniciar.bat
echo :: Criado por Skull Rain (https://github.com/SkullRa1n) [ 14 / 11 / 2021 ] >> iniciar.bat
echo :: -*Leia o readme para saber sobre direitos e permissões!*- >> iniciar.bat
echo title Skull Rain WebSite >> iniciar.bat
echo :START >> iniciar.bat
echo node skull.js >> iniciar.bat
echo goto START >> iniciar.bat
echo "iniciar.bat" iniciar.bat criado.
echo ------------------------------------