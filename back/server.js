const express = require('express');
const cors = require('cors');
const axios = require('axios');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const port = process.env.PORT || 11003; // Utilisez le même port pour le serveur HTTP et le serveur WebSocket

app.use(express.json());
app.use(cors());

// Créer le serveur HTTP
const server = http.createServer(app);

// Créer le serveur WebSocket en utilisant le même serveur HTTP et le même port
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Nouvelle connexion WebSocket');
    ws.on('close', () => {
        console.log('Connexion WebSocket fermée');
    });
});

const apiKey = '422b67ada252e9771ef77e13b5f220c551d1861649895ec3d42fabf7741534ef';

app.get('/api_back/cryptos/top-trending', async (req, res) => {
  try {
    const response = await axios.get('https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?tsym=USD', {
        params: {
            apikey: apiKey,
        },
    });

    const topTrendingCryptos = response.data.Data.map(crypto => ({
        image: `https://www.cryptocompare.com${crypto.CoinInfo.ImageUrl}`,
        name: crypto.CoinInfo.FullName,
        symbol: crypto.CoinInfo.Name,
        price: crypto.DISPLAY.USD.PRICE,
        marketperformance: crypto.DISPLAY.USD.TOPTIERVOLUME24HOUR,
    }));

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: 'topTrendingUpdate', payload: topTrendingCryptos }));
        }
    });

    res.json(topTrendingCryptos);
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error.response ? error.response.data : error.message);
    res.status(error.response ? error.response.status : 500).json({ error: 'Erreur lors de la récupération des données' });
  }
});

app.get('/api_back/cryptos/top-gainers', async (req, res) => {
  try {
    const response = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?tsym=USD', {
      params: {
        apikey: apiKey,
      },
    });

    const topGainersCryptos = response.data.Data.map(crypto => ({
        image: `https://www.cryptocompare.com${crypto.CoinInfo.ImageUrl}`,
        name: crypto.CoinInfo.FullName,
        symbol: crypto.CoinInfo.Name,
        price: crypto.DISPLAY.USD.PRICE,
        market_cap: crypto.DISPLAY.USD.MKTCAP,
    }));

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: 'topGainersUpdate', payload: topGainersCryptos }));
        }
    });

    res.json(topGainersCryptos);
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error.response ? error.response.data : error.message);
    res.status(error.response ? error.response.status : 500).json({ error: 'Erreur lors de la récupération des données' });
  }
});

app.get('/api_back/cryptos/total-mining', async (req, res) => {
    try {
    const response = await axios.get('https://min-api.cryptocompare.com/data/blockchain/mining/calculator?fsyms=BTC,ETH,ZEC&tsyms=USD', {
        params: {
        apikey: apiKey,
        },
    });

    const data = response.data.Data;

    const totalMiningCryptos = Object.keys(data).map(key => {
        const crypto = data[key];
        return {
        image: `https://www.cryptocompare.com${crypto.CoinInfo.ImageUrl}`,
        name: crypto.CoinInfo.FullName,
        symbol: crypto.CoinInfo.Name,
        totalmining: crypto.CoinInfo.TotalCoinsMined,
        blockreward: crypto.CoinInfo.BlockReward,
        };
    });

    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: 'totalMiningUpdate', payload: totalMiningCryptos }));
        }
    });
  
    res.json(totalMiningCryptos);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error.response ? error.response.data : error.message);
      res.status(error.response ? error.response.status : 500).json({ error: 'Erreur lors de la récupération des données' });
    }
});

app.get('/api_back/cryptos/all-cryptocurrency', async (req, res) => {
    try {
        const page = req.query.page || 1; // Commence à partir de zéro
        const response = await axios.get(`https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?tsym=USD&assetClass=ALL&page=${page - 1}`, {
            params: {
                apikey: apiKey,
            },
        });

        const data = response.data.Data;

        const allCurrencyCryptos = Object.keys(data).map(key => {
            const crypto = data[key];
            return {
                rank: crypto.CoinInfo?.Rating?.Weiss?.Rating || 'N/A',
                image: `https://www.cryptocompare.com${crypto.CoinInfo?.ImageUrl || ''}`,
                symbol: crypto.CoinInfo?.Name || 'N/A',
                fullname: crypto.CoinInfo?.FullName || 'N/A',
                rating: crypto.CoinInfo?.Rating?.Weiss?.MarketPerformanceRating || 'N/A',
                marketperformance: crypto.CoinInfo?.Rating?.Weiss?.MarketPerformanceRating || 'N/A',
                maxsupply: crypto.CoinInfo?.MaxSupply || 'N/A',
                top24h: crypto.RAW?.USD?.TOPTIERVOLUME24HOUR || 'N/A',
                price: crypto.RAW?.USD?.PRICE || 'N/A',
                lastvolume: crypto.RAW?.USD?.LASTVOLUME || 'N/A',
                volumehour: crypto.RAW?.USD?.VOLUMEHOUR || 'N/A',
                volumeday: crypto.RAW?.USD?.VOLUMEDAY || 'N/A',
                volume24h: crypto.RAW?.USD?.VOLUME24HOUR || 'N/A',
            };            
        });

        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ type: 'allCurrencyUpdate', payload: allCurrencyCryptos }));
            }
        });

        res.json(allCurrencyCryptos);
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).json({ error: 'Erreur lors de la récupération des données' });
    }
});

app.get('/api_back/cryptos/all-exchanges', async (req, res) => {
    try {
        const response = await axios.get('https://min-api.cryptocompare.com/data/exchanges/general', {
            params: {
                apikey: apiKey,
            },
        });

        const data = response.data.Data;

        const allExchangesCryptos = Object.values(data).map(exchange => {
            return {
                image: `https://www.cryptocompare.com${exchange.LogoUrl}`,
                link: exchange.AffiliateURL,
                name: exchange.Name,
                gradepoint: exchange.GradePoints,
                marketquality: exchange.GradePointsSplit.MarketQuality,
                negativereport: exchange.GradePointsSplit.NegativeReportsPenalty,
                country: exchange.Country,
                volume24h: exchange.TOTALVOLUME24H,
                rating: {
                    one: exchange.Rating.One,
                    two: exchange.Rating.Two,
                    three: exchange.Rating.Three,
                    four: exchange.Rating.Four,
                    five: exchange.Rating.Five,
                    avg: exchange.Rating.Avg,
                    totalUsers: exchange.Rating.TotalUsers,
                },
            };
        });

        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ type: 'allExchangesUpdate', payload: allExchangesCryptos }));
            }
        });

        res.json(allExchangesCryptos);
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).json({ error: 'Erreur lors de la récupération des données' });
    }
});


// Démarrer le serveur sur le port spécifié
server.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});