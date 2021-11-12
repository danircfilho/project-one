import React from "react";
import { Tab, Tabs, Container } from "react-bootstrap";

import "../styles.css";
import PortfolioList from "../components/admin/PortfolioList";



const Admin = () => {
    return (
        <Container fluid className='Container'>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                    <h2>Welcome</h2>
                </Tab>
                <Tab eventKey="portfolio" title="Portfolio">
                    <PortfolioList />
                </Tab>
                <Tab eventKey="technologies" title="Technologies">
                    <h2>Technologies</h2>
                </Tab>
            </Tabs> 
        </Container>      
    )
}

export default Admin

// Modo individual de se importar o react-bootstrap - import Tabs from "react-bootstrap/Tabs";/*  */
// Modo em linha de vários imports do react-bootstrap - import {Tab, Tabs, Jumbotron} from "react-bootstrap";