var app = require("express")();
var http=require("http").Server(app);
var io=require("socket.io")(http);
app.get("/",function(req,res){
     res.sendFile(__dirname+"/index11.html");   
    
});

io.on('connection', function(socket) {
    //io.sockets.emit('broadcast',' good evening');
    for(var x=0;x<5;x++){
    setTimeout(function(){
       socket.emit('ServerEvent',{desc:'good evening'});},4000);}
 
    
    socket.on('disconnect', function () {
    });

    socket.on('clientEvent',function(data){
        console.log(data);
    })
 });

http.listen(4000,(socket)=>{
      console.log('listening at Port:4000');      
});
