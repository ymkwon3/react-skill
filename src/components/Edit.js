import React from "react";
import { InputContainer } from "../Styled";
import { addWordFB, loadWordFB } from "../redux/modules/wordModule";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Edit = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const input_ref = React.useRef([]);
  const id = useParams().id;
  dispatch(loadWordFB());
  const term_data = useSelector(state => state.wordModule.words).get(id);

  React.useEffect(() => {
    input_ref.current[0].value = term_data[0];
    input_ref.current[1].value = term_data[1];
    input_ref.current[2].value = term_data[2];
  }, []);


  const save = () => {
    const term = input_ref.current[0].value;
    const mean = input_ref.current[1].value;
    const link = input_ref.current[2].value;
    if (!term || !mean || !link) {
      alert("빈칸채워줘잉");
      return;
    }
    dispatch(addWordFB(term, mean, link, term_data[3]));
    navigate(-1);
  };

  return (
    <InputContainer className="flex-column-center">
      <h1>수정하기</h1>
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
      <button onClick={save}>저장하기</button>
    </InputContainer>
  );
};

export default Edit;
