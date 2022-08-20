import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../LoginForm/LoginForm.css'
import axios from 'axios';

function RegisterForm() {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        name: undefined,
        email: undefined,
        mobile: undefined,
        password: undefined,
    })
    const [error,setError]=useState({
        state:false,
        message:undefined
    })
    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit=async e=>{
        e.preventDefault()
        try {
            const data=await axios.post('/signup',credentials)
            if(data){
                navigate('/login')
            }

        } catch (err) {
            console.log(err)
            let errdisplay=err.response.data.message
            console.log(errdisplay)
            setError(prev => ({state:true,message:errdisplay }))
        }
      }
    
    return (
        <div>
            <Form className="mb-3" onSubmit={(e)=>handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" onChange={handleChange} placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="number" name="mobile" onChange={handleChange} placeholder="Enter phone no." />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            {error.state && <p style={{'color':'red','marginTop':'20px'}}>{error.message}</p>}
            <p className="registerLink" onClick={() => { navigate('/login') }}>
                Already have an account?
            </p>
        </div>
    )
}

export default RegisterForm