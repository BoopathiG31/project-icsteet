import React from 'react'
import './Highlights.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Stack from 'react-bootstrap/esm/Stack'

const Highlights = () => {
  return (
    <section className='highlight'>
      <h1>Key Highlights</h1>
      <Container>
            <Row>
                <Col md={4} sm={6}>
                    <h5>Interdisciplinary Sessions</h5>
                    <p>Engage in thought-provoking sessions that bridge various
                    disciplines and explore their interconnectedness.</p>
                </Col>
                <Col md={4}  sm={6}>
                    <div>
                        <h5>Expert Keynote Speakers</h5>
                        <p>Learn from renowned experts who will share their insights and experiences.</p>
                    </div>
                </Col>
                
                <Col md={4}  sm={6}>
                    <div>
                        <h5>Paper Presentations</h5>
                        <p>Present your research findings and contribute to discussions on a wide range of topics.</p>
                    </div>
                </Col>
                <Col md={4}  sm={6}>
                    <div>
                        <h5>Networking Opportunities</h5>
                        <p>Connect with peers, researchers and industry
                        professionals to build collaborations and partnerships.</p>
                    </div>
                </Col>
                <Col md={4}  sm={6}>
                    <div>
                        <h5>Publication Opportunities</h5>
                        <p>Selected papers will have the opportunity to be published in Scopus indexed journals.</p>
                    </div>
                </Col>
                <Col md={4}  sm={6}>
                    <div>
                        <h5>CERADA Awards:</h5>
                        <p>Celebrate excellence with our prestigious awards, recognizing
                        outstanding contributions to the field.</p>
                    </div>
                </Col>
            </Row>
      </Container>
      
    </section>
    
  )
}

export default Highlights
