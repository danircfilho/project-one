import React, { useState } from 'react';
import { Form, Container, Card, CardColumns, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioForm = ({title, setTitle, description, setDescription, longDescription, setLongDescription, image, setImage, slug, tech, setTech}) => {
    //useState para adicionar itens
    const [type, setType ] = useState('')
    const [icon, setIcon ] = useState('')
    const [label, setLabel ] = useState('')

    const handleAddItem = () => {
        //será feito se nenhum campo ficar em branco (por isto a condicional if)
        if (type.length>0 && label.length>0 && icon.length>0) {
            // Gerar novo id para caso haja necessidade de voltar ou cancelar a ação de excluir
            // nota: id randomico de 30 posições reduzido aos primeiros 7
            const newId = Math.random().toString(30).substring(7)
            const newTech = {
                iconType: type, // <- type é o nome no banco de dados
                icon, label, // nomes no banco de dados
                _id: newId //novo id (que será temporário)
            }
            setTech([...tech, newTech])
        }
    }

    const handleRemoveItem = (id) => {
        //teste: console.log("Id que será removido", id)

        //filter para isolar o id a ser excluído
    const newTech = tech.filter(e => e._id !== id)
        //teste: console.log("Novo Array", newTech)

        //muda o estado (setando) para a nova variável (newTech)
        setTech(newTech)
    }
    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Long Descrition</Form.Label>
                    <Form.Control 
                        as="textarea" rows={5} 
                        type="text" 
                        value={longDescription}
                        onChange={(e)=>setLongDescription(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={image}
                        onChange={(e)=>setImage(e.target.value)}
                    />
                </Form.Group>
            </Form>

        {/*  testar se está recebendo do banco de dados
            <p>{JSON.stringify(tech)}</p> */}

            <CardColumns>
                {
                    tech?.map(technology => {
                        return (
                            <Card>
                                <Card.Body>
                                    <Card.Text>
                                        <FontAwesomeIcon
                                            icon={[technology.iconType, technology.icon]} 
                                            size='3x' 
                                        /> 
                                    {technology.label} 
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button 
                                        size="sm" 
                                        variant="danger"
                                        onClick={()=>handleRemoveItem(technology._id)}
                                        >Remover {/* <- nome do botão */}
                                    </Button>
                                </Card.Footer>
                            </Card>
                        )
                    })
                }                   
            </CardColumns>

            <Form inline>
                <Form.Row>
                    <Col xs="auto">
                        <Form.Control 
                            placeholder="Type: fab, fas"
                            value={type}
                            onChange={(e)=>setType(e.target.value)}
                        /> 
                    </Col>
                    <Col xs="auto">
                        <Form.Control 
                            placeholder="Icon: github, database"
                            value={icon}
                            onChange={(e)=>setIcon(e.target.value)}
                        /> 
                    </Col>
                    <Col xs="auto">
                        <Form.Control 
                            placeholder="Label: GitHub, MongoDB"
                            value={label}
                            onChange={(e)=>setLabel(e.target.value)}
                        /> 
                    </Col>
                    <Col xs="auto">
                        {/* onClick para adcionar o novo estado */}
                        <Button className="mb-2" onClick={handleAddItem}>Add</Button> 
                    </Col>
                </Form.Row>
            </Form>

        </Container>
    )
}

export default PortfolioForm