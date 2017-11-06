var express = require('express');
var app = express();
var Nexmo = require('nexmo');


app.get('/', function (request, response) {
    var nexmo = new Nexmo({
        apiKey: '7e77dd06',
        apiSecret: '662ece03f6b568c6'
    });
    nexmo.message.sendSms('Nexmo', '201015576483', 'Hello 2nd', function(err){
        if(err){
            response.send('can not');
        }
        else{
            response.send('sent');
        }
    });
})

app.listen(4444, function () {
    console.log('listen on port 4444');
});