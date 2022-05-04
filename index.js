let request = require(`request`);
let apiKey = `b0509baee30f87a36bcf24353c3a8064`;
let cidade = `Contagem`;
let url =`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`
 
request(url, function (err, response, body) {
 if(err){
 console.log(`error:`, error);
 } else {
 // assim já funciona
 let weather = JSON.parse(body);
 let dados = `Temperatura para a ${weather.name}:
 -------------------------------------------
 - Temperatura: ${weather.main.temp}ºc
 - Humidade: ${weather.main.humidity} %`;
 console.log(dados);
 }
});