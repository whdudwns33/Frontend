import { useRef } from "react";

const CreateRef = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  return (
    <div>
      <input disabled type="text" ref={inputRef} />
      <button onClick={handleFocus}>활성화</button>
    </div>
  );
};

export default CreateRef;
