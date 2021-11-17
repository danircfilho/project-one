import React from "react";
import styled from "styled-components";
import CardPortfolio from "../components/CardPortfolio";
import { useApi } from "../hooks/useApi";
import { useLocation } from "react-router-dom";
import PortfolioDetail from "../components/PortfolioDetail"

import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

import ScrollTop from "../components/ScrollTop";

const Portfolio = () => {
    //renderizar na mesma pagina
    //pela barra busca o segundo elemento (página das descrições)
    const location = useLocation()    
    const slug = location.pathname.split('/')[2] 
    const { data } = useApi ('/portfolio')

    return (
        <PortfolioList
            initial = 'hidden'
            animate = 'show'
            exit = 'exit'
            variants = { pageAnimation }
            >
            {/* renderizar mesma pagina */}
            {slug && <PortfolioDetail slug={slug} />}

            <Hide>
                <CardList>
                    {data?.data?.map(project => {
                        return( <CardPortfolio key={project.slug} project={project}/> ) 
                    })}
                </CardList> 
            </Hide>
            <ScrollTop />
        </PortfolioList>       
    )
}

const Hide = styled.div`
    overflow: hidden;
`;

const PortfolioList = styled(motion.div)`
    min-height: 90vh;
    overflow: hidden;
    padding: 5rem 10rem;
`;

const CardList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Portfolio
