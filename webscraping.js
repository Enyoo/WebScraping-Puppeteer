var request = require('request');
var cheerio = require('cheerio');

// request('https://www.infomoney.com.br/cotacoes/ibovespa/', function(err, res, body){
//     if(err) console.log('Erro:  ' + err);

//     var $ = cheerio.load(body);

//     $('.quotes-header-info').each(function(){
//         var pontos = $(this).find('.value p').text().trim();
//         var percentage = $(this).find('.percentage p').text().trim();
//         var min = $(this).find('.minimo p').text().trim();
//         var max = $(this).find('.maximo p').text().trim();
//         console.info(pontos, percentage, min, max);
//     });
// });

request('https://www.infomoney.com.br/', function(err, res, body){
    if(err) console.log('Erro:  ' + err);

    var $ = cheerio.load(body);

    $('#table_dolar_bitcoin').each(function(){
        var pontos = $(this).find('tr').text().trim();
        // var pontos = $(this).find('td').text().trim();
        // var percentage = $(this).find('.percentage p').text().trim();
        // var min = $(this).find('.minimo p').text().trim();
        // var max = $(this).find('.maximo p').text().trim();
        // console.info(pontos, percentage, min, max);
        console.info($(this).html());
    });
});