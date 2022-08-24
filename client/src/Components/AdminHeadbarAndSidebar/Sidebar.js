import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { MdAccountCircle, MdCalendarViewMonth, MdLibraryBooks, MdOutlineLogout, MdSupervisedUserCircle } from "react-icons/md";

function Sidebar() {
  const navigate=useNavigate()

  return (
    <Container className="sidebar">
      <Row>
        <Col>
          <img className="logo mx-auto d-block" alt="logo" src={process.env.REACT_APP_ADMIN_LOGO} />
          <hr style={{ 'height': '2px', 'backgroundColor': 'white' }} />
          <div className="ps-4">
            <div className="py-3" onClick={()=>{navigate('/admin/')}}>
              <MdAccountCircle />
              <span> Application List</span>
            </div>
            <div className="py-3" onClick={()=>{navigate('/admin/record')}}>
              <MdCalendarViewMonth />
              <span> Record Track</span>
            </div>
            <div className="py-3" onClick={()=>{navigate('/admin/slots')}}>
              <MdLibraryBooks />
              <span> Booking Slots</span>
            </div>
            <div className="py-3" onClick={()=>{navigate('/admin/applicants')}}>
              <MdSupervisedUserCircle />
              <span> Registered Applicants</span>
            </div>
            <div className="py-3">
              <MdOutlineLogout />
              <span> Logout</span>
            </div>

          </div>
        </Col>
      </Row>

    </Container>
  )
}

export default Sidebar
