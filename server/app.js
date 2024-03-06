const app = require("express")();

const server = require("http").createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Test Array för att se om vi kan kalla på "sparade spel" när vi laddar startPage - SKA TAS BORT 
let savedGames = [
  { pictureName: "test 1" },
  { pictureName: "test 2" }
]

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
    io.emit("getSavedGames", savedGames);
  })
});


server.listen(process.env.PORT || '3000'); 