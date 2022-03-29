import React from "react";
import WordCard from "./WordCard";
import { WordWrap, AddIcon } from "../Styled";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadWordFB } from "../redux/modules/wordModule";

const Words = () => {
  const [cursor, setCursor] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector(state => state.wordModule.words);
  const lastValue = useSelector(state => state.wordModule.lastValue);

  React.useEffect(() => {
    dispatch(loadWordFB(null));
  }, []);

  const intersectCallBack = async ([entry], observer) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      dispatch(loadWordFB(lastValue));
      observer.unobserve(entry.target);
    }
  };

  React.useEffect(() => {
    let observer;
    if (cursor) {
      observer = new IntersectionObserver(intersectCallBack, {
        threshold: 1,
      }).observe(cursor);
    }
    return () => observer && observer.disconnect();
  }, [cursor]);

  return (
    <>
      <WordWrap className="flex-row-start">
        {selector.map((v, i) => {
          const isLast = i === selector.length - 1;
          return (
            <WordCard key={v.term} value={v} ref={isLast ? setCursor : null} />
          );
        })}
      </WordWrap>
      <AddIcon
        className="hoverEvent"
        size={80}
        onClick={() => navigate("/word")}
      ></AddIcon>
    </>
  );
};

export default Words;
