import React from "react";
import styled from "styled-components";
import CardPortfolio from "../components/CardPortfolio";

const Portfolio = () => {
    return (
        <PortfolioList>
         <CardPortfolio />
        </PortfolioList>
    )
}

const PortfolioList = styled.div`
    min-height: 90vh;
    overflow: hidden;
    padding: 5rem 10rem;
`;

export default Portfolio
