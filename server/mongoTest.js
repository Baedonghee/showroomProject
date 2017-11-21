const express=require('express');
const http=require('http');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));


http.createServer(app).listen(3008, function(){  
	console.log("Http server listening on port ");
});
app.get('/park',function(req,res,next){
	res.send('테스트서버입니다.');
})