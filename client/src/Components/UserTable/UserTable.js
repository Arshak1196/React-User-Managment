import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import EditUser from '../EditUser/EditUser'
import { ToastContainer, toast } from 'react-toastify';



function UserTable() {
    const [users, setusers] = useState([]);
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState([]);
    const getusers = async () => {
        try {
            const response = await axios.get('/admin/users')
            setusers(response.data)
            console.log(response.data)
            setFilter(response.data);

        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getusers();
    }, []) 
    const deleteUser = async (id) => {
        try {
            await axios.delete(`/admin/deleteUser/${id}`)
            getusers()
            toast.warn("User Deleted !", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
        catch (err) {
            console.log(err)
        }
    }

    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: " Phone Number",
            selector: (row) => row.mobile,
        },
        {
            name: " Email",
            selector: (row) => row.email,
        },

        {
            name: " Edit",
            selector: (row) => <EditUser name={row.name} mobile={row.mobile} email={row.email} id={row._id} reload={getusers} />
        },
        {
            name: " Delete",
            selector: (row) => <MdDelete style={{ 'color': 'red', 'fontSize': '24px' }} onClick={() => { deleteUser(row._id) }} />
        }

    ]
    useEffect(() => {
        const result = users.filter(country => {
            return country.name.toLowerCase().match(search.toLowerCase());
        })
        setFilter(result)
    }, [search])

    return (
        <>
            <h2 className="">APPLICANTS</h2>
            <div className='data-card' >
                <DataTable columns={columns}
                    data={filter}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight='900px'
                    selectableRows
                    selectableRowsHighlight
                    highlightOnHover
                    persistTableHead
                    subHeader
                    style={{ "border": "1px solid" }}
                    subHeaderComponent={<input type='text' placeholder='Search Here' className='w-25 form-control' value={search} onChange={(e) => setSearch(e.target.value)} />} />
            </div>
            <ToastContainer />
        </>

    )
}

export default UserTable