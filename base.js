//Testando o NodeJs 
let dt = require('./export1')
let http = require('http')
let url = require('url')

console.log("Funcionando")

http.createServer(function (req, res) {
    //recebendo dados da url enviados
    let sendUrl = url.parse(req.url, true).query
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    })
    //Iniciando a chamada http
    res.end(
        '<h1>Teste OK[200]</h1> '+
        '<style>'+
        'body {background-color: #4169E1}'+
        '</style>'+
        '<font color="red"><h2>Teste 2</h2></font> '+
        '<textArea>Tetse</textArea> '+
        '<h3>Santana me passa a resposta ai</h3>'+
        `<center>${dt.obterData()}</center>`+
        'Url enviada = ' + sendUrl.ano

    )
}).listen(80)

