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
import Tags from '../../Components/Tags/Tags'
import './About.css'
import '../../Styles/Global.css'
import Howitworks from '../../Components/HowItWorks/Howitworks'
function About() {
  return (
    <>
      <div className='background-about'>
        <Header color="#ffffff" />
        <div className='head'>
          <Heading color="white" content="What is Rent and offer?" textAlign="center" />
          <p className='texta'>
          The Rent and Offer is leveling up the consumer-to-consumer industry. We created The Rent and Offer to allow individuals to save and earn money. Why buy expensive items you’ll rarely use when you can Rent items in your community for low prices instead? As a lender you will earn money for items you already have and on the schedule you want. You can also rent out space for unique and private experiences.
          </p>  
          <Button name="Show me" color="#ffffff" bg="#F21B2D" />
        </div>
        <div className='about-us'>
        <Heading color="#F21B2D" content="About Us" textAlign="center" />
           <p>Sitting in a neighborhood pool one day, cofounders and brothers Ryan & Kevin Reese thought it would be nice to have more seclusion for their families. They realized the sharing marketplace did not have an all-inclusive option for all items or experiences. From this, The BorrowVerse was born.
</p>
           <p>Our vision is to create the top sharing marketplace for all items and experiences. </p>
            <button className='see-more'>
                    <span>See More</span>
            </button>
            <div  className="sinta">
                <img alt='car' src={img}/>
            </div>
         
            
        </div>
          <div className='info-box'>
            <Heading color="#F21B2D" content="OUR MISSION" textAlign="left"/>
              <InfoBox bimg={true} about={true} textAlign="left" color="#064490" name="More Memories, Less Money" context="Our mission is to create lifelong memories for families and friends by partnering with lenders to make experiences accessible for all." img={img2} btn={false}/>
         </div>
        
         <div className='info-box'>
              <InfoBox cimg={true} about={false} color="#064490" textAlign="left" name="Lender" context="Have a camera that is often unused? Our purpose is to help you earn money with what you already own. Create an account and post any space or item on your account. Then set your terms. Post as many items as you want and get paid." img={img2} btn={false}/>
              <InfoBox cimg={true} about={false} color="#064490" textAlign="left" name="Borrowers" context="Do you need a camera for family pictures? A nice backyard for a birthday party? Our purpose is to help connect you with what you are looking for. Create an account and rent any item or experience near you. When you are done, give the lender a rating on their page and search for your next adventure." img={img2} btn={false}/>

         </div>
          <div className='hiw'>
          <Howitworks/>
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
export default About