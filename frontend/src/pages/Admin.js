import React from "react";
import { Tab, Tabs, Container, Jumbotron } from "react-bootstrap";

import "../styles.css";
import PortfolioList from "../components/admin/PortfolioList";
import WelcomeTab from "../components/admin/WelcomeTab";

//Redirecionar caso haja a tentativa de acessar a página admim pelo pathname
import { Redirect } from "react-router-dom";
import Userfront from "@userfront/react";
import jwt_decode from "jwt-decode";

//Iniciar o UserFront 
Userfront.init("xbrzvzbw");

//Location como props
const Admin = ({location}) => {
    const projectId ="xbrzvzbw"
    
    if (!Userfront.accessToken()) {
        return (
            <Redirect to={{
                pathname: '/login',
                state: { from: location }, //caso tente acessar admin sem logar volta para a pagina login
                }}
            />
        )
    }

    const accessData = jwt_decode(Userfront.accessToken()) 
    const userData = jwt_decode(Userfront.idToken())
    const roles = accessData.authorization[projectId].roles
    const isAdmin = roles.includes('admin')

    if (!isAdmin) {
        return (
            <Redirect to={{
                pathname: '/portfolio',
                }}
            />
        )
    }

    
    //Testes 
    console.log ('Access', accessData)
    console.log ('User', userData)
    const access = JSON.stringify(accessData)
    const user = JSON.stringify(userData)

    return (
        <Container fluid className='Container'> {/* fluid ocupa o máximo possível da tela */}
            <Jumbotron>
                <h1>Admin Panel</h1>
            </Jumbotron>
            <Tabs transition={false} defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                    <WelcomeTab />
                </Tab>
                <Tab eventKey="portfolio" title="Portfolio">
                    <PortfolioList />
                </Tab>
                <Tab eventKey="user" title="User">
                    <p>User</p>
                    <p>{access}</p>
                    <p>{user}</p>                    
                </Tab>
            </Tabs> 
        </Container>      
    )
}

export default Admin

// Modo individual de se importar o react-bootstrap - import Tabs from "react-bootstrap/Tabs";/*  */
// Modo em linha de vários imports do react-bootstrap - import {Tab, Tabs, Jumbotron} from "react-bootstrap";