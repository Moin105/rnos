import React from 'react'
import { GiHamburgerMenu } from '../../../node_modules/react-icons/gi'
// import {GiHamburgerMenu} from '..'
import logo from '../../Images/logo.png'
import './Styles.css'
 
interface head {
    color:string;
}
 
function Header( props:head ) {
    return (
        <>
            <div className='wrapper'>
                <div className='header'>
                    <div className='header-box'>
                        <div className='logo'>
                            <img src={logo} />
                        </div>
                        <div className='ham' style={{ color: props.color }}><GiHamburgerMenu /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header