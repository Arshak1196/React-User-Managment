import React, { useState } from 'react'
import { Button, Modal, Container, Row, Col, Form } from 'react-bootstrap';

function ViewForm(props) {
    const [show, setShow] = useState(false);
    function handleShow() {
        setShow(true);
    }

    return (
        <>
            <Button variant="dark" onClick={() => handleShow()}>Open</Button>
            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Application Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container fluid>
                        <h2 style={{ 'color': 'white' }}>APPLICATION FOR INCUBATION</h2>
                        <Row className="justify-content-md-center ">
                            <Col md={6} className="form-container rounded px-5">
                                    <Row>
                                        <Col md={6} className="mt-3">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" defaultValue={props.name} disabled />
                                        </Col>
                                        <Col md={6} className="mt-3">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control type="text" defaultValue={props.address} disabled />
                                        </Col>
                                        <Col md={6} className="mt-3">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control type="text" defaultValue={props.city} disabled />
                                        </Col>
                                        <Col md={6} className="mt-3">
                                            <Form.Label>State</Form.Label>
                                            <Form.Control type="text" defaultValue={props.state} disabled />
                                        </Col>
                                        <Col md={6} className="mt-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" defaultValue={props.email} disabled />
                                        </Col>
                                        <Col md={6} className="mt-3">
                                            <Form.Label>Phone no</Form.Label>
                                            <Form.Control type="text" defaultValue={props.phone} disabled />
                                        </Col>
                                        <Col md={6} className="mt-3">
                                            <Form.Label>Company Name</Form.Label>
                                            <Form.Control type="text" defaultValue={props.companyName} disabled />
                                        </Col>
                                        <Col md={6} className="mt-3">
                                            <Form.Label>Company Logo</Form.Label><br />
                                            <img alt="Posts" width="200px" height="200px"></img>

                                        </Col>
                                        <Col md={12} className="mt-3">
                                            <Form.Label>Describe Your Team and Background</Form.Label>
                                            <Form.Control as="textarea" style={{ height: '100px' }} defaultValue={props.teamAndBackground} disabled />
                                        </Col>
                                        <Col md={12} className="mt-3">
                                            <Form.Label>Describe Your Company and Products</Form.Label>
                                            <Form.Control as="textarea" style={{ height: '100px' }} defaultValue={props.companyAndProduct} disabled />

                                        </Col>
                                        <Col md={12} className="mt-3">
                                            <Form.Label>Describe the problem you are trying to solve</Form.Label>
                                            <Form.Control as="textarea" style={{ height: '100px' }} defaultValue={props.problem} disabled />
                                        </Col>
                                        <Col md={12} className="mt-3">
                                            <Form.Label>What is unique about your solution?</Form.Label>
                                            <Form.Control as="textarea" style={{ height: '100px' }} defaultValue={props.solution} disabled />
                                        </Col>
                                        <Col md={12} className="mt-3">
                                            <Form.Label>What is your value proposition for the customer?</Form.Label>
                                            <Form.Control as="textarea" style={{ height: '100px' }} defaultValue={props.propositionToCustomer} disabled />
                                        </Col>
                                        <Col md={12} className="mt-3">
                                            <Form.Label>What are your competitors and what is your competative advantage?</Form.Label>
                                            <Form.Control as="textarea" style={{ height: '100px' }} defaultValue={props.cometativeAdvantage} disabled />
                                        </Col>
                                        <Col md={12} className="mt-3">
                                            <Form.Label>Explain your revenue model</Form.Label>
                                            <Form.Control as="textarea" style={{ height: '100px' }} defaultValue={props.revenueModel} disabled />
                                        </Col>
                                        <Col md={12} className="mt-3">
                                            <Form.Label>What is the potential market size of the product?</Form.Label>
                                            <Form.Control as="textarea" style={{ height: '100px' }} defaultValue={props.potentialMarket} disabled />
                                        </Col>
                                        <Col md={12} className="mt-3">
                                            <Form.Label>How do you market or plan to market your product and services?</Form.Label>
                                            <Form.Control as="textarea" style={{ height: '100px' }} defaultValue={props.marketPlan} disabled />
                                        </Col>
                                        <Col md={12} className="mt-3">
                                            <Form.Label>Type of incubation needed</Form.Label>
                                            <Form.Control type="text" defaultValue={props.incubation} disabled />
                                        </Col>
                                        <Col md={12} className="mt-3 mb-3">
                                            <Form.Label>Upload a detailed business proposal</Form.Label>
                                            <Form.Control as="textarea" style={{ height: '100px' }} defaultValue={props.businessProposal} disabled />
                                        </Col>
                                    </Row>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ViewForm