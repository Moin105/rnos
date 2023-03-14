import React from 'react'
import { StaticButton } from '../Buttons/Button'
import { Mheading, Sheading } from '../Headings/Heading'
import './InfoBox.css'
function InfoBox(props) {
  return (
    <div className='text-box'> 
    {props.about == true ?    <Sheading content={props.name} color={props.color} textAlign={props.textAlign}/>:<Mheading textAlign={props.textAlign} content={props.name} color={props.color}/>}
        <p className='content'>
            {props.context}
        </p>
      {props.cimg && <img className='c-img' src={props.img} alt={props.name}/>} 
      {props.bimg && <img className='b-img' src={props.img} alt={props.name}/> }
    {props.btn &&    <StaticButton color="white" bg="#F21B2D" name="Get Started"/>}
    </div>
  )
}

export default InfoBox