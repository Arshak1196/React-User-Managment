import React from 'react'
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './ApplicationForm.css'


function ApplicationForm() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Container fluid>
            <h2 style={{ 'color': 'white' }}>APPLICATION FOR INCUBATION</h2>
            <Row className="justify-content-md-center ">
                <Col md={6} className="form-container rounded px-5 mb-4">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col md={6} className="mt-3">
                                <Form.Label>Name<span className="required-mark">*</span></Form.Label>
                                <Form.Control type="text" {...register("name", { required: true, pattern: /^[A-Za-z]+$/, })} />
                                {errors.name?.type === 'required' && <p className="required-mark">Name is required</p>}
                                {errors.name?.type === 'pattern' && <p className="required-mark">Alphabet characters only</p>}
                            </Col>
                            <Col md={6} className="mt-3">
                                <Form.Label>Address<span className="required-mark">*</span></Form.Label>
                                <Form.Control type="text" {...register("address", { required: "Address is required" })} />
                                <p className="required-mark">{errors.address?.message}</p>
                            </Col>
                            <Col md={6} className="mt-3">
                                <Form.Label>City<span className="required-mark">*</span></Form.Label>
                                <Form.Control type="text"  {...register("city", { required: true, pattern: /^[A-Za-z]+$/ })} />
                                {errors.city?.type === 'required' && <p className="required-mark">City is required</p>}
                                {errors.city?.type === 'pattern' && <p className="required-mark">Alphabet characters only</p>}
                            </Col>
                            <Col md={6} className="mt-3">
                                <Form.Label>State<span className="required-mark">*</span></Form.Label>
                                <Form.Control type="text"  {...register("state", { required: true, pattern: /^[A-Za-z]+$/ })} />
                                {errors.state?.type === 'required' && <p className="required-mark">State is required</p>}
                                {errors.state?.type === 'pattern' && <p className="required-mark">Alphabet characters only</p>}
                            </Col>
                            <Col md={6} className="mt-3">
                                <Form.Label>Email<span className="required-mark">*</span></Form.Label>
                                <Form.Control type="text"  {...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} />
                                {errors.email?.type === 'required' && <p className="required-mark">Email is required</p>}
                                {errors.email?.type === 'pattern' && <p className="required-mark">Email is not Valid</p>}
                            </Col>
                            <Col md={6} className="mt-3">
                                <Form.Label>Phone no<span className="required-mark">*</span></Form.Label>
                                <Form.Control type="text"  {...register("phone", { required: true, pattern: /^[0-9]+$/ ,minLength:10})} />
                                {errors.phone?.type === 'required' && <p className="required-mark">Phone number is required</p>}
                                {errors.phone?.type === 'pattern' && <p className="required-mark">Incorrect Format</p>}
                                {errors.phone?.type === 'minLength' && <p className="required-mark">Contain atleast 10 numbers</p>}
                            </Col>
                            <Col md={6} className="mt-3">
                                <Form.Label>Company Name<span className="required-mark">*</span></Form.Label>
                                <Form.Control type="text" {...register("companyName", { required: true })} />
                                {errors.companyName?.type === 'required' && <p className="required-mark">Comapny Name is required</p>}
                            </Col>
                            <Col md={6} className="mt-3">
                                <Form.Label>Company Logo<span className="required-mark">*</span></Form.Label><br />
                                <img alt="Posts" width="200px" height="200px"></img>
                                <Form.Control type="file" {...register("logo", { required: true })}/>
                                {errors.logo?.type === 'required' && <p className="required-mark">Logo is required</p>}

                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>Describe Your Team and Background<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("ques1", { required: true })}/>
                                {errors.ques1?.type === 'required' && <p className="required-mark">This field is required</p>}
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>Describe Your Company and Products<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("ques2", { required: true })}/>
                                {errors.ques2?.type === 'required' && <p className="required-mark">This field is required</p>}

                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>Describe the problem you are trying to solve<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("ques3", { required: true })}/>
                                {errors.ques3?.type === 'required' && <p className="required-mark">This field is required</p>}
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>What is unique about your solution?<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("ques4", { required: true })}/>
                                {errors.ques4?.type === 'required' && <p className="required-mark">This field is required</p>}
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>What is your value proposition for the customer?<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("ques5", { required: true })}/>
                                {errors.ques5?.type === 'required' && <p className="required-mark">This field is required</p>}
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>What are your competitors and what is your competative advantage?<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("ques6", { required: true })}/>
                                {errors.ques6?.type === 'required' && <p className="required-mark">This field is required</p>}
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>Explain your revenue model<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("ques7", { required: true })}/>
                                {errors.ques7?.type === 'required' && <p className="required-mark">This field is required</p>}
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>What is the potential market size of the product?<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("ques8", { required: true })}/>
                                {errors.ques8?.type === 'required' && <p className="required-mark">This field is required</p>}
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>How do you market or plan to market your product and services?<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("ques9", { required: true })}/>
                                {errors.ques9?.type === 'required' && <p className="required-mark">This field is required</p>}
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>Type of incubation needed<span className="required-mark">*</span></Form.Label>
                                <Form.Check type="radio" label="Physical Incubation" value="Physical" name="incubation" {...register("incubation", { required: true })}/>
                                <Form.Check type="radio" label="Virtual Incubation" value="Virtual" name="incubation" {...register("incubation", { required: true })}/>
                                {errors.incubation?.type === 'required' && <p className="required-mark">This field is required</p>}
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>Upload a detailed business proposal<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("ques10", { required: true })}/>
                                {errors.ques10?.type === 'required' && <p className="required-mark">This field is required</p>}
                            </Col>
                            <Col className="my-4 text-center">
                                <Button type="submit" variant="warning">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ApplicationForm