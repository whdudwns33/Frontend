import "./App.css";

function User(props) {
  return (
    <div>
      <b>{props.user.userName}</b> <span>{props.user.email}</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 100,
      userName: "천지훈",
      email: "1000won@gmail.com",
    },
    {
      id: 200,
      userName: "백마리",
      email: "2000won@gmial.com",
    },
    {
      id: 300,
      userName: "서민혁",
      email: "3000won@gmail.com",
    },
  ];

  const seasons = ["봄", "여름", "가을", "겨울"];
  const newSeason = seasons.map((e, index) => <li key={index}>{e}</li>);

  return (
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
      <h1>계절</h1>
      <ul>{newSeason}</ul>
    </div>
  );
}
export default UserList;
