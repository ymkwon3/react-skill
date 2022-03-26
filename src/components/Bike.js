import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { BsBicycle } from "react-icons/bs";
import { useSelector } from "react-redux";

const random = nums => {
  for (let i = 0; i < nums.length; i++)
    nums[i] = parseInt(Math.random() * nums[i]) + 1;
  return nums;
};

const Bike = () => {
  return (
    <Card>
      <Street>
        {Array.from({ length: 15 }, (_, i) => (
          <Road
            key={`roadkey${i}`}
            className={`road road_${i}`}
            randList={random([60, 60, 3, 60])}
          ></Road>
        ))}
      </Street>
      <Bicycle></Bicycle>
    </Card>
  );
};

const Bicycle = () => {
  const selector = useSelector(state => state.wordModule.progress);
  return (
    <CustomBicycle
      progress={selector}
      color="#000000"
      size={160}
    />
  );
};



const driving = keyframes`
  0% {
    margin-bottom: 5px;   //위아래 움직이기
    transform: scaleY(0.95) skew(1deg);  //크기조절 & 기울기
  }
  100% {
     margin-bottom: 0px;  //위아래 움직이기
  } 
`;

const Card = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
`;

const CustomBicycle = styled(BsBicycle)`
  height: 150px;
  position: absolute;
  left: ${props => `${props.progress * 100}%`};
  bottom: 20px;
  transition: 1s;
  animation: ${driving} 0.7s infinite linear alternate;
`;

const Street = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #666666;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
`;

const move = keyframes`
  100% {
    right: 100%;
  }
`;

const Road = styled.div`
  position: absolute;
  height: 1px;
  border-radius: 1px;
  top: ${props => props.randList[0]}px;
  right: 0;
  width: ${props => props.randList[1]}px;
  border-bottom: ${props => props.randList[2]}px solid #dbdbdb;
  transition: 3s;
  animation: ${move} ${props => props.randList[3] * 0.2 + 0.6}s linear infinite;
`;

export default Bike;
