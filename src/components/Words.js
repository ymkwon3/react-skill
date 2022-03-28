import React from "react";
import WordCard from "./WordCard";
import { WordWrap, AddIcon } from "../Styled";
import { BsPatchPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadWordFB } from "../redux/modules/wordModule";

const Words = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector(state => state.wordModule.words);

  React.useEffect(() => {
    dispatch(loadWordFB());
  }, []);

  return (
    <>
      <WordWrap className="flex-row-start">
        {selector.map((v, i) => (
          <WordCard key={v.term} value={v}></WordCard>
        ))}
      </WordWrap>
      <AddIcon
        className="bsPatchPlusFill hoverEvent"
        size={80}
        onClick={() => navigate("/word")}
      ></AddIcon>
    </>
  );
};

export default Words;
