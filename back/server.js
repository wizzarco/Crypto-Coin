const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 11003;

app.use(express.json());
app.use(cors());

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
                rank: crypto.Rating,
                image: `https://www.cryptocompare.com${crypto.CoinInfo.ImageUrl}`,
                symbol: crypto.CoinInfo.Name,
                fullname: crypto.CoinInfo.FullName,
                rating: crypto.CoinInfo.MarketPerformanceRating,
                marketperformance: crypto.CoinInfo.MarketPerformanceRating,
                maxsupply: crypto.CoinInfo.MaxSupply,
                top24h: crypto.DISPLAY.USD.TOPTIERVOLUME24HOUR,
                price: crypto.DISPLAY.USD.PRICE,
                lastvolume: crypto.DISPLAY.USD.LASTVOLUME,
                volumehour: crypto.DISPLAY.USD.VOLUMEHOUR,
                volumeday: crypto.DISPLAY.USD.VOLUMEDAY,
                volume24h: crypto.DISPLAY.USD.VOLUME24HOUR,
            };
        });

        res.json(allCurrencyCryptos);
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).json({ error: 'Erreur lors de la récupération des données' });
    }
});
  
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});
