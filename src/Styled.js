import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #ff6e60;
  color: white;
`;

const Container = styled.div`
  padding: 60px;
`;

const InputContainer = styled.div`
  margin-top: 60px;
  border: 2px solid black;
  width: 960px;
  height: 480px;
  gap: 40px;

  button {
    width: 300px;
    height: 60px;
    border: none;
    background-color: #ff6e60;
    border-radius: 15px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    transition: 0.2s;
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.05);
  }
`;

const WordWrap = styled.div`
  flex-wrap: wrap;
  margin-top: 60px;
  padding: 30px;
  gap: 20px;

  @media only screen and (min-width: 1024px) {
    width: 1024px;
  }
  @media only screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

const Card = styled.div`
  position: relative;
  border: 2px solid #ff6e60;
  border-radius: 15px;
  width: 100%;
  padding: 20px;
  font-size: 20px;
  background-color: ${props => props.checked ? "#ff6e60" : "#fff"};
  color: ${props => props.checked ? "#fff" : "#ff6e60"};

  h4 {
    font-size: 24px;
    font-weight: bold;
  }

  p {
    margin-top: 2px;
    color: ${props => props.checked ? "#fff" : "#0983e3"};;
  }

  .bsCheckLg, .biEdit, .riDeleteBin5Fill {
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

export { Header, Container, Card, WordWrap, InputContainer };
