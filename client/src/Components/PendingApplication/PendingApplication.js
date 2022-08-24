import axios from 'axios';
import React, { useState } from 'react'
import { Table, Button, Modal } from 'react-bootstrap';
import useFetch from '../../Hooks/useFetch'
import ViewForm from '../ViewForm/ViewForm';

function PendingApplication() {
    const { data,reFetch } = useFetch('/admin/forms/pending');
    const [show, setShow] = useState(false);
    function handleShow(breakpoint) {
        setShow(true);
    }
    const handleApprove=async(id)=>{
        try {
            await axios.put('/admin/approve',{id})
            reFetch()
        } catch (err) {
            console.log(err)
        }
    }
    const handleDecline=async(id)=>{
        try {
            await axios.put('/admin/decline',{id})
            reFetch()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <h2 className="pt-4">PENDING APPLICATIONT LIST</h2>
            <Table bordered hover className="text-center pt-1">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Company Name</th>
                        <th>Company Details</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((obj, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{obj.application.companyName}</td>
                                    <td>{obj.application.city},{obj.application.state}</td>
                                    <td>
                                        <ViewForm {...obj.application} />
                                    </td>
                                    <td>
                                        <Button variant="light" onClick={()=>handleApprove(obj._id)}>Approve</Button>
                                    </td>
                                    <td>
                                        <Button variant="secondary" onClick={()=>handleDecline(obj._id)}>Decline</Button>
                                    </td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default PendingApplication