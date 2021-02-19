import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'

const Example = (props) => {
    const [show, setShow] = useState(false);
    const { user } = props

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                View Details
      </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header>
                    <Modal.Title> {user && user.name} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> Contact Number : {user && user.phone} </p>
                    <p> Email : {user && user.email} </p>
                    <p> Skills : {user && user.skills} </p>
                    <p> Experience : {user && user.experience} </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Example