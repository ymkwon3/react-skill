import styled, {css} from "styled-components";
import { BsPatchPlusFill } from "react-icons/bs";
// todo: 여러 색으로 변경가능하게 만들어보기
const Root = styled.div`
  --c: #ffffff;
  --pc: ${props => {
    switch (props.c) {
      case "c1":
        return "#ff6e60";
      case "c2":
        return "#6263a2";
    }
  }};
`;

// 헤더 부분
const Header = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: var(--pc);
  border-radius: 0 0 12px 12px;
  color: white;
  user-select: none;
`;

// 헤더 밑의 div
const Container = styled.div`
  width: 100%;
  max-height: 60vh;
  overflow: scroll;
`;

// Add 페이지 div
const InputContainer = styled.div`
  width: 960px;
  height: 480px;
  gap: 40px;

  h1 {
    color: var(--pc);
  }

  .input-box {
    position: relative;
    width: 300px;
    height: 40px;
  }

  input,
  textarea {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid var(--pc);
    background-color: transparent;
    color: black;
    font-size: 20px;
  }

  label {
    position: absolute;
    left: 0;
    top: 0px;
    color: black;
    transition: 0.2s;
    user-select: none;
    font-size: 24px;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    transform: translateY(-20px);
    opacity: 0.5;
    font-size: 18px;
  }

  input:focus {
    border-bottom: 3px solid var(--pc);
  }

  button {
    width: 300px;
    height: 60px;
    border: none;
    background-color: var(--pc);
    border-radius: 15px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    transition: 0.05s;
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.05);
  }
`;

// 단어들 감싸는 div, 반응형으로 1개, 2개, 3개 될 수 있게
const WordWrap = styled.div`
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    width: 1024px;
  }
  @media only screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

// 단어 div
const Card = styled.div`
  position: relative;
  border: 2px solid var(--pc);
  border-radius: 15px;
  width: 100%;
  padding: 20px;
  font-size: 20px;
  background-color: ${props => (props.checked ? css`var(--pc)` : "#fff")};
  color: ${props => (props.checked ? "#fff" : css`var(--pc)`)};

  h4 {
    font-size: 24px;
    font-weight: bold;
  }

  a {
    width: 100%;
    margin-top: 2px;
    color: ${props => (props.checked ? "#fff" : "#0983e3")};
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: 0.1s;
  }
  a:hover {
    transform: scale(1.02);
    font-weight: bold;
  }

  .bsCheckLg,
  .biEdit,
  .riDeleteBin5Fill {
    position: absolute;
  }

  .riDeleteBin5Fill {
    right: 20px;
  }
  .biEdit {
    right: 50px;
  }
  .bsCheckLg {
    right: 80px;
  }

  @media only screen and (min-width: 1024px) {
    width: calc((100% - 20px) / 2);
  }
  @media only screen and (min-width: 1440px) {
    width: calc((100% - 40px) / 3);
  }
`;

const AddIcon = styled(BsPatchPlusFill)`
  color: var(--pc);
`

export { Header, Container, Card, WordWrap, InputContainer, Root, AddIcon };
