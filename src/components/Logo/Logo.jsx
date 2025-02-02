import React from 'react'
import { assets } from '../../assets/assets'
import './Logo.css'

const Logo = () => {
  return (
    <div className='sponser-logo'>
        <div className="logo-slide">
            <div className="slide">
                <img src={assets.company_logo} alt="" height={70} width={60} />
            </div>
            <div className="slide">
                <img src={assets.clarivate} alt="" height={70} width={60} />
            </div>
            <div className="slide">
                <img src={assets.scopus} alt="" height={70} width={60} />
            </div>
            <div className="slide">
                <img src={assets.goal_4} alt="" height={70} width={60} />
            </div>
            <div className="slide">
                <img src={assets.goal_7} alt="" height={70} width={60} />
            </div>
            <div className="slide">
                <img src={assets.goal_8} alt="" height={70} width={60} />
            </div>
            <div className="slide">
                <img src={assets.goal_16} alt="" height={70} width={60} />
            </div>
        </div>  
    </div>
  )
}

export default Logo
