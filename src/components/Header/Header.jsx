import React from 'react'
import './Header.css'
import {assets} from '../../assets/assets'

const Header = () => {
  return (
    <>
      <div className='main-banner'>
        <div className='header-content'>
          <h1>2nd International Conference on Social Sciences, Teaching &amp; Education, Engineering and Technology (ICSTEET)</h1>
          <h4>
            Theme: <span>Bridging the Gap</span>: Innovations and Challenges in Social Sciences,
            Teaching &amp; Education, Engineering and Technology&quot;
          </h4>
          <div className='event-detail'>
            <h5>Conference Details</h5>
            <p><span>Date:</span>29-30 January, 2026</p>
            <p><span>City, Country:</span>Manila, Philippines</p>
            <p><span>Organized by:</span>Confworld Educational Research and Development Association</p>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Header
