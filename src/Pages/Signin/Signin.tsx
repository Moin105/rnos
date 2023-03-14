import React from 'react'
import Button from '../../Components/Buttons/Button'
import Header from '../../Components/Header/Header'
import Heading from '../../Components/Headings/Heading'
import Input from '../../Components/Input/Input'
import './Signin.css'

function SignIn() {
  return (
    <div className='signup-container'>
        <Header color=''/>
        <div className='signup-box'>

        <Heading color="#064490" content="Create an Account" txtAlign="center" />
        <span>Already an Account</span>
        <div className='signup-form'>

             <Input onChange={()=>{}} value="" onFocusOut={()=>{}}  name='' placeholder="Email" label="Email" type="text" color="#064490"/>
             <Input onChange={()=>{}} value="" onFocusOut={()=>{}} name='' placeholder="Password" label="Password" type="text" color="#064490"/>
              <p>Forgot password?</p>
             <Button func={null}  name="Sign Up" color="#ffffff" bg="#F21B2D" />
        </div>
        <span>
        By clicking ‘Log In’ you are agreeing to our terms and conditions as well as our privacy policy.
        </span>
        </div>
    </div>
  )
}

export default SignIn