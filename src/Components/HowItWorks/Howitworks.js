import React from 'react'
import Heading from '../Headings/Heading'
import './howitworks.css'
import step1 from '../../Images/step1.png'
import step2 from '../../Images/step2.png'
import step3 from '../../Images/step3.png'
import { StaticButton } from '../Buttons/Button'
function Howitworks() {
    return (
        <div className='hwitworks'>
            <Heading content="How It Works" color="#F21B2D" textAlign="center" />
            <div className='hiw-row'>
                <img src={step1} className='left' />
                <div className='right'>
                    <h5 className='h5'>Create an account</h5>
                    <p>Sign up to be a borrower and a lender.</p>
                </div>
            </div>
            <div className='hiw-row' style={{ flexDirection: "row-reverse" }}>
                <img src={step2} className='left' />
                <div className='right'>
                    <h5 className='h5'>Post an Item or
                        Experience</h5>
                    <p>Post items to rent. Borrow
                        items from others.</p>
                </div>
            </div>
            <div className='hiw-row'>
                <img src={step3} className='left' />
                <div className='right'>
                    <h5 className='h5'>Rent and Return
                        With Ease</h5>
                    <p>User portals allow for seamless communication.</p>
                </div>
               
                {/* <StaticButton /> */}
            </div> 
            <StaticButton color="white" bg="#F21B2D" name="Get Started"/>
        </div>
    )
}

export default Howitworks