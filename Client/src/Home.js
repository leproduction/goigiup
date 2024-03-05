import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap';
import NavBarComponent from './Component/NavBar.js';
import FooterPage from './Component/Footer.js';
import ProgressiveBar from './Component/ProgressBar.js';
import ContactEmer from './Component/Contact.js';


import { motion } from 'framer-motion';
import LandingPage from './LandingPage.js';
import ReviewPage from './Component/Review.js';
import Photos from './Component/NailsSearch.js';
import PeopleCount from './Component/PeopleCount.js';
function Home() {

  return (
    <Container fluid align="center" className=" flex shadow rounded" style={{ background: 'rgba(189,195,199, 0.8)', height:"100%"}}>
      <Row>
        <NavBarComponent />
      </Row>







      <>
      <Container fluid style={{ background: "rgba(189,195,199, 0.2)", height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="shadow">

          <Row style={{width: "30%", height:"20%"}} className='justify-content-center align-items-center'>
            <Button  variant="outline-light" href="https://goigiup.com/" className='text-dark mx-0'><i className="bi bi-telephone"></i></Button>
          </Row>

      </Container>
      {/* The rest of your components */}
      <Row className='col-md-1 col-sm-1 p-1 d-flex position-fixed top-50 start-0 mx-2 gap-2'>
        <Button variant="outline-light" href="https://goigiup.com/" className='text-dark shadow'><i className="bi bi-telephone"></i></Button>
      </Row>
      <PeopleCount />
      <Container fluid className="d-flex justify-content-center align-items-center flex-wrap">
        {/* Content */}
      </Container>
    </>

      <ProgressiveBar />







       <FooterPage  />

    </Container>
  );
}

export default Home;
