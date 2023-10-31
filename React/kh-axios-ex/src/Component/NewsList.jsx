import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItems";
import Loading from "./Loading";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100px;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  // 마운트 될 때, fetchData 함수 실행.
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "all" : `category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&${query}&apiKey=8f0c6b5217ba47358adc56869bc31e11`
        );
        if (response.data.status === "ok") setArticles(response.data.articles);
      } catch (e) {
        console.log("실패했습니다.");
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);
  if (loading) {
    return <Loading />;
  }
  return (
    <NewsListBlock>
      {articles &&
        articles.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
    </NewsListBlock>
  );
};

export default NewsList;
