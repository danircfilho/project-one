import React from "react";
import styled from "styled-components";

const Portfolio = () => {
    return (
        <PortfolioList>
            <CardList>
                <StyleCard>
                    <img src="" alt="" />
                    <div>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </div>
                </StyleCard>
                <StyleCard>
                    <img src="" alt="" />
                    <div>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </div>
                </StyleCard>
                <StyleCard>
                    <img src="" alt="" />
                    <div>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </div>
                </StyleCard>
                <StyleCard>
                    <img src="" alt="" />
                    <div>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </div>
                </StyleCard>
                <StyleCard>
                    <img src="" alt="" />
                    <div>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </div>
                </StyleCard>
                <StyleCard>
                    <img src=""alt="" />
                    <div>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </div>
                </StyleCard>
            </CardList>
        </PortfolioList>
    )
}

const PortfolioList = styled.div`
    min-height: 90vh;
    overflow: hidden;
    padding: 5rem 10rem;
`;

const CardList = styled.div`
    background-color: red;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

const StyleCard = styled.div`
    background-color: green;
    min-height: 30vh;
    border-color: aliceblue;
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
`;

export default Portfolio
