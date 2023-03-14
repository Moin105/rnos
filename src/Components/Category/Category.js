import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import { Sheading } from '../Headings/Heading'
import './Category.css'
function Category(props) {
    return (
        <>
            <div className='category-container'>
                <div className='category-row1'>
                      <Sheading  content={props.name} color="#F21B2D"/>
                      <span>view more</span>
                </div>
                <div className='category-row1'>
                      <CategoryCard/>
                </div>
            </div>
        </>
    )
}

export default Category