import React from "react";
import { Tab, Tabs, Container, Jumbotron } from "react-bootstrap";

import "../styles.css";
import PortfolioList from "../components/admin/PortfolioList";
import WelcomeTab from "../components/admin/WelcomeTab";

const Admin = () => {
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
            </Tabs> 
        </Container>      
    )
}

export default Admin

// Modo individual de se importar o react-bootstrap - import Tabs from "react-bootstrap/Tabs";/*  */
// Modo em linha de vários imports do react-bootstrap - import {Tab, Tabs, Jumbotron} from "react-bootstrap";