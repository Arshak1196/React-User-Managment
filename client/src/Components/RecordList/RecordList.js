import React from 'react'
import { Table } from 'react-bootstrap';

import useFetch from '../../Hooks/useFetch'
import AppProgressBar from '../AppProgressBar/AppProgressBar';

function RecordList() {

    const { data, loading, error } = useFetch('/admin/allforms');
   
    return (
        <div>
            <h2 className="">RECORD LIST</h2>
            <Table bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Company Name</th>
                        <th>Company Details</th>
                        <th className='d-flex justify-content-around'>
                            <span>Registration Approved</span>
                            <span>Under Process</span>
                            <span>Approved</span>
                        </th>

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
                                        <AppProgressBar progress={obj.application.status}/>
                                    </td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default RecordList