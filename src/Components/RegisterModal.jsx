import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../styles/registermodal.css';
import CandidateDashboard from '../pages/candidateDashboard';
function Form(props){
    const[fullName,setFullName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmpassword,setConfirmPassword]=useState('');
    const[role,setRole]=useState('');
    const navigate=useNavigate();
    function handleFullName(event){
        setFullName(event.target.value);
    }
    function handleEmail(event){
        setEmail(event.target.value)
    }
    function handlePassword(event){
        setPassword(event.target.value)
    }
    function handleConfirmPassword(event){
        setConfirmPassword(event.target.value);
    }
    function handleRole(event){
        setRole(event.target.value);
    }
    async function handleSubmit(event){
        event.preventDefault();
        if(password!=confirmpassword){
            alert("passwords dont match");
            return;
        }
        const userData={
            fullName,
            email,
            password,
            role
        }
        try
        {
            const response=await axios.post('http://localhost:5000/register',userData);
            console.log(response.data);
            localStorage.setItem('fullName',response.data.fullName);
            localStorage.setItem('email',response.data.email);
            localStorage.setItem('role',response.data.role);
            alert(response.data.message);
            props.closeRegisterModal();
            if(response.data.role==='Candidate'){
                navigate('/candidate-dashboard')
            }
            if(response.data.role==='Recruiter'){
                navigate('/recruiter-dashboard')
            }
        }
        catch(err){
            console.log(err);
            alert(err.response.data.message);
        }
    }
    return(
        <div className='overlay'>
        <div className='modal'>
            <form onSubmit={handleSubmit}>
                <div className='modalHeader'>
                    <h1>CREATE ACCOUNT</h1>
                    <button type="button" onClick={props.closeRegisterModal} className='close-btn'>✕</button>
                </div>
                <div>
                    <label>FullName</label>
                    <input type="text" value={fullName} onChange={handleFullName} required/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={handleEmail} required/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={handlePassword} required/>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" value={confirmpassword} onChange={handleConfirmPassword} required/>
                </div>
                <div className='RoleGroup'>
                    <label>    Role</label>
                    <label>
                    <input name='role' type="radio" value='Candidate' onChange={handleRole} required/>
                    Candidate</label>
                    <label>
                    <input name='role' type="radio" value='Recruiter' onChange={handleRole} required/>
                    Recruiter</label>
                </div>
                <div>
                    <button type="submit" className="register-btn">Register</button>
                </div>
                <div>
                <p>Already Registered?<span className="login-link"  onClick={()=>{props.closeRegisterModal();
                                                                                    props.openLoginModal();}}>Login</span></p>
                </div>
            </form>
        </div>
        </div>
    )
}
export default Form