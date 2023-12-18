import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { ReactComponent as SvgS } from "../images/music-svgrepo-com.svg";
import { ReactComponent as Menu } from "../images/Menu.svg";
// import { ReactComponent as Heart } from "../images/Heart.svg";
// import { ReactComponent as Clip } from "../images/Clip.svg";
// import { ReactComponent as User } from "../images/User.svg";
// import { ReactComponent as Logo } from "../images/Symbol_color@300x.svg";
import { ReactComponent as Down } from "../images/Down.svg";
import { ReactComponent as Talk } from "../images/Talk.svg";
import { ReactComponent as Star } from "../images/Star.svg";

import {
  Aside,
  CommunityContainer,
  CommunityDashboard,
  CommunityProfileFrame,
  CommunityList,
  CommunityMenuList,
  CommunityProfilePart,
  CommunityProfile,
  CommunityProfileImg,
  Container,
  Hidden,
  Note,
  Page,
  Section,
  TextCenter,
  TextLog,
  TextFrame,
  Title,
  DashboardButton,
  DashboardButtonFrame,
  CommunityMenuItem,
  CommunityLink,
  CommunitySVG,
  CommunityMenuText,
  CommunityMenuButton,
  CommunityItem,
  CommunityItemList,
  MessageBox,
} from "../style/CommunityStyle";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CommunityComponent from "../conponent/community/CommunityComponent";
import WriteComponent from "../conponent/community/CommunityWriteComponent";
import Post from "../conponent/community/PostRoomComponent";
import AxiosApi from "../axios/CommunityAxios";
import Common from "../utils/common";
import useWebSocket from "../context/useWebsocket";

const CommunityPage = () => {
  const [isList, setIsList] = useState(false);
  const [categories, setCategories] = useState([]);
  const [email, setEmail] = useState("");
  const { message: wsMessage } = useWebSocket(Common.SOCKET_URL, email);

  const ListOpen = () => {
    setIsList(!isList);
  };
  const RotatedDown = styled(Down)`
    transition: transform 0.3s ease-in-out;
    transform: ${(props) =>
      props.isRotated ? "rotate(180deg)" : "rotate(0deg)"};
  `;

  useEffect(() => {
    const getCategories = async () => {
      try {
        const rsp = await AxiosApi.cateList();
        console.log(rsp.data);
        setCategories(rsp.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <>
      <Router>
        <Page>
          <Hidden>
            <Container>
              <Section>
                <Title>음악을 사랑하는 여러분의 의견을 나눠주세요.</Title>
                <Note>
                  <SvgS />
                </Note>
              </Section>
            </Container>
            <CommunityContainer>
              <CommunityList>
                <Aside>
                  <CommunityDashboard>
                    <CommunityProfile>
                      <CommunityProfileFrame>
                        <CommunityProfilePart></CommunityProfilePart>
                      </CommunityProfileFrame>
                      <CommunityProfileImg />
                    </CommunityProfile>
                    <TextCenter>
                      <TextFrame>
                        <TextLog>로그인 후 더 편하게 이용해 보세요</TextLog>
                      </TextFrame>
                    </TextCenter>
                    <DashboardButtonFrame>
                      <DashboardButton>로그인 / 회원가입</DashboardButton>
                    </DashboardButtonFrame>
                  </CommunityDashboard>
                  <CommunityMenuList>
                    <CommunityMenuItem>
                      <Link to="/">
                        <CommunityLink>
                          <CommunitySVG>
                            <Menu />
                            <CommunityItem>
                              <CommunityMenuText>전체 게시판</CommunityMenuText>
                            </CommunityItem>
                          </CommunitySVG>
                        </CommunityLink>
                      </Link>

                      <CommunityLink>
                        <CommunityMenuButton>
                          <Talk />
                          <CommunityItem onClick={ListOpen}>
                            <CommunityMenuText>일반 커뮤니티</CommunityMenuText>
                          </CommunityItem>
                          <RotatedDown isRotated={isList}></RotatedDown>
                        </CommunityMenuButton>
                      </CommunityLink>
                      {isList && (
                        <CommunityItemList>
                          {categories.map((category) => (
                            <Link
                              to={`/community/${category.categoryId}`}
                              key={category.categoryId}
                            >
                              <CommunityLink key={category.categoryId}>
                                <CommunityItem>
                                  <CommunityMenuText>
                                    {category.categoryName} 게시판
                                  </CommunityMenuText>
                                  <Star />
                                </CommunityItem>
                              </CommunityLink>
                            </Link>
                          ))}
                        </CommunityItemList>
                      )}
                    </CommunityMenuItem>
                  </CommunityMenuList>
                </Aside>
                <Routes>
                  <Route path="/" element={<CommunityComponent />} />
                  <Route
                    path="/community/:categoryId"
                    element={<CommunityComponent />}
                  />
                  <Route path="/community/detail/:id" element={<Post />} />
                  <Route path="/community/write" element={<WriteComponent />} />
                </Routes>
              </CommunityList>
              {wsMessage && (
                <MessageBox key={wsMessage}>{wsMessage}</MessageBox>
              )}
            </CommunityContainer>
          </Hidden>
        </Page>
      </Router>
    </>
  );
};

export default CommunityPage;
