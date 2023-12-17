// BitcoinPriceChart.js
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import "../style/crypto.css";
import bitcoin from "../sources/bitcoin.png";

const Crypto = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily'
        );

        if (response.data && response.data.prices) {
          const formattedData = response.data.prices.map((priceData) => ({
            date: new Date(priceData[0]),
            price: priceData[1],
          }));

          setChartData(formattedData);
        } else {
          console.error('Response or prices data is undefined:', response.data);
        }
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
      }
    };

    fetchBitcoinData();
  }, []);

  return (
    <div className="bitcoin-chart-card">
      <div className="bitcoin-chart-header">
        <img src={bitcoin} alt="Bitcoin Icon" className="bitcoin-icon" />
        <h2>Bitcoin Prices</h2>
      </div>
      <div className="bitcoin-chart-body">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData} margin={{ top: 5, right: 0, left:0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend content={() => null} />
            <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8, fill: 'red' }} name="" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Crypto;
