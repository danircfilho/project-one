import React from "react";
import styled  from "styled-components";
import FormContact from "../components/FormContact";
import SocialNetwork from "../components/SocialNetwork";

const ContactMe = () => {
    return (
        <ContactStyle>
            <Title>
                <h2>Get in touch</h2>
            </Title>
            <Areas>
                < FormContact />
                < SocialNetwork />               
            </Areas>
        </ContactStyle>
    )
}

const ContactStyle = styled.div`
    padding: 1rem 10rem;
    color: #353533;
    min-height: 90vh; /* nota: os outros 10 para 100% está no Nav */
`;

const Title = styled.div`
    margin-bottom: 4rem;
    h2 {
        color: white;
    }
`;

const Areas = styled.div`
    display: flex;
    align-items: center;
`;

export default ContactMe
