import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import HeaderBar from "../../Components/AdminHeadbarAndSidebar/Headbar";
import SideNavBar from "../../Components/AdminHeadbarAndSidebar/Sidebar";
import UserTable from '../../Components/UserTable/UserTable'
import ApplicantList from './ApplicantList';
import BookingSlots from './BookingSlots';
import RecordTrack from './RecordTrack';

function AdminHome() {
  return (
    <Container fluid style={{ 'marginLeft': '-12px' }}>
      <Row>
        <Col md={2}>
          <SideNavBar />
        </Col>
        <Col md={10} style={{ 'background': 'linear-gradient(to right, #99ffcc 0%, #ffffff 100%)', 'marginLeft': '-12px' }}>
          <HeaderBar />
          <div className="ps-4 pt-2 bg-white">
          <Routes>
            <Route exact path="/" element={<ApplicantList />} />
            <Route path="/record" element={<RecordTrack />} />
            <Route path="/slots" element={<BookingSlots />} />
            <Route path="/applicants" element={<UserTable />} />
          </Routes>
          </div>
        </Col>
      </Row>
    </Container>

  )
}

export default AdminHome