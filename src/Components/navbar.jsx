import React from 'react';
import '../styles/navbar.css';
function Navbar(props){
    return(
        <div>
            <nav className='navbar'>
                <div className='left'>
                    Resume Screening Platform
                </div>
                <div className='right'>
                <button className='nav-link-btn' onClick={props.openLoginModal}>Login</button>
                <button className='nav-link-btn' onClick={props.openRegisterModal}>Register</button>
                <button className='nav-link-btn profile-icon' onClick={
                ()=>{
                    if(props.isProfileOpen===true){
                        props.closeProfileModal()
                    }
                    else{
                        props.openProfileModal()
                    }
                }}>👤</button>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
