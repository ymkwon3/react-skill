import React from "react";
import WordCard from "./WordCard";
import {
  WordWrap,
  AddIcon,
  SearchIcon,
  SearchDiv,
  SearchInput,
} from "../Styled";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadWordFB, searchWordFB } from "../redux/modules/wordModule";

const Words = () => {
  const [cursor, setCursor] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector(state => state.wordModule.words);
  const lastValue = useSelector(state => state.wordModule.lastValue);
  const isSearch = useSelector(state => state.wordModule.isSearch);
  const searchRef = React.useRef(null);

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

  const searchClick = () => {
    dispatch(searchWordFB(searchRef.current.value));
  }

  window.onkeydown = e => e.key == "Enter" ? searchClick() : null;

  return (
    <>
      <SearchDiv>
        <SearchIcon className="search-icon" size={30} />
        <SearchInput
          ref={searchRef}
          placeholder=" "
          autoComplete="none"
        ></SearchInput>
      </SearchDiv>

      <WordWrap className="flex-row-start">
        {selector.map((v, i) => {
          const isLast = i === selector.length - 1;
          return (
            <WordCard key={v.term} value={v} ref={isLast && !isSearch ? setCursor : null} />
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
