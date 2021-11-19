import React from "react";

/* Estyled Component */
import styled from "styled-components";

/* Navigation */
import { Link } from "react-router-dom";
import Userfront from "@userfront/react";
import { LogoutButton } from "./admin/auth/Authentication";

//Iniciar o UserFront para ocultar ou não os botões de Login e Cadastro (Signup)
Userfront.init("xbrzvzbw");

const Nav = () => {
	/*  Para criar uma label com os caracteres como se fossem componentes </> */
	const menuOption = {
		about: "<About Me />",
		portfolio: "<Portfolio />",
		contact: "<Contact Me />",
	};

	return (
		<StyledNav>
			<h1>
				<Link to="/">Daniel Rodrigues</Link>
			</h1>
			<ul>
				{/* <li><Link to='/'> About Me </Link></li> - esse é o resultado normal sem os caraceres </>*/}
				<li>
					<Link to="/"> {menuOption.about}</Link>
				</li>
				<li>
					<Link to="/portfolio"> {menuOption.portfolio} </Link>
				</li>
				<li>
					<Link to="/contact"> {menuOption.contact} </Link>
				</li>

				{ //caso não esteja logado mostrar os botões de login e signup
					!Userfront.accessToken() && (
						<>
							<li>
								<Link to="/login">Login</Link>
							</li>
							<li>
								<Link to="/signup">Cadastro</Link>
							</li>
						</>
					)
				}
				{ //caso esteja logado mostrar o botão logout
					Userfront.accessToken() && <li> <LogoutButton /> </li>
				}

			</ul>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	background: #282828;
	position: sticky; /* fica fixo no topo */
	top: 0;
	z-index: 10;
	ul {
		display: flex;
		list-style: none;
	}
	li {
		padding-left: 5rem;
	}
	a {
		color: white;
		text-decoration: none;
	}
`;

export default Nav;
