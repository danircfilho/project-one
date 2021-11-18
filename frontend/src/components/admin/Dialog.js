import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Dialog = ( {show, setShow, currentAction, children, slug} ) => {
    //fechar após as ações CRUD (pega o currentAction e executa a função em uma nova variável - handleAction)
    const handleAction = () => {
        currentAction.callback(slug, children[1].props)
        setShow(false)
    }
    return (
        <Modal
            animation={false} 
            show ={show}
            onHide={()=>setShow(false)}
            backdrop="static"
            keyboard={false}    
            size="lg"        
        >
                <Modal.Header /* closeButton - (X - na janela) arrumar depois */>
                    <Modal.Title>
                        {currentAction.header} {slug}
                    </Modal.Title>                    
                </Modal.Header> 
                <Modal.Body>
                    {children} {/* aqui será renderizado tudo o que for children (de outros componentes) */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShow(false)}>Close</Button>
                    <Button 
                        variant={currentAction.btnVariant} 
                        onClick={()=>handleAction()}>{currentAction.btnLabel}
                    </Button>
                </Modal.Footer>
        </Modal>
    )
}

export default Dialog
