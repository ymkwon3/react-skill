import React, { forwardRef } from "react";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkWordFB, deleteWordFB } from "../redux/modules/wordModule";


import { Card } from "../Styled";
import { BsCheckLg } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri"

const WordCard = forwardRef(({value}, ref) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const term = value.term;
  const mean = value.mean;
  const link = value.link;
  const checked = value.checked;

  const check = () => {
    dispatch(checkWordFB({ term: term, mean: mean, link: link, checked: !checked }));
  }

  const deleteEvent = () => {
    if(window.confirm('Are you sure you want to delete this thing?')) {
      dispatch(deleteWordFB(term))
    }
  }
  
  return (
    <Card className="flex-column-ss" checked={checked} ref={ref}>
      <BsCheckLg className="bsCheckLg hoverEvent" size={25} onClick={()=> check()}></BsCheckLg>
      <BiEdit className="biEdit hoverEvent" size={25} onClick={() => navigate(`/word/${term}`)}></BiEdit>
      <RiDeleteBin5Fill className="riDeleteBin5Fill hoverEvent" onClick={() => deleteEvent()} size={25}></RiDeleteBin5Fill>
      <h4>{term}</h4>
      <span>{mean}</span>
      <a href={link} target="_blank">{link}</a>
    </Card>
  );
}); 

export default WordCard;
