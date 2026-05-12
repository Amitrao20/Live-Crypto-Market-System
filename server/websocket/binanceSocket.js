const WebSocket = require("ws");

function startBinanceSocket(io) {

  // Coins to track
  const streams = [
    "btcusdt@ticker",
    "ethusdt@ticker",
    "bnbusdt@ticker",
    "xrpusdt@ticker",
    "solusdt@ticker"
  ];

  // Binance combined stream URL
  const socketUrl =
    `wss://stream.binance.com:9443/stream?streams=${streams.join("/")}`;

  let ws;

  function connectSocket() {

    ws = new WebSocket(socketUrl);

    // Connected
    ws.on("open", () => {

      console.log(
        "Connected to Binance WebSocket"
      );
    });

    // Receive market data
    ws.on("message", (data) => {

      try {

        const response =
          JSON.parse(data);

        const ticker =
          response.data;

        const coinData = {
          symbol: ticker.s,
          price: ticker.c,
          change: ticker.P,
          high: ticker.h,
          low: ticker.l,
          volume: ticker.v,
        };

        // Send to frontend
        io.emit(
          "market-update",
          coinData
        );

      } catch (error) {

        console.log(
          "Parsing Error:",
          error.message
        );
      }
    });

    // Error
    ws.on("error", (err) => {

      console.log(
        "Socket Error:",
        err.message
      );
    });

    // Auto reconnect
    ws.on("close", () => {

      console.log(
        "Binance Socket Closed"
      );

      console.log(
        "Reconnecting in 5 seconds..."
      );

      setTimeout(() => {

        connectSocket();

      }, 5000);
    });
  }

  connectSocket();
}

module.exports = startBinanceSocket;