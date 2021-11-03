import React from "react";
import styled from "styled-components";

const CardPortfolio = ({ project }) => {
    return (
        <StyleCard>               
            <StyleContent>
                <Image src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <StyleInfo>
                    <h3>{ project.title }</h3>
                    <h4>{ project.createdAt }</h4>
                    <p>{ project.description }</p>
                </StyleInfo>
            </StyleContent>
        </StyleCard>            
    )   
}

const StyleCard = styled.div`
    background-color: green;
    min-height: 30vh;
    border-color: aliceblue;
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
`;

const StyleContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 65vh;
`;

const Image = styled.img`
    width: 100%;
    height: 65vh;
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