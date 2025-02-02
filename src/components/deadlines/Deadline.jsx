import React from 'react'
import {} from '../../assets/assets'
import './Deadline.css'

const Deadline = () => {
  return (
    <section className='deadline'>
        <div>
            <h1>Submission Deadlines</h1>
            <div className="deadline-date">
              <div>
                <p>Early bird registration deadline</p>
                <h6><span>30 April 2025</span></h6>
              </div>
              <div>
                <p>Abstract submission</p>
                <h6><span>1 April 2025</span></h6>
              </div>
              <div>
                <p>Full paper submission</p>
                <h6><span>31 May 2025</span></h6>
              </div>
              <div>
                <p>Final registration</p>
                <h6><span>30 June 2025</span></h6>
              </div>
            </div>
        </div>
        <div>
          <p>For detailed submission guidelines, please visit the<a href=""></a></p>
        </div>
        
    </section>
    

  )
}

export default Deadline
