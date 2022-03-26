import React from "react";
import WordCard from "./WordCard";
import { WordWrap } from "../Styled";
import { BsPatchPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadWordFB } from "../redux/modules/wordModule";

const Words = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = Array.from(useSelector(state => state.wordModule.words));

  React.useEffect(() => {
    dispatch(loadWordFB());
  }, []);

  return (
    <>
      <WordWrap className="flex-row-start">
        {selector.map((v, i) => (
          <WordCard key={v[0]} value={v[1]}></WordCard>
        ))}
      </WordWrap>
      <BsPatchPlusFill
        className="bsPatchPlusFill hoverEvent"
        size={80}
        color={"#ff6e60"}
        onClick={() => navigate("/word")}
      ></BsPatchPlusFill>
    </>
  );
};

export default Words;
