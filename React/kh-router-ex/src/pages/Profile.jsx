import { useParams } from "react-router-dom";

const data = {
  frontEnd: {
    name: "이름1",
    description: "정보1",
  },
  backEnd: {
    name: "이름2",
    description: "정보2",
  },
  dataBase: {
    name: "이름3",
    description: "정보3",
  },
};

const Profile = () => {
  // 리액트 라우터에서 URL 파라미터 값을 가져오기 위한 HOOK
  const params = useParams();
  // userName은 호출하는 페이지에서 지정한 유동적인 값으로 대체되어 컴포넌트에 전달
  const profile = data[params.userName];
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않습니다.</p>
      )}
    </div>
  );
};

export default Profile;
