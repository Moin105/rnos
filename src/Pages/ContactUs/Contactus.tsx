import React from 'react'
import Button from '../../Components/Buttons/Button'
import Header from '../../Components/Header/Header'
import Input from '../../Components/Input/Input'
import Heading from '../../Components/Headings/Heading'
import './Contactus.css'
function Contactus() {
  return (
    <div className='contact-container'>
        <Header color=''/>
        <div>
            <Heading color='#064490' content="Create an Account" txtAlign="center"/>
            <p></p>
        </div>
        <Heading color='#064490' content="Create an Account" txtAlign="center"/>
        <span></span>
        <div className='contact-form'>
        <Input      name='' onChange={()=>{}} value="" onFocusOut={()=>{}}   placeholder="First Name" label="First Name" type="text" color="#064490"/>
             <Input name='' onChange={()=>{}} value="" onFocusOut={()=>{}} placeholder="Last Name" label="Last Name" type="text" color="#064490"/> 
             <Input name='' onChange={()=>{}} value="" onFocusOut={()=>{}} placeholder="Phone" label="Phone" type="text" color="#064490"/>
             <Input name='' onChange={()=>{}} value="" onFocusOut={()=>{}} placeholder="Email" label="Email" type="text" color="#064490"/>
             <textarea></textarea>
             {/* Mesasage */}      
             <Button func={null} name="Sign Up" color="#ffffff" bg="#F21B2D" />
        </div>
        <div className='getintouch'>
               <Heading color='#064490' content="Create an Account" txtAlign="center"/>
               <Heading color='#064490' content="Create an Account" txtAlign="center"/>
               <span></span>
               <span></span>
               <Heading color='#064490' content="Create an Account" txtAlign="center"/>
               <span></span>
        </div>
    </div>
  )
}

export default Contactus