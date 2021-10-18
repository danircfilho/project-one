import React from 'react'

/* Estilo Global */
import GlobalStyle from './components/GlobalStyle'

/* Roteamento */
import {Route, Switch } from 'react-router-dom'

/* Componentes - sempre com letra maiúscula */
import AboutUs from './pages/AboutUs' 
import Portfolio from './pages/Portfolio'
import ContactMe from './pages/ContactMe'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      < GlobalStyle />
      < Nav />
      <Switch>
          <Route exact path='/'>
            < AboutUs /> 
          </Route>
          <Route path='/portfolio'>
            < Portfolio /> 
          </Route>
          <Route path='/contact'>
            < ContactMe /> 
          </Route>
      </Switch>    
    </div>
  );
}

export default App;
