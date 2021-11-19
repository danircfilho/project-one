import React, { useState } from "react";
import { Table, Button, Image, Container } from 'react-bootstrap'
import styled from 'styled-components';
import moment from "moment";

import { useApi } from '../../hooks/useApi'
import Dialog from "./Dialog";
import PortfolioForm from './PortfolioForm';
import { deleteItem, editItem, addItem } from "../../services/api";

//useState
const PortfolioList = () => {
    //Funções CRUD - tem que estar aqui no início e deve ser passado no cuurentAction (onde estão as ações)
    const handleDel = (slug) => {
        deleteItem(slug)
        //teste console.log("Deletado com sucesso!", slug)
    }
    const handleAdd = (slug, data) => {
        addPortfolioItem(data)
        //teste console.log("Adicionado com sucesso!")
    }
    const handleEdit = (slug, data) => {
        editPortfolioItem(slug, data)
        //teste console.log("Editado com sucesso!", slug)
    }

    const [ title, setTitle ] = useState()
    const [ description, setDescription ] = useState()
    const [ longDescription, setLongDescription ] = useState()
    const [ image, setImage ] = useState()
    const [ slug, setSlug] = useState()
    const [ tech, setTech] = useState()

    const [ action ] = useState ({
        //action não será setado (setAction)
        //se clicar no botão Delete
        del: {
            header: 'Confirm Delete?',
            btnVariant: 'danger',
            btnLabel: 'Confirm',
            showBody: true,
            body: 'Are you sure you want to delete?',
            callback: handleDel
        },
        //se clicar no botão Edit (veja o componente PortfolioForm!)
        edit: {
            header: 'Edit New Portfolio',
            btnVariant: 'primary',
            btnLabel: 'Save',
            showBody: false,
            callback: handleEdit
        },
        //se clicar no botão Add
        add: {
            header: 'Add New Portfolio?',
            btnVariant: 'primary',
            btnLabel: 'Confirm',
            showBody: false,
            callback: handleAdd
        }
    })

    const [ currentAction, setCurrentAction ] = useState({
        header: '',
        btnVariant: '',
        btnLabel: '',
        body: ''
    }) 

    const [ show, setShow ] = useState(false)
    const { data } = useApi ('/portfolio')

    //header - setar o header e abrir o modal (setShow)
    //nota: setState(portfolio.nome_que_está_no_bd)
    //setState(portfolio?.nomebd) a interrogação é que se o array da variável for nulo, não efetua a chamada e o || retorna array vazio
    const handleShow = (portfolio, actn) => {
        setCurrentAction(actn)
        setShow(true)
        setTitle(portfolio?.title || '')
        setDescription(portfolio?.description || '')
        setLongDescription(portfolio?.longDescription || '')
        setImage(portfolio?.image || '')
        setSlug(portfolio?.slug || '')
        setTech(portfolio?.technologies || []) //por não ser uma string retorna array vazio direto []
    }

    //Adicionar os itens ao estado
    const addPortfolioItem = (data) => {
        //remover o id gerado para que o bd gere automaticamente
        const tech = data.tech.map(i => { //map (loop) no data.tech, gera novi item (i)
            delete i._id //delete o elemnto do i
            return i //retorna o que sobrou do i
        })

        const newPortfolioItem = {
            title: data.title,
            description: data.description,
            longDescription: data.longDescription,
            image: data.image,
            technologies: tech //retorna tech somente
        }
        //teste console.log("No item adicionado", newPortfolioItem)
        addItem(newPortfolioItem)
    }

    const editPortfolioItem = (slug, data) => {
         //remover o id gerado para que o bd gere automaticamente
         // eslint-disable-next-line no-unused-vars
         const tech = data.tech.map(i => { //map (loop) no data.tech, gera novi item (i)
            delete i._id //delete o elemnto do i
            return i //retorna o que sobrou do i
        })

        const newPortfolioItem = {
            title: data.title,
            description: data.description,
            longDescription: data.longDescription,
            image: data.image,
            technologies: data.tech //tech no estado e tecnologies no banco de dados
        }
        //teste console.log("Item editado com sucesso!", newPortfolioItem)
        editItem(slug, newPortfolioItem)
    }

    // Sobre tabelas - thead cabeçalho, tbody linhas e colunas;
    // Não se muda a nomenclatura da variant, caso contrário o bootstrap não será aplicado;
    return (
        <Container>
            {/* handleShow não tem slug */}
            <Button variant="primary" size="lg" onClick={ () => handleShow(null, action.add)}>Add New</Button>
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
                            <tr key={item.slug}>
                                <td><Logo src={ item.image } rounded /></td>
                                <td>{ item.title }</td>
                                <td>{ moment(item.createdAt).format("MMM. YYYY") }</td>
                                <td>
                                    {/* quando clicar chama a função (handleShow) */}
                                    <Button variant="info" onClick={ () => handleShow(item, action.edit)}   >Edit</Button>
                                    <Button variant="danger" onClick={ () => handleShow(item, action.del)}>Delete</Button> 
                                </td>
                            </tr>
                            )       
                        })}
                </tbody>
            </Table>

            <Dialog show={show} setShow={setShow} currentAction={currentAction} slug={slug}>
                {currentAction.showBody && currentAction.body}

                {!currentAction.showBody && (
                    <PortfolioForm 
                        title={title}
                        setTitle={setTitle}
                        description={description}
                        setDescription={setDescription}
                        longDescription={longDescription}
                        setLongDescription={setLongDescription}
                        image={image}
                        setImage={setImage}
                        slug={slug}                         
                        tech={tech}                         
                        setTech={setTech}                         
                    />
                )} 
            </ Dialog>
        </Container>
    )
}

const Logo = styled(Image)`
    height: 100px;
`;

export default PortfolioList

//Notas:
// Componente children (dentro de outro componente "Dialog") <Dialog show={show} setShow={setShow} currentAction={currentAction} />
// Children não é passado como variável e sim como componente dentro de outro componente. Deve-se abrir e fechar o componente que o receberá.