import React from 'react'
import { FunctionTypeNode } from 'typescript'
import './Input.css'
interface input {
  placeholder:string,
  label:string,
  type:string,
  name:string,
  value:any,
  color:string,
  onChange : (params:any)=>any
  onFocusOut:(params:any)=>any
}
export default function Input({placeholder,label,type,color,name,onChange,value,onFocusOut}:input) {
  return (
    <div className='input-container' style={{display:"block",width:"100%"}}>
    <div className='input-box'>
        <label className='label' style={{color:color}}>{label}</label>
        <input onChange={onChange} onBlur={onFocusOut} className='input' name={name} value={value}  type={type} placeholder={placeholder}/>
    </div>
    </div>
  )
}
