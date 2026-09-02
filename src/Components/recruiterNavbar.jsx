import React from 'react';
import {Link} from 'react-router-dom';
function RecruiterNavbar(props){
    return(
        <div>
            <nav className='navbar'>
                <div className='left'>
                    RecruiterDashboard
                </div>
                <div className='right'>
                    <Link to='/'>Home</Link>
                    <button className='nav-link-btn' onClick={props.openShowHistory}>History</button>
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
export default RecruiterNavbar
