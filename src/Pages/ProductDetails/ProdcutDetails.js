import React from 'react'
import Header from '../../Components/Header/Header'
import Heading from '../../Components/Header/Header'
function ProdcutDetails() {
  return (
    <div className='product-details'>
    <Header/>
    <Heading/>
    <div className='product-card'>
           {/* product image */}
           <div className='product-info-section'>
                  <div className='product-row'><h5></h5>     {/* heart*/} </div>
                  <span className='price'>price</span>
                  <p className='description'></p>
                  <div className='stats-row'> 
                       <div className='box'><Heading/><span className='black-stat'></span></div>
                       <div className='box'><Heading/><span className='black-stat'></span></div>
                       <div className='box'><Heading/><span className='black-stat'></span></div>
                  </div>
                  <Button/>
           </div>
    </div>
    <div className='product-rules'>
      <div className='product-rule-box'><Heading/> <p className='description'></p> </div> 
      <div className='product-rule-box'><Heading/> <p className='description'></p> </div> 
      <div className='product-rule-box'><Heading/> <p className='description'></p> </div> 
    </div>
    <div className='location'>
      {/* map */}
    </div>
    </div>
  )
}

export default ProdcutDetails