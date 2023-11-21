import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [stockPrice, setStockPrice] = useState(null);

  useEffect(() => {
    // 서버에서 주식 가격 데이터 가져오기
    fetchStockPrice();
  }, []);

  const fetchStockPrice = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/stock/price"); // 서버의 엔드포인트로 수정
      const data = response.data;
      console.log(data);
      // 가져온 데이터를 상태에 설정
      setStockPrice(data.price);
    } catch (error) {
      console.error("Error fetching stock price:", error);
    }
  };

  return (
    <div>
      <h1>네이버 주식 가격</h1>
      {stockPrice !== null ? (
        <p>현재 가격: {stockPrice} 원</p>
      ) : (
        <p>가격을 불러오는 중...</p>
      )}
    </div>
  );
};

export default App;
