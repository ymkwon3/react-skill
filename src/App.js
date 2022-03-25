import "./App.css";
import React from "react";
import { Header, Container } from "./Styled";
import { Routes, Route } from "react-router-dom";

import Words from "./components/Words";
import Edit from "./components/Edit";
import Add from "./components/Add";

function App() {
  return (
    <div className="flex-column-s App">
      <Header className="flex-column-center">
        <h1>나만의 단어장</h1>
      </Header>
      <Container className="flex-column-center">
        <Routes>
          <Route path="/" element={<Words />} />
          <Route path="/word/:id" element={<Edit />} />
          <Route path="/word" element={<Add />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
