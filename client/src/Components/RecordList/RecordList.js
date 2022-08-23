import React from 'react'
import { Table, Button } from 'react-bootstrap';
import useFetch from '../../Hooks/useFetch'

function RecordList() {

    const { data, loading, error } = useFetch('/admin/forms/new');
    return (
        <div>
            <h2 className="">RECORD LIST</h2>
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
                                      <Button  variant="warning">Pending</Button>
                                    </td>
                                    <td>
                                        <Button  variant="warning">Pending</Button>
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