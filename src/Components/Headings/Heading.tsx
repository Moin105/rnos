import * as React from 'react'
import './Styles.css'
interface heading{
  color:string,
  txtAlign:any,
  content:string
}
export default function Heading({color,txtAlign,content}:heading) {
  return (
    <h2 className='heading' style={{color:color,textAlign: txtAlign}}>{content}</h2>
  )
}
 
export function Mheading({color,txtAlign,content}:heading){
    return (
        <h3 className='mheading' style={{color:color,textAlign: txtAlign}}>{content}</h3>
    )
}
export function Sheading({color,txtAlign,content}:heading){
    return (
        <h4  className='sheading'style={{color:color,textAlign: txtAlign}}>{content}</h4>
    )
}