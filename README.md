# 🚀 Live Crypto Market System

A real-time crypto market monitoring system built with Node.js, Binance WebSocket Streams, and Socket.IO.

This project streams live cryptocurrency market data and displays real-time updates similar to CoinMarketCap or trading dashboards.

---

# ✨ Features

## Current Features

* ✅ Real-time crypto price updates
* ✅ Binance WebSocket integration
* ✅ Live market listing
* ✅ 24h price change tracking
* ✅ High / Low / Volume tracking
* ✅ Auto reconnect WebSocket handling
* ✅ Socket.IO real-time frontend updates
* ✅ Event-driven architecture
* ✅ Scalable backend structure

---

# 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* Socket.IO
* WebSocket (`ws`)

### Market Data

* Binance WebSocket Streams API

### Frontend

* HTML
* CSS
* Vanilla JavaScript

---

# 📁 Project Structure

```bash
server/
│
├── app.js
│
├── public/
│   └── index.html
│
├── websocket/
│   └── binanceSocket.js
│
└── package.json
```

---

# ⚡ Installation

## Clone Repository

```bash
git clone <YOUR_GITHUB_REPO_URL>
```

---

## Move to Project

```bash
cd server
```

---

## Install Dependencies

```bash
npm install
```

---

# ▶️ Run Project

```bash
node app.js
```

---

# 🌐 Open In Browser

```bash
http://localhost:5000
```

---

# 📡 Binance WebSocket Streams Used

Current streams:

```bash
btcusdt@ticker
ethusdt@ticker
bnbusdt@ticker
xrpusdt@ticker
solusdt@ticker
```

---

# 🔥 How It Works

```text
Binance WebSocket
        ↓
Node.js Backend
        ↓
Socket.IO
        ↓
Frontend Live Table
```

The backend receives real-time market data from Binance and pushes updates instantly to connected clients.

---

# 🧠 Future Roadmap

Planned upcoming features:

* 🔔 Smart alert system
* 🤖 AI-powered portfolio assistant
* 📩 Email / WhatsApp notifications
* 📊 Portfolio tracking dashboard
* 💰 Wallet system
* 💳 Subscription & payment integration
* 📰 Global news sentiment analysis
* 🎯 Target profit/loss automation
* ⚡ Real-time trade signals
* 📈 TradingView chart integration
* 🧠 Agentic AI workflows
* 🔄 Automated trading assistance

---

# 🚀 Learning Goals

This project focuses on learning and implementing:

* Realtime systems
* WebSocket architecture
* Event-driven backend systems
* Financial technology systems
* Scalable Node.js architecture
* Streaming APIs
* AI-driven market automation

---

# 📚 Useful Links

## Binance WebSocket API

https://developers.binance.com/docs/binance-spot-api-docs/web-socket-streams

## Socket.IO

https://socket.io/

---

# 👨‍💻 Author

Amit Rao

Backend Developer | Node.js | WebSocket | AI Systems | Realtime Applications

---

# ⭐ Support

If you like this project, consider giving it a star ⭐ on GitHub.
