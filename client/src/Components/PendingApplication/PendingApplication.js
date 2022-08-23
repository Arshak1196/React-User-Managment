import React, { useState } from 'react'
import { Table, Button, Modal } from 'react-bootstrap';
import useFetch from '../../Hooks/useFetch'
import ViewForm from '../ViewForm/ViewForm';

function PendingApplication() {
    const { data, loading, error } = useFetch('/admin/forms/pending');
    const [show, setShow] = useState(false);
    function handleShow(breakpoint) {
        setShow(true);
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
                                        <Button variant="light">Approve</Button>
                                    </td>
                                    <td>
                                        <Button variant="secondary">Decline</Button>
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