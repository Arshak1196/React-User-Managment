import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './ApplicationForm.css'
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';


function ApplicationForm() {
    const { user } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm({defaultValues:{userId:user._id}});  
    const onSubmit = async (data) => {
        try {
            const application=await axios.put('/submitApplication',data);
            console.log(application)

        } catch (err) {
            console.log(err)
            let errdisplay=err.response.data;
            console.log(errdisplay)
        }
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
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("teamAndBackground", { required: true })}/>
                                {errors.teamAndBackground?.type === 'required' && <p className="required-mark">This field is required</p>}
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>Describe Your Company and Products<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("companyAndProduct", { required: true })}/>
                                {errors.companyAndProduct?.type === 'required' && <p className="required-mark">This field is required</p>}

                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>Describe the problem you are trying to solve<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("problem", { required: true })}/>
                                {errors.ques3?.problem === 'required' && <p className="required-mark">This field is required</p>}
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>What is unique about your solution?<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("solution", { required: true })}/>
                                {errors.solution?.type === 'required' && <p className="required-mark">This field is required</p>}
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>What is your value proposition for the customer?<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("propositionToCustomer", { required: true })}/>
                                {errors.propositionToCustomer?.type === 'required' && <p className="required-mark">This field is required</p>}
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>What are your competitors and what is your competative advantage?<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("cometativeAdvantage", { required: true })}/>
                                {errors.cometativeAdvantage?.type === 'required' && <p className="required-mark">This field is required</p>}
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>Explain your revenue model<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("revenueModel", { required: true })}/>
                                {errors.revenueModel?.type === 'required' && <p className="required-mark">This field is required</p>}
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>What is the potential market size of the product?<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("potentialMarket", { required: true })}/>
                                {errors.potentialMarket?.type === 'required' && <p className="required-mark">This field is required</p>}
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>How do you market or plan to market your product and services?<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("marketPlan", { required: true })}/>
                                {errors.marketPlan?.type === 'required' && <p className="required-mark">This field is required</p>}
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>Type of incubation needed<span className="required-mark">*</span></Form.Label>
                                <Form.Check type="radio" label="Physical Incubation" value="Physical" name="incubation" {...register("incubation", { required: true })}/>
                                <Form.Check type="radio" label="Virtual Incubation" value="Virtual" name="incubation" {...register("incubation", { required: true })}/>
                                {errors.incubation?.type === 'required' && <p className="required-mark">This field is required</p>}
                            </Col>
                            <Col md={12} className="mt-3">
                                <Form.Label>Upload a detailed business proposal<span className="required-mark">*</span></Form.Label>
                                <Form.Control as="textarea" style={{ height: '100px' }} {...register("businessProposal", { required: true })}/>
                                {errors.businessProposal?.type === 'required' && <p className="required-mark">This field is required</p>}
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