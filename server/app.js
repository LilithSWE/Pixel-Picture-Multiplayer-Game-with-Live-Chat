const app = require("express")();
const CryptoJS = require('crypto-js');
/* 
Låt stå tills det behöver användas. 
CryptoJS.AES.encrypt(variabel, "Salt nyckel").toString();
CryptoJS.AES.decrypt(krypteradVariabel, "Salt nyckel").toString(CryptoJS.enc.Utf8); 
*/


const server = require("http").createServer(app); //har tillgång till all trafik som går ut och in i vår server. 

const io = require('socket.io')(server, {
  cors: {
    origin: "*", // öppnar upp trafiken från alla klienter. 
    methods: ["GET", "POST"]
  }
});

app.get("/test", (req, res) => {
  res.send("<h1>Socket</h1>");
});



io.on('connection', (socket) => {
  socket.emit("chat", { message: "Hello World", user: "BOT" })

  socket.on("chat", (arg) => {
    console.log("incoming chat", arg);
    io.emit("chat", arg)
  })
});


server.listen(process.env.PORT || '3000'); 