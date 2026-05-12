const express = require("express");
const http = require("http");
const cors = require("cors");
const path = require("path");

const { Server } = require("socket.io");

const startBinanceSocket =
  require("./websocket/binanceSocket");

const app = express();

app.use(cors());

// Serve frontend files
app.use(
  express.static(
    path.join(__dirname, "public")
  )
);

// Create HTTP server
const server = http.createServer(app);

// Socket.IO setup
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Frontend connection
io.on("connection", (socket) => {

  console.log("Frontend Connected");

  socket.on("disconnect", () => {

    console.log("Frontend Disconnected");
  });
});

// Start Binance WebSocket
startBinanceSocket(io);

// Start server
const PORT = 5000;

server.listen(PORT, () => {

  console.log(
    `Server running on http://localhost:${PORT}`
  );
});