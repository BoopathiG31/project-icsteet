import React from 'react'
import './AboutOrg.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import WebButton from './WebButton'
import { assets } from '../../../assets/assets'

const AboutOrg = () => {
  return (
    <div className='about-head'>
       <h1>About Organizer</h1>
       <Container>
            <Row>
                <Col lg={6} md= {6} sm={12}>
                    <div className="about-content">
                        <p>The Confworld Educational Research And Development Association (CERADA) is an
                            internationally recognized, globally operating multidisciplinary professional research and
                            development association. Confworld Educational Research and Development
                            Association (CERADA) aims to integrate researchers and academicians working in the
                            micro disciplines of science and technology, fostering collaboration and innovation
                            across a broad spectrum of fields.</p>
                        <p>We organize top-tier international conferences, offering a platform for researchers and
                            professionals to present their work, share ideas and network.</p>
                        <p>Our publication services support the submission of research papers to reputable, double
                            blind peer-reviewed journals, ensuring successful publication through editing and peer-
                            review assistance.</p>
                    </div>
                </Col>
                <Col lg={6} md= {6} sm={12}>
                    <div><img src={assets.about_org} alt="" /></div>
                </Col>
            </Row>
            <Row>
                <Col lg={6} md= {6} sm={12}>
                    <div className="about-mission">
                        <div>
                            <h3>Our Mission</h3>
                            <p>Confworld Educational Research and Development Association (CERADA) advances
                                global education and research through international conferences, research assistance,
                                and collaborative publications, fostering an inclusive environment for knowledge sharing
                                and innovation.
                            </p>
                        </div>
            
                    </div>
                    
                </Col>
                <Col lg={6} md= {6} sm={12}>
                    <div className="about-mission">
                        <div>
                            <h3>Our Vision</h3>
                            <p>Confworld Educational Research and Development Association (CERADA) advances
                                global education and research through international conferences, research assistance,
                                and collaborative publications, fostering an inclusive environment for knowledge sharing
                                and innovation.
                            </p>
                        </div>
                    </div> 
                </Col>
            </Row>
        <div className="about-content-2">
            <div>
                <h1>What we do</h1>
                <p>Confworld Educational Research and Development Association (CERADA) dedicated to
                    building a dynamic community of professionals, educators, researchers and innovators
                    in the realms of engineering, science &amp; technology, business &amp; management, social
                    sciences &amp; humanities and education. As part of this mission, we offer a platform that
                    enables:
                </p>
            </div>
            <Row>
                <Col lg={3} md= {6} sm={12}>
                    <div className="about-vision">
                        <div>
                            <p>CERADA organizes a wide range of educational initiatives, which includes
                                conferences, workshops, webinars, guest lectures, seminars, short-term training
                                programs, public education programs and faculty development programs, all
                                focused on Engineering and Science &amp; Technology.
                            </p>
                        </div>
            
                    </div>
                    
                </Col>
                <Col lg={3} md= {6} sm={12}>
                    <div className="about-vision">
                        <div>
                            <p>
                                With a focus on curiosity, innovation and the latest trends in Engineering and
                                Technology, CERADA is devoted to advancing knowledge in these fields.
                            </p>
                        </div>
                    </div> 
                </Col>
                <Col lg={3} md= {6} sm={12}>
                    <div className="about-vision">
                        <div>
                            <p>
                            We are committed to provide easy access to academic resources and support for
                            aspiring students and research scholars from both urban and rural areas.
                            </p>
                        </div>
                    </div> 
                </Col>
                <Col lg={3} md= {6} sm={12}>
                    <div className="about-vision">
                        <div>
                            <p>
                            We are committed to fostering partnerships with universities, organizations, and
                            associations to promote knowledge sharing and work collectively toward building
                            a better future.
                            </p>
                        </div>
                    </div> 
                </Col>
            </Row>
        </div>
       </Container>
       <WebButton/>  
    </div>
  )
}

export default AboutOrg
