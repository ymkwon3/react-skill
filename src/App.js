import "./App.css";
import React from "react";
import { Header, Container, Root } from "./Styled";
import { Routes, Route } from "react-router-dom";

import Words from "./components/Words";
import Edit from "./components/Edit";
import Add from "./components/Add";
import Bike from "./components/Bike";

function App() {
  const [color, setColor] = React.useState("c1");
  const setTheme = () => {
    color === "c1" ? setColor("c2") : setColor("c1");
  }

  const ref = React.useRef();
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
