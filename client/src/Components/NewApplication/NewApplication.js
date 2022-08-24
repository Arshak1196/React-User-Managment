import axios from 'axios';
import React from 'react'
import { Table, Button } from 'react-bootstrap';
import useFetch from '../../Hooks/useFetch'
import ViewForm from '../ViewForm/ViewForm';

function NewApplication() {
    const { data,reFetch } = useFetch('/admin/forms/new');
    const handleNew=async(id)=>{
        try {
            await axios.put('/admin/pending',{id})
            reFetch()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <h2 className="">NEW APPLICANT LIST</h2>
            <Table bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Company Name</th>
                        <th>Company Details</th>
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
                                        <ViewForm {...obj.application}/>
                                    </td>
                                    <td>
                                        <Button onClick={()=>{handleNew(obj._id)}} variant="warning">Pending</Button>
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

export default NewApplication