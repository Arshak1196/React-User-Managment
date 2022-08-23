import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MdAccountCircle, MdCalendarViewMonth, MdLibraryBooks, MdOutlineLogout, MdSupervisedUserCircle } from "react-icons/md";

function Sidebar() {
  return (
    <Container className="sidebar">
      <Row>
        <Col>
          <img className="logo mx-auto d-block" src="https://cdn-icons-png.flaticon.com/512/906/906343.png" alt="logo" />
          <hr style={{ 'height': '2px', 'backgroundColor': 'white' }} />
          <div className="ps-4">
            <div className="py-3">
              <MdAccountCircle />
              <span> Application List</span>
            </div>
            <div className="py-3">
              <MdCalendarViewMonth />
              <span> Record Track</span>
            </div>
            <div className="py-3">
              <MdLibraryBooks />
              <span> Booking Slots</span>
            </div>
            <div className="py-3">
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
