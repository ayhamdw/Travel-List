import { useState } from "react";
import "./App.css";
import Logo from "../components/Logo";
import Form from "../components/Form";

function App() {
  return (
    <>
      <div className="app">
        <Logo />
        <Form />
      </div>
    </>
  );
}

export default App;
