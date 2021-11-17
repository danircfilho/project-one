import React, { useState } from "react";
import { Table, Button, Image } from 'react-bootstrap'
import styled from 'styled-components';
import moment from "moment";

import { useApi } from '../../hooks/useApi'
import Dialog from "./Dialog";


// Sobre tabelas - thead cabeçalho, tbody linhas e colunas;
// Não se muda a nomenclatura da variant, caso contrário o bootstrap não será aplicado;
const PortfolioList = () => {
    const [ action, setAction ] = useState ({
        del: {
            header: 'Confirm Delete?',
            btnVariant: 'danger',
            btnLabel: 'Confirm'
        },
        edit: {
            header: 'Add New Portfolio',
            btnVariant: 'primary',
            btnLabel: 'Save'
        },
        add: {
            header: 'Confirm Delete?',
            btnVariant: 'primary',
            btnLabel: 'Confirm'
        }
        
    })
    const [ currentAction, setCurrentAction ] = useState({
        header: '',
        btnVariant: '',
        btnLabel: ''
    }) 
    const [ show, setShow ] = useState(false)
    const { data } = useApi ('/portfolio')

    //header - setar o header e abrir o modal (setShow)
    const handleShow = (slug, actn) => {
        setCurrentAction(actn)
        setShow(true)
    }

    return (
        <div>
            <Table striped bordered hover variant="dark">

                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {data?.data?.map(item => {
                            return(
                            <tr>
                                <td><Logo src={ item.image } rounded /></td>
                                <td>{ item.title }</td>
                                <td>{ moment(item.createdAt).format("MMM. YYYY") }</td>
                                <td><Button variant="info">Edit</Button>
                                    <Button variant="danger" onClick={ () => handleShow(item.slug, action.del)}>Delete</Button> {/* quando clicar chama a função (handleShow) */}
                                </td>
                            </tr>
                            ) 
                        })}
                </tbody>
            </Table>

            <Dialog show={show} setShow={setShow} currentAction={currentAction} />

        </div>
    )
}

const Logo = styled(Image)`
    height: 100px;
`;

export default PortfolioList