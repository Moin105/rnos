import React from 'react'
// import { Interface } from 'readline'

import './Button.css'
 
interface button{
  func:Function|undefined|null,
  name:string,
  color:string,
  bg:string,
} 

export default function Button({func,name,color,bg}:button) {
  return (
    <>
    <button className='btn'  style={{color:color,background:bg}}>{name}</button>
    </>
  )
}

export function  StaticButton({func,name,color,bg}:button) {
    return (
      <>
      <button className='static-btn' style={{color:color,background:bg}}>{name}</button>
      </>
    )
}
