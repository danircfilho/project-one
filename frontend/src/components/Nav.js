import React from 'react';

/* Estyled Component */
import styled from 'styled-components';

/* Navigation */
import {Link} from 'react-router-dom';

const Nav = () => {
   /*  Para criar uma label com os caracteres como se fossem componentes </> */
    const menuOption = {
        about: '<About Me />',
        portfolio: '<Portfolio />',
        contact: '<Contact Me />'
    }

    return (
        <StyledNav>
            <h1><Link to='/'> Daniel Rodrigues </Link></h1>
            <ul>
                {/* <li><Link to='/'> About Me </Link></li> - esse é o resultado normal sem os caraceres </>*/}
                <li><Link to='/'> {menuOption.about}</Link></li>
                <li><Link to='/portfolio'> {menuOption.portfolio} </Link></li>
                <li><Link to='/contact'> {menuOption.contact} </Link></li>
            </ul>            
        </StyledNav>
    )
}

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
    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding-left: 10rem;
    }
    a {
        color: white;
        text-decoration: none;
    }
`;

export default Nav