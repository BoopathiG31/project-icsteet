import React from 'react'
import './Proceeding.css'
import { assets } from '../../assets/assets'

const Proceeding = () => {
  return (
    <>
        <div className="proceeding">
            <h1>Proceedings &amp; Publications</h1>
            <div className="publication-logo">
                <div>
                    <img src={assets.scopus} alt="" />
                </div>
                <div>
                    <img src={assets.clarivate} alt="" />
                </div>
                <div>
                    <img src={assets.scopus} alt="" />
                </div>
            </div>
        </div>
      
    </>
  )
}

export default Proceeding
