import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import MenuButton from "./components/menu/MenuButton";

function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        4US DEV
        {/* <MenuButton /> */}
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
