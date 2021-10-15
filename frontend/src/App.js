import React from 'react'

/* Estilo Global */
import GlobalStyle from './components/GlobalStyle'

/* Componentes */
import AboutUs from './pages/AboutUs' /* componente letra maiúscula AboutUs */

function App() {
  return (
    <div>
      < GlobalStyle />
      < AboutUs /> 
    </div>
  );
}

export default App;
