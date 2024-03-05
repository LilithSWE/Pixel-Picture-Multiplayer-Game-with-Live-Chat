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

// Array som sparar alla våra chatrooms, har två st till att börja med. OBS måste vara global 
let chatrooms = [
  { chatroomName: "allmänt" },
  { chatroomName: "fredagsmys" }
]

app.get("/", (req, res) => {
  res.send("<h1>Backend har kopplats upp!</h1>");
});
console.log("Backend är på lokalt");


io.on('connection', (socket) => {

  // Test meddelande för chatten.
  socket.emit("chat", { message: "Hello World", user: "BOT", room: "allmänt" })
  // Uppdaterat chat för alla klineter med varje nytt inskickat meddelande oavsett från vilken klient den kommer ifrån. 
  socket.on("chat", (arg) => {
    console.log("incoming chat", arg);
    io.emit("chat", arg)
  });



  // Svarar startPage med alla chatrooms 
  // socket.on("getChatrooms", () => {
  //   for (let i = 0; i < chatrooms.length; i++) {
  //     const savedChatroom = chatrooms[i];
  //     io.emit("getChatrooms", savedChatroom);
  //   }
  // });

    // Svarar startPage med alla chatrooms - hela arrayen
  socket.on("getChatrooms", () => {
    io.emit("getChatrooms", chatrooms);
    console.log(chatrooms);
  })




});


server.listen(process.env.PORT || '3000'); 