var express= require('express');

var app = express();


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('*',function(request,response){
	if (request.url == '/') {
        filepath="/index.html";
    }
    else {
        filepath = request.url;
    };
    var absPath = filepath;
    response.sendFile(absPath);
	
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
