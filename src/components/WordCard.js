import React from "react";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkWordFB } from "../redux/modules/wordModule";


import { Card } from "../Styled";
import { BsCheckLg } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri"

const WordCard = props => {
  // 해당 단어가 체크되었는지 확인하는 state
  const [checked, setChecked] = React.useState(props.value[3]);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const term = props.value[0];
  const mean = props.value[1];
  const link = props.value[2];

  const check = () => {
    dispatch(checkWordFB(term, mean, link, !checked));
    setChecked(!checked);
  }
  return (
    <Card className="flex-column-ss" checked={checked}>
      <BsCheckLg className="bsCheckLg hoverEvent" size={25} onClick={()=> check()}></BsCheckLg>
      <BiEdit className="biEdit hoverEvent" size={25} onClick={() => navigate(`/word/${term}`)}></BiEdit>
      <RiDeleteBin5Fill className="riDeleteBin5Fill hoverEvent" size={25}></RiDeleteBin5Fill>
      <h4>{term}</h4>
      <span>{props.value[1]}</span>
      <a href={props.value[2]} target="_blank">{props.value[2]}</a>
    </Card>
  );
};

export default WordCard;
