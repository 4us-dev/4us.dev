import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #E1E1E6;
  height: 100vh;
}

#root {
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
}

aside {
  background-color: orange;
  min-width: 15em;
}

.main-content {
  flex: 2;
  display: flex;
}
header {
  height: 6em;
}

main {
  background-color: blue;
  flex: 5;
}

footer {
  background-color: green;
  height: 2em;
}

.menu-toogle {
  display: none;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {

}

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
  aside {
    margin-left: -15em;
  }

  .menu-toogle {
    display: inline;
  }
}

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {

}

/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) {

}

`;
