import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/Container'
import Objectives from './Objectives'
import Conference from './Conference'

const About = () => {
  return (
    <>
      <Container fluid>
        <div className="about">
          <h1>About ICSTEET</h1>
          <Row>
            <Col lg={6} md= {6} sm={12}>
              <div className="about-content">
                <p>The 2nd <span>International Conference on Social Sciences, Teaching &amp; Education,Engineering and Technology (ICSTEET-2026) </span>
                unites top academic scientists,
                researchers, and scholars to exchange experiences and share groundbreaking
                research. This conference offers an interdisciplinary platform to present new advances
                in Education, Engineering &amp; Technology, Social Sciences and Humanities. Join us to
                explore cutting-edge research, foster interdisciplinary collaborations and network with
                peers worldwide.</p>
              </div>
            </Col>
            <Col lg={6} md= {6} sm={12}>
              <div className="about-image">
                <img src={assets.about} alt="" />
              </div>
            </Col>
          </Row>
        </div>
        <div className='about-content-2'>
          <p>Our commitment is to provide a conducive environment where innovative ideas can
            flourish, and diverse disciplines can converge. Attendees will have the opportunity to
            engage with the latest research methodologies, technological advancements and
            pedagogical innovations, ensuring a comprehensive and enriching experience.
          </p>
        </div>
      </Container>
      <Objectives/>
      <Conference/>
      
      
    </>
  )
}

export default About
