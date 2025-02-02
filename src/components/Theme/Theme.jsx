import React from 'react'
import './Theme.css'
//motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
import { assets } from '../../assets/assets'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Theme = () => {
  return (
    <motion.div className='welcome'>
        <motion.div 
        variants={fadeIn('up', 0.2)} 
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}

         className="welcome-content">
            <h1>Welcome to ICSTEET 2026</h1>
            <p>The <b>International Conference on Social Sciences, Teaching &amp; Education, Engineering, and Technology (ICSTEET)</b> 
                is back for its <b>second edition </b> and we are excited to invite you to
                join us in this groundbreaking event! ICSTEET-2026 will bring together <b>leading scholars, industry experts, academics</b> 
                and <b>researchers </b> from around the world to explore the latest
                advancements and tackle the challenges faced by interdisciplinary fields.
            </p>
        </motion.div>

        <motion.div 
            variants={fadeIn('up', 0.2)} 
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}

            className="about-content"> 
                <h1>About ICSTEET</h1>
                <p>ICSTEET unites top academic scientists, researchers, and scholars to exchange
                    experiences and share groundbreaking research. This conference offers an
                    interdisciplinary platform to present new advances in Education, Engineering &amp;
                    Technology, Social Sciences and Humanities. Join us to explore cutting-edge research,
                    foster interdisciplinary collaborations and network with peers worldwide.
                </p>      
        </motion.div>
                

   
            
        <div className="conference-theme">
            <Container fluid>
                <div className="them-content">
                    <h1>Conference Theme</h1>
                    <h3>&quot;Bridging the Gap: Innovations and Challenges in Social Sciences, Teaching &amp;
                        Education, Engineering and Technology&quot;
                    </h3>
                </div>
                <Row>
                    <Col lg={6} md= {6} sm={12} >
                        <img src={assets.seminar} alt="" />
                    </Col>
                    <Col lg={6} md= {6} sm={12}>
                        <p>ICSTEET-2026 aims to bring together scholars, researchers, and industry experts to explore how
                            innovations in <b>social sciences, teaching</b>  and <b>education and engineering and technology</b>  can
                            bridge gaps in knowledge, industry practices and global challenges. This conference will
                            emphasize <b>interdisciplinary approaches</b>  that address contemporary challenges, inspire future
                            research and encourage collaboration for global sustainability.
                        </p>
                        <p>The conference is dedicated to the dissemination of cutting-edge knowledge, groundbreaking
                            discoveries and innovative practices in areas such as emerging educational technologies,
                            innovative teaching methods, industry-academia collaboration and advancements in sociology,
                            psychology, humanities, engineering and technology. It offers a platform for expert researchers
                            to showcase their work, connect with peers and publish their findings in Scopus-indexed
                            journals. Attendees will gain inspiration from the experiences and insights shared by
                            distinguished keynote speakers, industry leaders and session presenters.
                        </p>
                    </Col>
                </Row>

            </Container>  
        </div>
    </motion.div>
  )
}

export default Theme
