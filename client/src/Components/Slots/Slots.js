import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useFetch from '../../Hooks/useFetch'
import './Slots.css'
import axios from 'axios';

function Slots() {
    const { data,reFetch } = useFetch('/admin/slots/getslots')
    const [form, setForm] = useState([])
    const [slotid, setSlot] = useState()
    const [show, setShow] = useState(false);
    const { register, handleSubmit } = useForm();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const bookSlot = (id) => {
        setSlot(id)
        handleShow()
    }
    const approvedForms = async () => {
        try {
            const forms = await axios.get('/admin/approvedforms')
            const data = forms.data
            setForm(data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        approvedForms()
    }, [])

    const onSubmit = async (data) => {
        handleClose()
        try {
            await axios.put('/admin/slots/bookslot', data)
            reFetch()
            approvedForms()
        } catch (err) {
            console.log(err)
        }
        console.log(data)
    }
    



    return (
        <div>
            <h2 className="pb-4">BOOKING SLOTS</h2>
            <Row>
                {
                    data.map((obj) => {
                        if (!obj.isBooked) {
                            return (
                                <>
                                    <Col key={obj.id} md={1} className="emptyslot m-2" onClick={() => { bookSlot(obj.id) }}></Col>
                                </>
                            )
                        } else {
                            return (
                                <>
                                    <Col key={obj.id} md={1} className="bookedslot m-2" ></Col>

                                </>
                            )
                        }

                    })
                }
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Book A Slot</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <span>  Slot : {slotid + 1}</span>
                        <Form.Select aria-label="Default select example" {...register("application")}>
                            {form.map((obj) => {
                                return (
                                    <option value={obj._id}>{obj.application.companyName}</option>
                                )
                            })}
                        </Form.Select>
                        <input type="text" value={slotid} {...register("slot")} checked hidden/>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmit(onSubmit)}>
                            Book
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Row>

        </div>
    )
}

export default Slots