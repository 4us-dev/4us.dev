import React from "react";
import Header from "./components/template/Header";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        <Header></Header>
      </header>
      <div className="main-content">
        <aside></aside>
        <main>Main</main>
      </div>
      <footer>footer</footer>
    </>
  );
}

export default App;
