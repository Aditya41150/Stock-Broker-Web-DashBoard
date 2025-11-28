const stocks = ['GOOG', 'TSLA', 'AMZN', 'META', 'NVDA'];
const stockData = {
    GOOG: { name: 'Google', basePrice: 140 },
    TSLA: { name: 'Tesla', basePrice: 245 },
    AMZN: { name: 'Amazon', basePrice: 175 },
    META: { name: 'Meta', basePrice: 485 },
    NVDA: { name: 'Nvidia', basePrice: 495 }
};

let user = null;
let subs = [];
let prices = {};
let history = {};
let chartObjs = {};
let timer = null;

stocks.forEach(ticker => {
    prices[ticker] = stockData[ticker].basePrice;
});

function login() {
    const email = document.getElementById('email').value.trim();
    if (email && email.includes('@')) {
        user = email;
        document.getElementById('userEmail').textContent = email;
        
        const saved = localStorage.getItem(`subs_${email}`);
        if (saved) {
            subs = JSON.parse(saved);
        }

        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        
        renderStocks();
        startUpdates();
    }
}

function logout() {
    if (user) {
        localStorage.setItem(`subs_${user}`, JSON.stringify(subs));
    }
    
    stopUpdates();
    user = null;
    subs = [];
    history = {};
    chartObjs = {};
    
    document.getElementById('email').value = '';
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('dashboard').style.display = 'none';
}

function startUpdates() {
    timer = setInterval(() => {
        Object.keys(prices).forEach(ticker => {
            const change = (Math.random() - 0.5) * 10;
            prices[ticker] = Math.max(1, prices[ticker] + change);
        });

        subs.forEach(ticker => {
            if (!history[ticker]) {
                history[ticker] = [];
            }
            history[ticker].push({
                time: new Date().toLocaleTimeString(),
                price: prices[ticker]
            });
            if (history[ticker].length > 20) {
                history[ticker].shift();
            }
        });

        updateDisplay();
    }, 1000);
}

function stopUpdates() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function openModal() {
    const modal = document.getElementById('modal');
    const opts = document.getElementById('stockOptions');
    
    opts.innerHTML = '';
    stocks.forEach(ticker => {
        const subscribed = subs.includes(ticker);
        const div = document.createElement('div');
        div.className = `stock-option ${subscribed ? 'disabled' : ''}`;
        div.innerHTML = `
            <h3>${ticker}</h3>
            <p>${stockData[ticker].name}</p>
        `;
        if (!subscribed) {
            div.onclick = () => addStock(ticker);
        }
        opts.appendChild(div);
    });
    
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function addStock(ticker) {
    if (!subs.includes(ticker)) {
        subs.push(ticker);
        localStorage.setItem(`subs_${user}`, JSON.stringify(subs));
        history[ticker] = [];
        renderStocks();
    }
    closeModal();
}

function removeStock(ticker) {
    subs = subs.filter(t => t !== ticker);
    localStorage.setItem(`subs_${user}`, JSON.stringify(subs));
    delete history[ticker];
    if (chartObjs[ticker]) {
        chartObjs[ticker].destroy();
        delete chartObjs[ticker];
    }
    renderStocks();
}

function renderStocks() {
    const empty = document.getElementById('emptyState');
    const grid = document.getElementById('stockGrid');
    
    if (subs.length === 0) {
        empty.style.display = 'block';
        grid.innerHTML = '';
        return;
    }
    
    empty.style.display = 'none';
    grid.innerHTML = '';
    
    subs.forEach(ticker => {
        const card = document.createElement('div');
        card.className = 'stock-card';
        card.id = `stock-${ticker}`;
        
        const p = prices[ticker].toFixed(2);
        
        card.innerHTML = `
            <div class="stock-header">
                <div class="stock-info">
                    <h2>${ticker}</h2>
                    <p>${stockData[ticker].name}</p>
                </div>
                <div class="stock-price">
                    <div class="price">$<span id="price-${ticker}">${p}</span></div>
                    <div class="change" id="change-${ticker}">
                        <span>📊</span>
                        <span>$0.00</span>
                    </div>
                </div>
                <button class="remove-btn" onclick="removeStock('${ticker}')">✕</button>
            </div>
            <div class="chart-container">
                <canvas id="chart-${ticker}"></canvas>
            </div>
        `;
        
        grid.appendChild(card);
        
        const ctx = document.getElementById(`chart-${ticker}`).getContext('2d');
        chartObjs[ticker] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Price',
                    data: [],
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: { color: '#f3f4f6' }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    });
}

function updateDisplay() {
    subs.forEach(ticker => {
        const h = history[ticker] || [];
        const p = prices[ticker];
        
        const priceEl = document.getElementById(`price-${ticker}`);
        if (priceEl) {
            priceEl.textContent = p.toFixed(2);
        }
        
        const changeEl = document.getElementById(`change-${ticker}`);
        if (changeEl && h.length >= 2) {
            const diff = h[h.length - 1].price - h[h.length - 2].price;
            const up = diff >= 0;
            changeEl.className = `change ${up ? 'positive' : 'negative'}`;
            changeEl.innerHTML = `
                <span>${up ? '📈' : '📉'}</span>
                <span>${up ? '+' : ''}${diff.toFixed(2)}</span>
            `;
        }
        
        if (chartObjs[ticker] && h.length > 0) {
            chartObjs[ticker].data.labels = h.map(item => item.time);
            chartObjs[ticker].data.datasets[0].data = h.map(item => item.price);
            
            const lastDiff = h.length >= 2 ? 
                h[h.length - 1].price - h[h.length - 2].price : 0;
            chartObjs[ticker].data.datasets[0].borderColor = lastDiff >= 0 ? '#10b981' : '#ef4444';
            
            chartObjs[ticker].update('none');
        }
    });
}

document.getElementById('email').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') login();
});

document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') closeModal();
});
