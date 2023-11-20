// 회원 정보 조회 및 수정
import { useParams } from "react-router-dom";
import { useState } from "react";
import { storage } from "../api/firebase";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const FileUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
`;

const UploadButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const UserImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  margin-top: 20px;
`;

const data = {
  frontend: {
    name: "곰돌이사육사",
    description: "리액트를 좋아하는 개발자",
  },
  backend: {
    name: "달빛사냥꾼",
    description: "스프링 부트를 좋아하는 개발자",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadClick = () => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("File uploaded successfully!");
      fileRef.getDownloadURL().then((url) => {
        console.log("저장경로 확인 : " + url);
        setUrl(url);
      });
    });
  };

  return (
    <Container>
      <h1>사용자 프로필</h1>
      {profile ? (
        <ProfileInfo>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </ProfileInfo>
      ) : (
        <p>존재하지 않는 프로필 입니다.</p>
      )}
      <FileUploadContainer>
        <StyledInput type="file" onChange={handleFileInputChange} />
        <UploadButton onClick={handleUploadClick}>Upload</UploadButton>
      </FileUploadContainer>
      {url && <UserImage src={url} alt="uploaded" />}
      <p>사진 경로 : {url}</p>
    </Container>
  );
};

export default Profile;
