import React,{useState} from 'react';
import '../styles/loginModal.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function LoginModal(props){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    function handleEmailChange(event){
        setEmail(event.target.value)
    }
    function handlePasswordChange(event){
        setPassword(event.target.value);
    }
    async function handleSubmit(event){
        event.preventDefault();
        const userData={
            email,
            password
        }
        try{
            const response=await axios.post('http://localhost:5000/login',userData);
            console.log(response.data);
            alert(response.data.message);
            props.closeLoginModal();
            if(response.data.role==='Candidate'){
                navigate('/candidate-dashboard')
            }
            if(response.data.role==='Recruiter'){
                navigate('/recruiter-dashboard')
            }
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('email',response.data.email);
            localStorage.setItem('password',response.data.password);
            localStorage.setItem('fullName',response.data.fullName);
            localStorage.setItem('role',response.data.role);

        }
        catch(err){
            console.log(err);
            alert(err.response?.data?.message);
        }
    }
    return(
        <div className='overlay'>
            <div className='modal'>
                <form onSubmit={handleSubmit}>
                    <div className='modalHeader'>
                        <h2>Login Details</h2>
                        <button type="button" onClick={props.closeLoginModal} className='close-btn'>✕</button>
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type='email'
                            required
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type='password'
                            required
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button type='submit' className='register-btn'>Login</button>
                    <div>
                    <p>Not yet Registered?<span className="login-link"  onClick={()=>{props.closeLoginModal();
                                                                                    props.openRegisterModal();}}>Register</span></p>
                </div>
                </form>
            </div>
        </div>
    )
}
export default LoginModal