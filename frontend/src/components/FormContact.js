import React from "react";
import styled from "styled-components";

const FormContact = () => {
    return (
        <Form id="contact-form" method="post">
                <Input>
                    <label>Name:</label>  
                    < input type="text" />  
                </Input>
                <Input>
                    <label>E-mail:</label>  
                    <input type="email" />
                </Input>
                <Input>
                    <label>Message:</label>  
                    < textarea rows="5" /> 
                </Input>              
                <button type="submit">Submit</button>                     
        </Form>        
    )
}

const Form = styled.form`
    button {
            color: #dcd958;
            margin-top: 1rem;
            border-radius: 10px 10px;
            &:hover {
            background-color: #dcd958;
            color: grey;
            } 
        }
`;

const Input = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 60vh;
    label {
        color: white;
        padding: 1rem;
    }
    input {
        border-radius: 10px 10px;
        border: 3px solid #dcd958;
        padding: 10px 15px;
        font-size: 15px;
        width: 100%;
        height: 100%;
    }
    input:focus {
        background-color: grey;
        color: yellow; 
    }
    textarea {
        width: 100%;
        height: 100%;
        padding: 10px 15px;
        box-align: border-box;
        border-radius: 10px 10px;
        border: 3px solid #dcd958;
        resize: none;
    }
    textarea:focus {
        background-color: grey;
        color: yellow; 
    }
`;

export default FormContact