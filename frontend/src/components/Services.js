import React from "react";
import styled from "styled-components";
import { About, Description, Image } from "../styles";
/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" /* esse não pode esquecer */
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"; 
import { faGraduationCap, faImages, faLaptopCode } from "@fortawesome/free-solid-svg-icons"; 


const Services = () => {
    return (
        <ServSections>
           { <Image>
                <img src="https://lh3.googleusercontent.com/proxy/y94zu8J1TPbOT9Ue9SvzPZzUnhfZiABv41Sm5FNGwTOq61o85rcP9HHWV0_Sal0dNjF6rXNlitbPkUndsXdqI0zjMUh7X9ardj5Elswi" alt=""/>
            </Image>}
            <ServDescriptions>
                <h2> Things I Do </h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon={faLaptopCode} size='4x'/>
                            <h3>Portfolio</h3>  
                        </div>                        
                        <p>There are many variations of passages.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon={faGraduationCap} size='4x'/>
                            <h3>Courses</h3>  
                        </div> 
                        <p>There are many variations of passages.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon={faImages} size='4x'/>
                            <h3>Hobbies</h3>  
                        </div> 
                        <p>There are many variations of passages.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon={faGithubSquare} size='4x'/>
                            <h3>Git Hub</h3>  
                        </div> 
                        <p>There are many variations of passages.</p>
                    </Card>                     
                </Cards>                
            </ServDescriptions>
        </ServSections>
    )
}

/* Reestilizar as seções do Services */
const ServSections = styled(About)`
    h2 {
        padding-top: 5rem;
    }
    p {
        width: 80%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const ServDescriptions = styled(Description)`
    flex: 3;
`;

/* Estilizar os cards */
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
`;

const Card = styled.div`
    padding: 0.5rem;
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
    }
    h3 {
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    } 
`;

export default Services