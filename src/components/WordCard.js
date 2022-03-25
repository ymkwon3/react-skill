import React from "react";
import {useNavigate} from "react-router-dom";

import { Card } from "../Styled";
import { BsCheckLg } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri"

const WordCard = props => {
  // 해당 단어가 체크되었는지 확인하는 state
  const [checked, setChecked] = React.useState(false);
  const navigate = useNavigate();
  return (
    <Card className="flex-column-ss" checked={checked}>
      <BsCheckLg className="bsCheckLg hoverEvent" size={25} onClick={()=>setChecked(!checked)}></BsCheckLg>
      <BiEdit className="biEdit hoverEvent" size={25} onClick={() => navigate(`/word/${123456789}`)}></BiEdit>
      <RiDeleteBin5Fill className="riDeleteBin5Fill hoverEvent" size={25}></RiDeleteBin5Fill>
      <h4>글자크기</h4>
      <span>[həˈlō]</span>
      <span>히사시부리</span>
      <p>hello world</p>
      <p>안녕 세계야</p>
    </Card>
  );
};

export default WordCard;
