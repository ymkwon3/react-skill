import "./App.css";
import React from "react";
import { Header, Container, Root } from "./Styled";
import { Routes, Route } from "react-router-dom";

import Words from "./components/Words";
import Edit from "./components/Edit";
import Add from "./components/Add";
import Bike from "./components/Bike";

function App() {
  const [color, setColor] = React.useState("#ff6e60");

  // 헤더 클릭 시, primary color 변경
  const setTheme = () => {
    color === "#ff6e60" ? setColor("#6263a2") : setColor("#ff6e60");
  }

  return (
    <Root className="flex-column-center App" c={color}>
      <Header className="flex-column-center" onClick={() => setTheme()}>
        <h1>용사 (용어 사전이라는 뜻)</h1>
      </Header>
      <Container className="flex-column-s">
        <Routes>
          <Route path="/" element={<Words />} />
          <Route path="/word/:id" element={<Edit />} />
          <Route path="/word" element={<Add />} />
        </Routes>
      </Container>
      <Bike></Bike>
    </Root>
  );
}

export default App;
