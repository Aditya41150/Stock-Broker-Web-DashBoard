# 📈 Stock Broker Web Dashboard

A real-time stock tracking web application with synchronized prices across multiple users. Built with vanilla JavaScript and Express.js for seamless multi-user experience.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

## ✨ Features

- **🔐 User Authentication** - Email-based login with persistent sessions
- **📊 Real-Time Synchronized Prices** - All users see identical stock prices updated every second
- **📈 Live Interactive Charts** - Dynamic price history visualization with Chart.js
- **👥 Multi-User Support** - Multiple users can track different stocks simultaneously
- **🔄 Master-Slave Architecture** - Automatic price synchronization across all browser tabs
- **💾 Data Persistence** - User subscriptions saved using localStorage
- **🎨 Modern Gradient UI** - Beautiful purple gradient design with smooth animations
- **📱 Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **⚡ Lightweight & Fast** - Pure vanilla JavaScript with Express backend

## 🎯 Supported Stocks

- **GOOG** - Google ($140 base)
- **TSLA** - Tesla ($245 base)
- **AMZN** - Amazon ($175 base)
- **META** - Meta ($485 base)
- **NVDA** - Nvidia ($495 base)

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **Charts:** Chart.js
- **Storage:** localStorage API
- **Architecture:** Master-Slave synchronization pattern

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Aditya41150/Stock-Broker-Web-DashBoard.git
cd Stock-Broker-Web-DashBoard
```

### 2. Install Dependencies

```bash
npm install
```

This will install Express.js and other required packages.

### 3. Run the Server

```bash
node server.js
```

You should see:
```
Server is running on http://localhost:3000
```

### 4. Open in Browser

Navigate to: **http://localhost:3000**

## 📂 Project Structure

```
Stock-Broker-Web-DashBoard/
│
├── server.js           # Express server configuration
├── package.json        # Node.js dependencies
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Application logic and price sync
└── README.md           # Project documentation
```

## 🎮 How to Use

### Step 1: Login
1. Open http://localhost:3000 in your browser
2. Enter any email address (e.g., `user1@example.com`)
3. Click "Login" or press Enter

### Step 2: Subscribe to Stocks
1. Click the **"Subscribe to Stock"** button
2. Select stocks from the available list:
   - GOOG (Google)
   - TSLA (Tesla)
   - AMZN (Amazon)
   - META (Meta)
   - NVDA (Nvidia)
3. Click on any stock to add it to your dashboard

### Step 3: Monitor in Real-Time
- Watch prices update every second
- View trend indicators (📈 up / 📉 down)
- Track price history on interactive charts
- Remove stocks by clicking the ✕ button

### Step 4: Multi-User Testing
1. Keep the first browser window open
2. Open a **new browser window** (or incognito)
3. Login with a different email (e.g., `user2@example.com`)
4. Subscribe to the same or different stocks
5. **Both dashboards show synchronized prices!** ✅

## 👨‍💻 Author

**Aditya**
- GitHub: [@Aditya41150](https://github.com/Aditya41150)
- Repository: [Stock-Broker-Web-DashBoard](https://github.com/Aditya41150/Stock-Broker-Web-DashBoard)
