import "./App.css";
import React from "react";
import { Header, Container } from "./Styled";
import { Routes, Route } from "react-router-dom";

import Words from "./components/Words";
import Edit from "./components/Edit";
import Add from "./components/Add";
import Bike from './components/Bike'

function App() {
  

  return (
    <div className="flex-column-center App">
      <Header className="flex-column-center">
        <h1>나만의 단어장</h1>
      </Header>
      <Container className="flex-column-s">
        <Routes>
          <Route path="/" element={<Words />} />
          <Route path="/word/:id" element={<Edit />} />
          <Route path="/word" element={<Add/>} />
        </Routes>
      </Container>
      <Bike></Bike>
    </div>
  );
}

export default App;
