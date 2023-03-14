import React from 'react'
import Button from '../../Components/Buttons/Button'
import Category from '../../Components/Category/Category'
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
import Header from '../../Components/Header/Header'
import Heading, { Mheading } from '../../Components/Headings/Heading'
import InfoBox from '../../Components/InfoBox/InfoBox'
import Input from '../../Components/Input/Input'
import img from '../../Images/about1.png'
import img2 from '../../Images/sigma.png'
import img3 from '../../Images/sigma3.png'
import img4 from '../../Images/sigma4.png'
import img1 from '../../Images/sigma2.png'

import Tags from '../../Components/Tags/Tags'
import './Hiw.css'
import '../../Styles/Global.css'
import Howitworks from '../../Components/HowItWorks/Howitworks'
function Hiw() {
  return (
    <>
      <div className='background-hiw'>
        <Header color="#ffffff" />
        <div className='head'>
          <Heading color="white" content="How It works" textAlign="center" />
           <h5>A sharing market place for everythings </h5>
          <p className='texta'>
          As a lender you will earn money for items you already have and on the schedule you want. You can also rent out space for unique and private experiences.          </p>  
          <Button name="Learn More" color="#ffffff" bg="#F21B2D" />
        </div>
        <div className='hiw-us'>
        <Heading color="#F21B2D" content="Post and Rent" textAlign="center" />
            <div  className="hiw-img">
                <img alt='car' src={img3}/>
            </div>
            <p>Our method is simple. Create an account. Post items. Explore items and experiences in your area and Rent them. If you are on vacation and need to rent something, The Rent and Offer can provide cost affordable options. The whole process keeps money in your hands. </p>  
        </div>
        <div className='hiw-us'>
        <Heading color="#F21B2D" content="Get Rewarded" textAlign="center" />
            <div  className="hiw-img">
                <img alt='car' src={img4}/>
            </div>
            <p>Our site allows lenders to track each transaction and transfer money into their account quickly. Lenders are true partners and reap the rewards. Higher ratings leads to more visibility, more reservations, and more income for you.</p>  
        </div>
          {/* <div className='info-box'>
            <Heading color="#F21B2D" content="OUR MISSION" textAlign="left"/>
              <InfoBox bimg={true} about={true} textAlign="left" color="#064490" name="More Memories, Less Money" context="Our mission is to create lifelong memories for families and friends by partnering with lenders to make experiences accessible for all." img={img2} btn={false}/>
         </div>
        
         <div className='info-box'>
              <InfoBox cimg={true} about={false} color="#064490" textAlign="left" name="Lender" context="Have a camera that is often unused? Our purpose is to help you earn money with what you already own. Create an account and post any space or item on your account. Then set your terms. Post as many items as you want and get paid." img={img2} btn={false}/>
              <InfoBox cimg={true} about={false} color="#064490" textAlign="left" name="Borrowers" context="Do you need a camera for family pictures? A nice backyard for a birthday party? Our purpose is to help connect you with what you are looking for. Create an account and rent any item or experience near you. When you are done, give the lender a rating on their page and search for your next adventure." img={img2} btn={false}/>

         </div> */}
          <div className='hiw'>
          <Howitworks/>
         </div>
         <div className='info-box'>
              <InfoBox cimg={true} about={false} textAlign="center"  name="Become a Lender Today!" context="Have items that you use infrequently? Post them here! Becoming a lender is easy. The rent&offer provides lenders the opportunity to earn additional income. Create an account and get started in minutes." img={img1} btn={true} color="#064490"/>
         </div>
        {/*  <div>
        <Heading/>
        <div>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
        </div>
    </div> */}
      </div>
    </>
  )
}
export default Hiw