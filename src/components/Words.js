import React from "react";
import WordCard from "./WordCard";
import { WordWrap } from "../Styled";
import { BsPatchPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";

const Words = () => {
  const navigate = useNavigate();
  return (
    <>
      <WordWrap className="flex-row-start">
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
        <WordCard></WordCard>
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
