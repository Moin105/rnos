import React from 'react'
import Button from '../../Components/Buttons/Button'
import Header from '../../Components/Header/Header'

function CustomerDashboard() {
  return (
    <div className='customer-dashboard'>
        <Header/>
        <div className='cardboard-row'>
            <div className='cardboard'>
                {/* image */}
                <h4></h4>
                <p></p>
            </div>
        </div>
        <Button/>
    </div>
  )
}

export default CustomerDashboard