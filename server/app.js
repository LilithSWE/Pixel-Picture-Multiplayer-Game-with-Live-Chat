const app = require("express")();

const server = require("http").createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

let key = require("./json_storage/key.json")
let newGame = require("./json_storage/newGame.json")
let savedGame = require("./json_storage/savedGame.json")

app.get("/", (req, res) => {
  res.send("<h1>Backend har kopplats upp!</h1>");
});

io.on('connection', (socket) => {
  // Uppdaterat chat för alla klineter med varje nytt inskickat meddelande oavsett från vilken klient den kommer ifrån. 
  socket.on("chat", (chatMessage) => {
    console.log("incoming chat", chatMessage);
    io.emit("chat", chatMessage)
  });

  // Svarar startPage med alla saved games - hela arrayen
  socket.on("getSavedGames", () => {
    io.emit("getSavedGames", savedGame);
  })
});

server.listen(process.env.PORT || '3000'); 