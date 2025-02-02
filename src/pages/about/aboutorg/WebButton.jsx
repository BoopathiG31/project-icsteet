import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import './WebButton.css'

const WebButton = () => {
  return (
    <>
      <div className="visit-page">
            <div>
                <h1>Visit Our</h1>
            </div>
            <div className="web-link">
                <button><span>Primary Website</span></button>
                <button><span>Institutional Membership</span></button>
                <button><span>Professional Membership</span></button>
                <button><span>Student Membership</span></button>
            </div>
            
        </div>
    </>
  )
}

export default WebButton
