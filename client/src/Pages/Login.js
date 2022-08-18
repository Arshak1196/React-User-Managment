import React from 'react'
import LoginForm from '../Components/LoginForm/LoginForm'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Pages/pages.css'

function Login(props) {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <Container  >
        <h2 className='loginHeader '>{props.name} Login</h2>
        <Row>
          <Col md={6} >
            <img style={{ 'marginBottom': '50px', 'maxWidth': '100%', 'height': 'auto' }} alt='login' src={process.env.REACT_APP_LOGIN_IMAGE} />
          </Col>
          <Col md={6}>
            <LoginForm />
            {props.name==='User'?<p className="registerLink" onClick={() => { navigate('/register') }}>
              Register as new User
            </p>:''}
            
          </Col>
        </Row>
      </Container>
    </React.Fragment>

  )
}

export default Login