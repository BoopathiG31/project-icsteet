import React from 'react'
import './Session.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

//motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Session = () => {
  return (
    <section className='session-track'>
      <motion.div
        variants={fadeIn('up', 0.2)} 
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        className='session-title'>
        <h1>Session and Tracks/Call for Papers Topics</h1>
        <p className='sub-title'><i>Dive into the future with ICSTEET 2026.</i></p>
        <p className='sub-content'> <i>Our diverse sessions and tracks are designed to spark insightful discussions, foster collaboration, and drive transformative advancements across social sciences, teaching, education, engineering and
        technology.</i>
          </p>
      </motion.div>

      <h4>We invite researchers, academicians and professionals to submit their papers. Topics of
      interest include, but are not limited to:</h4>
        
            
      <motion.div 
      variants={fadeIn('Right', 0.2)} 
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
      className="session-content">
        <div className="session-1"><p><span>Session 1:</span>Emerging Technologies &amp; Education</p></div>
        <div className="session-2"><p><span>Session 2:</span>New Trends &amp; Modern approaches</p></div>
        <div className="session-3"><p><span>Session 3:</span>Education &amp; Industry Co-operation</p></div>
        <div className="session-4"><p><span>Session 4:</span>Education &amp; International Cooperation</p></div>
        <div className="session-5"><p><span>Session 5:</span>Teaching - Learning Relationship</p></div>
        <div className="session-6"><p><span>Session 6:</span>Sociology and Anthropology</p></div>
        <div className="session-7"><p><span>Session 7:</span>Psychology</p></div>
        <div className="session-8"><p><span>Session 8:</span>Social science &amp; Humanities</p></div>
        <div className="session-9"><p><span>Session 9:</span>Engineering &amp; Technology</p></div>
      </motion.div>
    </section>

  )
}

export default Session
