<!--<!DOCTYPE html>
<html>
   <script src = "/socket.io/socket.io.js">     
   </script>
   <script>
       var socket = io();
       socket.on('ServerEvent',function(data){
        document.getElementById('main').innerHTML = data.desc;
       });
       socket.emit('clientEvent', 'Sent an event from the client!');
       socket.on('broadcast',function(data){
           document.getElementById('brdmsg').innerHTML = data.description;
       });
   </script>
   
</html>

-->

<!DOCTYPE html>
<html>
   <head>
      <title>Hello world</title>
   </head>
   <script src = "/socket.io/socket.io.js">     
   </script>
   <script>
       var socket = io();
     
       socket.emit('clientEvent', 'Sent an event from the client!');
       socket.on('broadcast',function(data){
           document.getElementById('brdmsg').innerHTML = data.description;
       });
       
   </script>
   <body>
       
        <span id="brdmsg"></span>
        <span id="main"></span>
        
    </body>
</html>



 
