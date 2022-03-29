import React from "react";
import { InputContainer } from "../Styled";
import { addWordFB } from "../redux/modules/wordModule";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const input_ref = React.useRef([]);

  const save = () => {
    const term = input_ref.current[0].value;
    const mean = input_ref.current[1].value;
    const link = input_ref.current[2].value;
    if (!term || !mean || !link) {
      alert("빈칸채워줘잉");
      return;
    }
    dispatch(addWordFB({ term: term, mean: mean, link: link, checked: false }));
    navigate(-1);
  };

  return (
    <InputContainer className="flex-column-center">
      <h1>추가하기</h1>
      <div className="input-box">
        <input
          id="input-term"
          type="text"
          placeholder=" "
          autoComplete="off"
          ref={el => (input_ref.current[0] = el)}
        ></input>
        <label>용어</label>
      </div>
      <div className="input-box">
        <input
          id="input-mean"
          type="text"
          placeholder=" "
          autoComplete="off"
          ref={el => (input_ref.current[1] = el)}
        ></input>
        <label>의미</label>
      </div>
      <div className="input-box">
        <input
          id="input-link"
          type="text"
          placeholder=" "
          autoComplete="off"
          ref={el => (input_ref.current[2] = el)}
        ></input>
        <label>링크</label>
      </div>
      <div className="flex-row-center">
        <button onClick={() => navigate(-1)}>취소하기</button>
        <button onClick={save}>저장하기</button>
      </div>
    </InputContainer>
  );
};

export default Add;
