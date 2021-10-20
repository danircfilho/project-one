import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutubeSquare, faLinkedin, faInstagramSquare, faFacebookSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const SocialNetwork = () => {
    return (
        <Network>
            <Social href="https://github.com" target="_blank">
                < FontAwesomeIcon icon={faGithubSquare} size='4x' />
                <h3>github.com/danircfilho</h3>
            </Social>
            <Social href="https://linkedin.com" target="_blank">
                < FontAwesomeIcon icon={faLinkedin} size='4x' />
                <h3>Linkedin</h3>
            </Social>
            <Social href="https://youtube.com" target="_blank">
                < FontAwesomeIcon icon={faYoutubeSquare} size='4x' />
                <h3>Youtube</h3>
            </Social>
            <Social href="https://instagram.com" target="_blank">
                < FontAwesomeIcon icon={faInstagramSquare} size='4x' />
                <h3>Instagram</h3>
            </Social>
            <Social href="https://facebook.com" target="_blank">
                < FontAwesomeIcon icon={faFacebookSquare} size='4x' />
                <h3>Facebook</h3>
            </Social> 
        </Network>
    )
}

const Network = styled.div`
    padding: 1rem 5rem;
`;

const Social = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px 50px;
    text-decoration: none;
    padding-left: 2rem;
    &:hover {
        background: #dcd958;
        cursor: pointer;
    }
    h3 {
        color: grey;
        margin: 2rem;
    }
    color: inherit; /* herda a cor */
`;

export default SocialNetwork