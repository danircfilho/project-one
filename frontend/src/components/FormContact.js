import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";

const FormContact = () => {
    //preencher formulario
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');

    //capturar os dados
    const contactMe = (e) => {
        const data = {
            Name: name,
            Email: email,
            Message: message,
            Date: moment().format('DD/MM/YYYY'),
        }
    }

    return (
        <Form onSubmit={contactMe}>
                <Input>
                    <label>Name:</label>  
                    < input 
                        type = "text" 
                        value = {name}
                        onChange = { (e)=>{setName(e.target.value)} }
                    />  
                </Input>
                <Input>
                    <label>E-mail:</label>  
                    <input
                        type = "email" 
                        value = {email}
                        onChange = { (e)=>{setEmail(e.target.value)} } 
                        
                    />
                </Input>
                <Input>
                    <label>Message:</label>  
                    < textarea 
                        rows="5" 
                        value = {message}
                        onChange = { (e)=>{setMessage(e.target.value)} } 
                    /> 
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