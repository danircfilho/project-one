import React from "react";
import styled from "styled-components";
import moment from "moment";

const CardPortfolio = ({ project }) => {
    return (
        <StyleCard>               
            <StyleContent>
                <Image src={ project.image} alt="" />
                <StyleInfo>
                    <h3>{ project.title }</h3>
                    <h4>{moment(project.createdAt).format('MMM. YYYY')}</h4>
                    <p>{ project.description }</p>
                </StyleInfo>
            </StyleContent>
        </StyleCard>            
    )   
}

const StyleCard = styled.div`
    min-height: 30vh;
    box-shadow: 0px 5px 10px rgba(240, 255, 0, 0.3);    
    border-color: rgba(240, 255, 0, 0.3);
    border-style: outset;
    border-width: 0.1px;
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

const StyleContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 70vh;
`;

const Image = styled.img`
    width: 100%;
    height: 70%;
`;

const StyleInfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: left;
    padding-left: 1rem;
    h3 {
        padding-top: 1rem;
    }
`;

export default CardPortfolio