import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([
    { id: 1, text: "연습1" },
    { id: 2, text: "연습2" },
    { id: 3, text: "연습3" },
    { id: 4, text: "연습4" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const onChange = (e) => setInputText(e.target.value); // 내용이 입력될 때 변경 감지
  // 버튼을 눌러졌을 때, 새로운 TODO 리스트 추가
  const onClick = () => {
    const nextTodo = todo.concat({ id: nextId, text: inputText });
    setNextId(nextId + 1);
    setTodo(nextTodo); // 새로운 todo 리스트 반영하고 리렌더링
    setInputText("");
  };

  const onRemove = (id) => {
    const removeTodo = todo.filter((e) => e.id !== id);
    setTodo(removeTodo);
  };

  const TodoList = todo.map((e) => (
    <li key={e.id} onDoubleClick={() => onRemove(e.id)}>
      {e.text}
    </li>
  ));

  //   const Reset = (todo) => { setTodo(todo) }
  return (
    <div>
      <p className="title-name">할일 목록</p>
      <p className="del-guide">삭제는 해당 항목을 더블클릭</p>

      <input type="text" value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{TodoList}</ul>
    </div>
  );
};

export default TodoList;
