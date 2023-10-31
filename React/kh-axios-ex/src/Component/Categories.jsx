import styled, { css } from "styled-components";
const categories = [
  {
    name: "all",
    text: "전체 보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertaiment",
    text: "엔터테이먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.125em;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }
  ${(props) =>
    props.active &&
    css`
    font-weight: 600;
    border-bottom: 2px solid #22bbcf;
    color: #22b8
    &: hover {
        color: red;
    }
  `}
  // 항목과 항목 사이에 효과 삽입
  & + & {
    margin-left: 1rem;
  }
`;

// 카테고리스의 맵을 돌면서 이름을 참고하여 각각의 이름을 key 값에 넣고
const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
      ;
    </CategoriesBlock>
  );
};

export default Categories;
