import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ApplicationForm.css'

function ApplicationForm() {
    const [datas,setDatas]=useState()
    return (
        // <Container fluid >
        //     <Row className="justify-content-md-center form-container" md={6}>
        //     <Col >{`md={{ span: 6, offset: 3 }}`}</Col>
        //     </Row>
        // </Container>
        <Container fluid>
            <h2 style={{ 'color': 'white' }}>APPLICATION FOR INCUBATION</h2>
            <Row className="justify-content-md-center ">
                <Col md={6} className="form-container rounded px-5">
                    <Form>
                        <Row>
                            <Col md={6} className="mt-3">
                                <Form.Label>Name<span className="required-mark">*</span></Form.Label>
                                <Form.Control type="text" required />
                            </Col>
                            <Col md={6} className="mt-3">
                                <Form.Label>Address<span className="required-mark">*</span></Form.Label>
                                <Form.Control type="text" required />
                            </Col>
                            <Col md={6} className="mt-3">
                                <Form.Label>City<span className="required-mark">*</span></Form.Label>
                                <Form.Control type="text" required />
                            </Col>
                            <Col md={6} className="mt-3">
                                <Form.Label>State<span className="required-mark">*</span></Form.Label>
                                <Form.Control type="text" required />
                            </Col>
                            <Col md={6} className="mt-3">
                                <Form.Label>Email<span className="required-mark">*</span></Form.Label>
                                <Form.Control type="email" required />
                            </Col>
                            <Col md={6} className="mt-3">
                                <Form.Label>Phone no<span className="required-mark">*</span></Form.Label>
                                <Form.Control type="number" required />
                            </Col>
                            <Col md={6} className="mt-3">
                                <Form.Label>Company Name<span className="required-mark">*</span></Form.Label>
                                <Form.Control type="text" required />
                            </Col>
                            <Col md={6} className="mt-3">
                                <Form.Label>Company Logo<span className="required-mark">*</span></Form.Label><br />
                                <img alt="Posts" width="200px" height="200px"></img>

                                <Form.Control type="file" required />
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>Describe Your Team and Background<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} />
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>Describe Your Company and Products<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} />
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>Describe the problem you are trying to solve<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} />
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>What is unique about your solution?<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} />
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>What is your value proposition for the customer?<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} />
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>What are your competitors and what is your competative advantage?<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} />
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>Explain your revenue model<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} />
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>What is the potential market size of the product?<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} />
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>How do you market or plan to market your product and services?<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} />
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>Type of incubation needed<span className="required-mark">*</span></Form.Label>
                                <Form.Check type="radio" label="Physical Incubation" />
                                <Form.Check type="radio" label="Virtual Incubation" />
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>Upload a detailed business proposal<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} />
                            </Col>
                            <Col className="my-4 text-center">
                                <Button variant="warning">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ApplicationForm