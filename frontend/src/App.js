import React from "react";

/* Estilo Global */
import GlobalStyle from "./components/GlobalStyle";

/* Roteamento */
import { Route, Switch } from "react-router-dom";

/* Icones - library = toda a biblioteca que for usar...fas, fab etc*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

/* Componentes - sempre com letra maiúscula */
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Nav from "./components/Nav";
import PortfolioDetail from "./components/PortfolioDetail";

function App() {
  library.add(fas, fab);

  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/">
          <AboutUs />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Route path="/portfolio/:id">
          <PortfolioDetail />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
