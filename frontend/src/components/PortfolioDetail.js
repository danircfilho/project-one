import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PortfolioDetail = () => {
    return (
        <Detail>
            <Stats>
                <div>
                    <p>Title</p>
                    <div>Description</div>
                </div>
                <div>
                    <h3>
                        Technologies
                    </h3>
                    <div>
                        <FontAwesomeIcon icon={["fab", "github"]} size='4x' />
                    </div>
                </div>
            </Stats>
            <Description>
                <div>
                <p>Long description</p>
            </div>
            </Description>            
            <div>
                Imagem
            </div>
        </Detail>
    )
}

const Detail = styled.div`
    width: 80%;
    min-height: 80vh;
    background: white;
    position: absolute;
    left: 10%;
    top: 15%;
    margin-bottom: 10%;
    z-index: 10;
`;

const Stats = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 5rem;
`;

const Description = styled.div`
    padding: 2rem 5rem;
    p{
        color: black;
    }
`;

export default PortfolioDetail