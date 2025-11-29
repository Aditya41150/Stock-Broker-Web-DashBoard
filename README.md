# 📈 Stock Broker Client Dashboard

A beautiful, real-time stock tracking web application built with vanilla JavaScript. Monitor multiple stocks simultaneously with live price updates and interactive charts.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- **🔐 User Authentication** - Email-based login system with persistent sessions
- **📊 Real-Time Updates** - Stock prices update every second without page refresh
- **📈 Live Charts** - Interactive price history visualization using Chart.js
- **👥 Multi-User Support** - Each user maintains their own stock subscriptions
- **💾 Data Persistence** - Subscriptions saved locally across sessions
- **🎨 Modern UI** - Beautiful gradient design with smooth animations
- **📱 Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **⚡ Fast & Lightweight** - Pure vanilla JavaScript, no frameworks required

## 🚀 Demo

-> https://stock-broker-web-dashboard.netlify.app/

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with animations and gradients
- **JavaScript (ES6+)** - Vanilla JS for all functionality
- **Chart.js** - Interactive and responsive charts
- **LocalStorage API** - Client-side data persistence

## 📦 Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: A local web server (Live Server, Python HTTP server, etc.)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/stock-broker-dashboard.git
   cd stock-broker-dashboard
   ```

2. **Open the application**

   **Option A: Direct file opening**
   - Simply double-click `index.html`

   **Option B: Using Live Server (VS Code)**
   - Right-click `index.html`
   - Select "Open with Live Server"

   **Option C: Python HTTP Server**
   ```bash
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`

## 📂 Project Structure

```
stock-broker-dashboard/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Application logic and functionality
└── README.md           # Project documentation
```

## 🎯 Usage

### Getting Started

1. **Login**
   - Enter your email address
   - Click "Login" or press Enter

2. **Subscribe to Stocks**
   - Click "Subscribe to Stock" button
   - Select from available stocks:
     - GOOG (Google)
     - TSLA (Tesla)
     - AMZN (Amazon)
     - META (Meta)
     - NVDA (Nvidia)

3. **Monitor Prices**
   - Watch real-time price updates every second
   - View price changes with trend indicators
   - Track historical data on interactive charts

4. **Manage Subscriptions**
   - Remove stocks by clicking the ✕ button
   - Your subscriptions are automatically saved

### Multi-User Testing

1. Open the dashboard in one browser window
2. Login with `user1@example.com`
3. Subscribe to some stocks
4. Open another browser window (or incognito)
5. Login with `user2@example.com`
6. Subscribe to different stocks
7. Watch both dashboards update independently!

## 🔧 Configuration

### Modifying Stock List

Edit the stock data in `script.js`:

```javascript
const stocks = ['GOOG', 'TSLA', 'AMZN', 'META', 'NVDA'];
const stockData = {
    GOOG: { name: 'Google', basePrice: 140 },
    TSLA: { name: 'Tesla', basePrice: 245 },
    // Add more stocks here
};
```

### Changing Update Interval

Modify the interval in `script.js` (default is 1000ms = 1 second):

```javascript
timer = setInterval(() => {
    // Update logic
}, 1000); // Change this value
```

### Customizing Colors

Update the gradient colors in `style.css`:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 🎨 Features Breakdown

### Real-Time Price Updates
- Prices fluctuate randomly between -$5 and +$5 per second
- Simulates realistic market volatility
- Updates all subscribed stocks simultaneously

### Interactive Charts
- 20-point rolling history per stock
- Color-coded based on trend (green = up, red = down)
- Responsive canvas that adapts to container size
- Smooth animations on data updates

### Data Persistence
- Subscriptions saved per user email
- Uses browser's LocalStorage API
- Data persists across page refreshes
- Automatic save on logout

### Responsive Design
- Mobile-first approach
- Flexible grid layout for stock cards
- Collapsible header on mobile devices
- Touch-friendly buttons and interactions

## 🔒 Security Notes

- This is a **demo application** for learning purposes
- Uses localStorage for data (client-side only)
- No real authentication or backend
- Stock prices are randomly generated
- **Not suitable for production without proper backend integration**

## 🚧 Future Enhancements

- [ ] Real stock price API integration
- [ ] User registration and authentication
- [ ] Portfolio value tracking
- [ ] Buy/sell functionality
- [ ] Price alerts and notifications
- [ ] Dark mode toggle
- [ ] Export data to CSV
- [ ] More technical indicators (RSI, MACD, etc.)
- [ ] News feed integration
- [ ] Multiple time frame charts

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Your Name
- GitHub: [@Aditya41150](https://github.com/Aditya41150)
- Email: singhadi437@gmail.com 

## 🙏 Acknowledgments

- [Chart.js](https://www.chartjs.org/) - Beautiful charts library
- Stock price simulation inspired by real market behavior
- UI/UX design influenced by modern fintech applications

## 📞 Support

If you have any questions or run into issues, please:
- Open an issue on GitHub
- Contact me via email
- Check the documentation above

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

**Note:** This application uses simulated data for demonstration purposes. Stock prices are randomly generated and do not reflect real market data.
