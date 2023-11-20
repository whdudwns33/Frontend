import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [stockPrice, setStockPrice] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8111/api/finance/stockPrice"
        );
        console.log("불려 왔는지?");
        setStockPrice(response.data);
      } catch (error) {
        console.error("Error fetching stock price:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Stock Price</h1>
      <p>{stockPrice}</p>
    </div>
  );
}

export default App;
