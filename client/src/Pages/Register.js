import React from 'react'
import RegisterForm from '../Components/RegisterForm/RegisterForm';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Pages/pages.css'

function Register() {
  return (
    <React.Fragment>
      <Container >
        <h2 className='loginHeader'>Register</h2>
          <Row>
            <Col md={6}>
              <img style={{'marginBottom':'50px','maxWidth':'100%','height':'auto'}} alt='login' src={process.env.REACT_APP_LOGIN_IMAGE} />
            </Col>
            <Col md={6} ><RegisterForm/></Col>
          </Row>
      </Container>
    </React.Fragment>
  )
}

export default Register