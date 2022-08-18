import axios from 'axios';
import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import '../LoginForm/LoginForm.css'


function LoginForm() {
  const [credentials,setCredentials]=useState({
    email:undefined,
    password:undefined
  })
  const navigate=useNavigate()
  const {loading,error,dispatch}=useContext(AuthContext);
  const handleChange=(e)=>{
    setCredentials(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleClick=async e=>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    try {
      const res = await axios.post("/login",credentials);
      dispatch({type:"LOGIN_SUCCESS",payload:res.data})
      navigate('/')
    } catch (err) {
      dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
    }
  }

  return (
      <Form className="mb-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" onChange={handleChange}  placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button disabled={loading} variant="primary" type="submit" onClick={handleClick}>
          Login
        </Button>
        {error && <p style={{'color':'red','marginTop':'20px'}}>{error.message}</p>}
      </Form>
      
  )
}

export default LoginForm