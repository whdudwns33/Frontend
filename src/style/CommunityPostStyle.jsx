import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  width: 1000px;
  padding: 0px 21.6px 0px 36px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;
export const PostSection = styled.div`
  height: 1494.03px;
  align-self: stretch;
`;
export const Heading = styled.div`
  display: flex;
  width: 718.41px;
  padding-right: 614.04px;
  flex-direction: column;
  align-items: flex-start;
`;
export const HeadText = styled.p`
  width: 300px;
  max-width: 718.41px;
  color: #000;

  font-family: Inter;
  font-size: 21.6px;
  font-style: normal;
  font-weight: 700;
  line-height: 28.8px; /* 133.333% */
`;
export const HeadLine = styled.div`
  width: 100%;
  height: 2px;
  flex-shrink: 0;
  margin-bottom: 15px;
  border-top: 2px solid #66b9ff;
`;
export const Block = styled.div`
  display: flex;
  width: 718px;
  max-width: 718px;
  flex-direction: column;
  align-items: flex-start;
  gap: -15.61px;
`;
export const ButtonFlex = styled.div`
  display: flex;
  height: 68px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0px 7px;
  align-self: stretch;
  flex-wrap: wrap;
`;
export const ChoiceButton = styled.button`
  display: flex;
  height: 30px;
  padding: 0px 11px 0.5px 11px;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  border: 1px solid ${(props) => (props.selected ? "#000" : "#E6E6E6")};
  opacity: ${(props) => (props.selected ? 1 : "var(--, 1)")};
  background: ${(props) => (props.selected ? "#66b9ff" : "#FFF")};
  color: ${(props) => (props.selected ? "#fff" : "#000")};

  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.5px;
`;
export const PostUpTime = styled.div`
  display: flex;
  max-width: 718px;
  align-items: center;
  align-self: stretch;
`;
export const PostUpTimeList = styled.div`
  display: flex;
  max-width: 718px;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;
export const Swiper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;
export const SwiperWrapper = styled.div`
  display: block;
  height: 300px;
  padding-bottom: 0.1px;
  column-count: 2;
`;
export const SwiperSlide = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;
export const RoundedMd = styled.div`
  display: flex;
  padding: 7.2px;
  align-items: flex-start;
  gap: 28.8px;
  align-self: stretch;
  border-radius: 5.4px;
`;
export const PostRankList = styled.div`
  display: flex;
  max-width: 718px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  align-self: stretch;
`;
export const PostRankListItem = styled.div`
  display: flex;
  padding: 7.2px 155.88px 7.2px 7px;
  align-items: flex-start;
  align-self: stretch;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;
export const PostRankLink = styled.div`
  display: flex;
  margin-right: 10px;
  align-items: flex-start;
  align-self: stretch;
  color: #333;

  font-family: Inter;
  font-size: 12.6px;
  font-style: normal;
  font-weight: 700;
  line-height: 18.9px;
`;
export const PostRankCategory = styled.div`
  display: flex;
  height: 18.89px;
  padding-right: 5.2px;
  align-items: center;
  color: #999;

  font-family: Inter;
  font-size: 12.6px;
  font-style: normal;
  font-weight: 500;
  line-height: 18.9px;
`;
export const PostRankContent = styled.div`
  display: flex;
  padding-right: 5.2px;
  align-items: center;
  margin-left: 20px;
`;
export const PostRankFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #000;

  font-family: Inter;
  font-size: 12.6px;
  font-style: normal;
  font-weight: 500;
  line-height: 18.9px;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 3em;
  margin-bottom: 3em;
  width: 100%;
`;
export const SendButton = styled.button`
  position: absolute;
  right: 10px;
  top: 6.5px;
  border: none;
  background-color: transparent;
`;
export const PostBoarder = styled.input`
  display: flex;
  padding: 10px 13px;
  align-items: center;
  border-radius: 7.2px;
  border-top: 1px solid #fbf4f4;
  width: 100%;
  height: 100%;
  border-right: 1px solid #fbf4f4;

  border-bottom: 1px solid #fbf4f4;

  border-left: 1px solid #fbf4f4;

  opacity: 1;

  background: #fcf2f2;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
`;
export const PostListTitle = styled.div`
  display: flex;
  width: 718.41px;
  padding-right: 688.41px;
  align-items: flex-start;
`;
export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  color: #333;

  font-family: Inter;
  font-size: 16.2px;
  font-style: normal;
  font-weight: 700;
  line-height: 24.3px;
  width: 100px;
  padding: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const PostList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;
export const PostTable = styled.div`
  display: flex;
  padding: var(--, 1px) 0px 0.5px 0px;

  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
`;
export const TableHeader = styled.div`
  display: flex;
  padding: var(--, 1px) 0px 0.5px 0px;

  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  border-top: 2px solid #e6e6e6;

  opacity: var(--, 1);
`;
export const TableRow = styled.div`
  width: 100%;
  height: 38px;
  border-bottom: 1px solid #f5f5f5;
  opacity: var(--, 1);
  background: rgba(249, 53, 76, 0.04);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const TableNormalRow = styled.div`
  width: 100%;
  height: 4em;
  border-bottom: 1px solid #dadada;
  border-left: 1px solid #dadada;
  border-right: 1px solid #dadada;
  opacity: 1;
  display: flex;
  flex-direction: row;
`;
export const TableHeaderCell = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: var(--, 1px) 72.77px var(--, 1px) 14.39px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #999;

  font-family: Inter;
  font-size: 12.6px;
  font-style: normal;
  font-weight: 500;
  line-height: 3em;
`;
export const TableBody = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-top: 2px solid #e6e6e6;
  opacity: var(--, 1);
`;
export const TableRowData = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-align: center;
  overflow: hidden;
  font-family: Inter;
  font-size: 12.6px;
  font-style: normal;
  font-weight: 400;
  line-height: 3em;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const TableRowDataIcon = styled(TableRowData)`
  flex: 0.3;
`;
export const TableRowDataWriter = styled(TableRowData)`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const TableRowDataTitle = styled(TableRowData)`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const TableRowDataDate = styled(TableRowData)`
  color: #999;
  flex: 0.5;
`;

export const TableRowDataViews = styled(TableRowData)`
  flex: 0.5;
`;
export const PostPage = styled.div`
  display: flex;
  padding: 28.8px 206.23px 28.8px 206.2px;
  justify-content: center;
  align-items: center;
  gap: 9px;
  align-self: stretch;
  opacity: var(--, 1);
`;
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 7.19px;
  opacity: var(--, 1);
`;
export const PageContant = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: #008bff;

  font-family: Inter;
  font-size: 11.7px;
  font-style: normal;
  font-weight: 500;
  line-height: 17.55px;
`;
export const MiddlePage = styled.div`
  display: flex;
  padding-right: 0.02px;
  justify-content: center;
  align-items: flex-start;
  gap: 10.79px;
  opacity: var(--, 1);
  flex-direction: row;
`;
export const Page = styled.a`
  display: flex;
  padding-right: 0.52px;
  flex-direction: column;
  align-items: flex-start;
  color: ${(props) => (props.selected ? "#000" : "#C4C4C4")};
  font-family: Inter;
  font-size: 12.6px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
`;
