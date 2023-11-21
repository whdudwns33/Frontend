// src/components/StockInfo.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockInfo = () => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = '93ygBG2ROlVwZl8BzJUYvwWY5fOrgooaU1K2GenQm6PMz4kRMOMZCg7YaJwIFWiH6ngPLncpxnIq2lbm1ISJCg%3D%3D'; // 여기에 발급받은 API 키를 입력하세요
      const apiUrl = 'http://apis.data.go.kr/1160100/service/GetStockPriceInfoService';
      const queryParams = `?serviceKey=${apiKey}&numOfRows=10&pageNo=1`; // 예시 파라미터

      try {
        const response = await axios.get(apiUrl + queryParams);
        setStockData(response.data.response.body.items.item); // 여기에서 데이터를 적절히 가공하여 저장
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Stock Information</h2>
      {stockData ? (
        // 여기에서 데이터를 표시하는 로직 추가
        <pre>{JSON.stringify(stockData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StockInfo;
