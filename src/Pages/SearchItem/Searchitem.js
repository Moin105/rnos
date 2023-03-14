import Input from 'antd/es/input/Input'
// import { Header } from 'antd/es/layout/layout'
import React from 'react'
import Header from '../../Components/Header/Header'
import './Searchitem.css'
import Button from '../../Components/Buttons/Button'
import { Checkbox } from 'antd'
function Searchitem() {
  return (
    <div className='search-item-container'>
        <Header/>
        <div className='search-form'>
              <Input/>
              <Input/>
              <Input/>
              <Button/>
        </div>
        <Heading/>
        <div className='filters'>
              <Input/>
              <Input/>
              <div className='checkboxes'>
                   <Checkbox/>
                   <Checkbox/>
                   <Checkbox/>
                   <Checkbox/>
              </div>
              <Input/>
              <Heading/>
              {/* 5 star  */}
              <Input/>
        </div>
        <div className='product-card'>
           {/* product image */}
           <div className='product-info-section'>
                  <div className='product-row'><h5></h5>     {/* heart*/} </div>
                  <span className='price'>price</span>
                  <p className='description'>

                  </p>
                  <Button/>
           </div>
        </div>
    </div>
  )
}

export default Searchitem