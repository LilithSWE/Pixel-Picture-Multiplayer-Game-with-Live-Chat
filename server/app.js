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
  socket.on("newGame", () => {
    // Check how many games are avaliable. 
    let amountOfNewGames = 0;
    newGame.forEach(colourlessSaveFile => {
      amountOfNewGames++;
    });
    // If no games are avaliable. change the buttom in FrontEnd when it's clicked. 
    if (amountOfNewGames === 0) {
      console.log("No more empty savefiles avaliable, please reset the server.");
      io.emit("noMoreNewGames")
      return;
    };
    // Randomly pick a number based on amount of games avalible 
    let randomIndex = Math.floor(Math.random() * amountOfNewGames); // Gives number between 0-4. 
    // Use number to find one of the arrays in the newGame.json. Push it to savedGame.json and remove from newGame.json. 
    let emptySave = newGame[randomIndex];
    savedGame.push(emptySave)
    // Send out the new game. 
    io.emit("newGame", (emptySave));
    // remove from the newGame.json so we won't get duplicates.
    newGame.splice(randomIndex, 1);
  })
  // Svarar startPage med alla saved games - hela arrayen
  socket.on("getSavedGames", () => {
    io.emit("getSavedGames", savedGame);
  })
  // Accepts ONLY the pictureName, not te whole object. 
  socket.on("updateColorArray", (pictureName) => {
    savedGame.forEach(game => {
      if (game[0].pictureName === pictureName) {
        let oldArray = game[0].pictureColors
        oldArray.shift();
      }
    });
  })
  socket.on("paint", (updatedCell) => {
    savedGame.forEach(game => {
      if (game[0].pictureName === updatedCell.pictureName) {
        game.forEach(oldCell => {
          if (oldCell.pictureCoordinate === updatedCell.pictureCoordinate) {
            oldCell.pictureColor = updatedCell.pictureColor;
          }
        })

        io.emit("updatedPicture", game)
      }
    });
  })
  socket.on("finishGame", () => {
    io.emit("finishGame")
  });
  socket.on("leaveGame", () => {
    io.emit("leaveGame")
  });
  socket.on("playAgain", () => {
    io.emit("playAgain")
  });
  socket.on("continue", () => {
    io.emit("continue")
  });
  socket.on("reset", (currentPictureName) => {
    savedGame.forEach(game => {
      if (game[0].pictureName === currentPictureName) {
        game.forEach(oldCell => {
          oldCell.pictureColor = "#808080"; //gray 
        });

        io.emit("clearedPicture", game)
      }
    });
  })
  socket.on("getCurrentGame", (pictureName) => {
    savedGame.forEach(game => {
      if (game[0].pictureName === pictureName) {
        io.emit("getCurrentGame", game);
      }
    })
  })
  socket.on("getKey", (pictureName) => {
    key.forEach(game => {
      if (game[0].pictureName === pictureName) {
        io.emit("getKey", game)
      }
    })
  })
  socket.on("displayCurrentGame", (pictureName) => {
    savedGame.forEach(game => {
      if (game[0].pictureName === pictureName) {
        io.emit("displayCurrentGame", game);
      }
    })
  })
  socket.on("displayKey", (pictureName) => {
    key.forEach(game => {
      if (game[0].pictureName === pictureName) {
        io.emit("displayKey", game)
      }
    })
  })
  socket.on("showOriginal", (pictureName) => {
    key.forEach(game => {
      if (game[0].pictureName === pictureName) {
        io.emit("showOriginal", game)
      }
    })
  })
  /* socket.on för "getNewGame"
  hämtar nytt RANDOM spel från newGame.json och flytta till savedGame.json. 
  Svara med filen.*/
});

server.listen(process.env.PORT || '3000'); 