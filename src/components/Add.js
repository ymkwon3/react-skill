import React from "react";
import { InputContainer } from "../Styled";
import { addWordFB } from "../redux/modules/wordModule";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Add = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const input_ref = React.useRef([]);

  const save = () => {
    dispatch(
      addWordFB(
        input_ref.current[0].value,
        input_ref.current[1].value,
        input_ref.current[2].value
      )
    );
    navigate(-1);
  };

  return (
    <InputContainer className="flex-column-center">
      <h2>추가하기</h2>
      <div className="input-box">
        <input
          id="input-term"
          type="text"
          placeholder=" "
          ref={el => (input_ref.current[0] = el)}
        ></input>
        <label>용어</label>
      </div>
      <div className="input-box">
        <input
          id="input-mean"
          type="text"
          placeholder=" "
          ref={el => (input_ref.current[1] = el)}
        ></input>
        <label>의미</label>
      </div>
      <div className="input-box">
        <input
          id="input-link"
          type="text"
          placeholder=" "
          ref={el => (input_ref.current[2] = el)}
        ></input>
        <label>링크</label>
      </div>
      <button onClick={save}>저장하기</button>
    </InputContainer>
  );
};

export default Add;
