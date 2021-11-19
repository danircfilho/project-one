import React from "react";

/* Estilo Global */
import GlobalStyle from "./components/GlobalStyle";

/* Roteamento */
import { Route, Switch, useLocation } from "react-router-dom";

/* Icones - library = toda a biblioteca que for usar...fas, fab etc*/
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

/* Componentes - sempre com letra maiúscula */
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Nav from "./components/Nav";
import Admin from "./pages/Admin";
import { LoginForm, SignupForm } from "./components/admin/auth/Authentication";


function App() {
	const location = useLocation() //variável location é igual a função do useLocation()
	library.add(fas, fab);
	// Toda vez que se usar JS entre as tags deve se colocar entre colchetes {}
	// Ver Nav = retirando o nav da página Admin. Neste caso, diferente d Admin o menu Nav aparece
	return (
		<div>
			<GlobalStyle />
			{location.pathname !== '/admin' && <Nav />}
			<Switch>
				<Route exact path="/" component={ AboutUs } />
				<Route path={['/portfolio:id', '/portfolio']} component={ Portfolio } />
				<Route path="/contact" component={ ContactMe } />
				<Route path="/admin" component={ Admin } />
				<Route path="/signup" component={ SignupForm } />
				<Route path="/login" component={ LoginForm } />
			</Switch>
		</div>
	);
}

// Exemplo sem refatorar as rotas no Switch
//	<div>
//		<GlobalStyle />
//		<Nav />
//		<Switch>
//			<Route exact path="/">
//				<AboutUs />
//			</Route>
//			{/* renderizar na mesma pagina id ou direto- array carrega o <Portflio/>*/}
//			<Route path={['/portfolio:id', '/portfolio']}>
//				<Portfolio />
//			</Route>
//			<Route path="/contact">
//				<ContactMe />
//			</Route>
//		</Switch>
// </div>

export default App;
