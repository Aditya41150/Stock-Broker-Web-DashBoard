# 📊 Stock Broker Web Dashboard

A modern, real-time stock tracking dashboard built with vanilla JavaScript. Monitor your favorite stocks with beautiful charts and live price updates - all in your browser.

![Stock Dashboard](https://img.shields.io/badge/Status-Active-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=white)

## ✨ Features

- **🔐 Simple Login** - Quick email-based authentication to personalize your dashboard
- **📈 Real-time Price Updates** - Watch stock prices update every second with live simulations
- **📊 Interactive Charts** - Beautiful line charts powered by Chart.js showing price history
- **💾 Persistent Subscriptions** - Your stock subscriptions are saved locally and restored on login
- **🎨 Modern UI** - Clean, responsive design with smooth animations and gradients
- **📱 Mobile Friendly** - Responsive layout that works on all screen sizes
- **🚀 Zero Dependencies Server** - Pure frontend application, no backend required

## 🎯 Supported Stocks

| Symbol | Company |
|--------|---------|
| GOOG | Google |
| TSLA | Tesla |
| AMZN | Amazon |
| META | Meta |
| NVDA | Nvidia |

## 🚀 Quick Start

### Option 1: Open Directly
Simply open `index.html` in your web browser:

```bash
# Clone the repository
git clone https://github.com/Aditya41150/Stock-Broker-Web-DashBoard.git

# Navigate to the project
cd Stock-Broker-Web-DashBoard

# Open in browser (macOS)
open index.html

# Open in browser (Linux)
xdg-open index.html

# Open in browser (Windows)
start index.html
```

### Option 2: Use a Local Server
For a better development experience, use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📖 How to Use

1. **Login** - Enter your email address on the login screen
2. **Subscribe** - Click "Subscribe to Stock" to add stocks to your watchlist
3. **Monitor** - Watch real-time price updates and charts for your subscribed stocks
4. **Unsubscribe** - Click the ✕ button on any stock card to remove it
5. **Logout** - Click "Logout" to save your subscriptions and return to login

## 🏗️ Project Structure

```
Stock-Broker-Web-DashBoard/
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # Application logic and stock simulation
└── README.md       # Documentation
```

## 🛠️ Technology Stack

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)** - Application logic and DOM manipulation
- **Chart.js** - Beautiful, responsive charts
- **LocalStorage** - Client-side data persistence

## 💡 How It Works

The dashboard simulates real-time stock price movements:

1. **Price Simulation** - Each stock has a base price that fluctuates randomly every second
2. **History Tracking** - The last 20 price points are stored for chart visualization
3. **Visual Indicators** - Green (📈) for price increases, red (📉) for decreases
4. **Data Persistence** - User subscriptions are saved to LocalStorage per email

## 🎨 UI Features

- Gradient backgrounds and buttons
- Smooth slide-up and fade-in animations
- Hover effects on interactive elements
- Color-coded price changes (green/red)
- Responsive grid layout for stock cards

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Chart.js](https://www.chartjs.org/) for the charting library
- Stock price simulation is for demonstration purposes only

---

<p align="center">
  Made with ❤️ for stock enthusiasts
</p>
