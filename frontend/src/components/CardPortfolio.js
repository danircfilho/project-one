import React from "react";
import styled from "styled-components";

const CardPortfolio = () => {
    return (
        <CardList>
            <StyleCard>
                <StyleContent>
                    <Image src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    <StyleInfo>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </StyleInfo>
                </StyleContent>
            </StyleCard>
            <StyleCard>
                <StyleContent>
                    <Image src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    <StyleInfo>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </StyleInfo>
                </StyleContent>
            </StyleCard>
            <StyleCard>
                <StyleContent>
                    <Image src="https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    <StyleInfo>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </StyleInfo>
                </StyleContent>
            </StyleCard>
            <StyleCard>
                <StyleContent>
                    <Image src="https://images.pexels.com/photos/4523062/pexels-photo-4523062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    <StyleInfo>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </StyleInfo>
                </StyleContent>
            </StyleCard>
            <StyleCard>
                <StyleContent>
                    <Image src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    <StyleInfo>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </StyleInfo>
                </StyleContent>
            </StyleCard>
            <StyleCard>
                <StyleContent>
                    <Image src="https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    <StyleInfo>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </StyleInfo>
                </StyleContent>
            </StyleCard>
            
        </CardList>
    )
}

const CardList = styled.div`
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

const StyleContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%auto;
    height: 100%auto;
`;

const Image = styled.img`
    width: 100%auto;
    height: 100%auto;
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