import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/profile-dropdown.css'
function ProfileModal(props){
    const navigate=useNavigate();
    const fullName=localStorage.getItem('fullName');
    const email=localStorage.getItem('email');
    const role=localStorage.getItem('role');
    function handleLogout(){
        const confirmLogout=window.confirm('Are you sure to Logout?')
        if(confirmLogout){
            localStorage.clear();
            props.closeProfileModal();
            navigate('/')
        }
    }
    return(
        <div className='profile-dropdown'>
            <p>{fullName}</p>
            <p>{email}</p>
            <p>{role}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default ProfileModal;