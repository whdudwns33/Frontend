import NewsList from "../Component/NewsList";
import Categories from "../Component/Categories";
import { useState, useCallback } from "react";

const News = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => {
    setCategory(category);
  }, []);
  return (
    <div>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </div>
  );
};

export default News;
