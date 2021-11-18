import React, { useEffect,useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useApi } from '../../hooks/useApi';

const WelcomeTab = () => {
    const { data } = useApi('/portfolio')

    const [qtdItems, setQtdItems] = useState(0)

    useEffect(()=>{
        data && setQtdItems(data.data.length)
    }, [data])
    
    return (
        <Container>
            <Card bg='dark' text='ligth' className='mb-2 text-center p-3'>
                <Card.Body>
                    <Card.Title>
                        Itens on our my Portfolio
                    </Card.Title>
                    <Card.Text style={{fontSize: 100}}>
                        {qtdItems}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default WelcomeTab