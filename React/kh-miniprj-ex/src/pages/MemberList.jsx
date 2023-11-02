// 회원 정보 리스
import { useState, useEffect } from "react";
import AxiosApi from "../api/AxiosApi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 40px;
`;

const MemberInfoWrapper = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  flex: 1;
  min-width: 240px;
  background-color: antiquewhite;
`;

const MemberId = styled.p`
  font-weight: bold;
`;

const MemberName = styled.p`
  font-style: italic;
`;

const MemberEmail = styled.p`
  color: #555;
`;

const MemberJoinDate = styled.p`
  font-size: 0.8rem;
  color: #777;
`;

export const MemberList = () => {
  const navigate = useNavigate();
  const [memberList, setMemberList] = useState("");
  const isLogin = window.localStorage.getItem("isLogin");
  if (isLogin !== "TRUE") navigate("/");

  useEffect(() => {
    const memberList = async () => {
      try {
        // ALL 은 전체 조회
        const resp = await AxiosApi.memberList("ALL");
        if (resp.status == 200) {
          setMemberList(resp.data);
          console.log(resp.data);
        }
      } catch (e) {
        console.log(e);
        console.log("오류");
      }
    };
    memberList();
  }, []);
  const onClickMember = (id) => {
    console.log("onClcik memberid : " + id);
  };

  return (
    <di>
      <Container>
        {memberList &&
          memberList.map((member) => (
            <MemberInfoWrapper
              key={member.id}
              onCLick={() => onClickMember(member.id)}
            >
              <MemberId>ID : {member.id}</MemberId>
              <MemberId>이름 : {member.name}</MemberId>
              <MemberId>Email : {member.email}</MemberId>
              <MemberId>JOIN DATE : {member.join}</MemberId>
            </MemberInfoWrapper>
          ))}
      </Container>
    </di>
  );
};
