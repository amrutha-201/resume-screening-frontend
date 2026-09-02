import React from 'react';
import Navbar from '../Components/navbar';
import '../styles/home.css';
import { useState } from "react";
import Form from '../Components/RegisterModal';
import LoginModal from '../Components/LoginModal';
import ProfileModal from '../Components/profileModal';
function Home() {
  const [isRegisterOpen,setIsRegisterOpen]=useState(false);
  const [isLoginOpen,setIsLoginOpen]=useState(false);
  const [isProfileOpen,setIsProfileOpen]=useState(false);
  function openRegisterModal(){ 
    setIsRegisterOpen(true);
  }
  function closeRegisterModal(){
    setIsRegisterOpen(false)
  }
  function openLoginModal(){
    setIsLoginOpen(true)
  }
  function closeLoginModal(){
    setIsLoginOpen(false)
  }
  function openProfileModal(){
    setIsProfileOpen(true);
  }
  function closeProfileModal(){
    setIsProfileOpen(false)
  }
  return (
    <div>
      <Navbar openRegisterModal={openRegisterModal} openLoginModal={openLoginModal} 
      openProfileModal={openProfileModal} closeProfileModal={closeProfileModal} isProfileOpen={isProfileOpen}/>

      <section id="hero">
        <h1>AI-Powered Resume Screening Platform</h1>

        <p className="hero-text">
          Screen resumes faster with AI. Analyze skills, experience, and
          match candidates with job requirements.
        </p>
        <div className="hero-buttons">
          <button onClick={openRegisterModal}>Get Started</button>
        </div>
      </section>

      <section id="about-screening">
        <h2>What is Resume Screening?</h2>

        <p>
          Resume screening is the process of reviewing and evaluating resumes
          to determine how well a candidate matches a specific job role. It
          involves analyzing skills, education, experience, projects,
          certifications, and other qualifications to identify candidates who
          meet the job requirements.
        </p>

        <p>
          Traditionally, recruiters manually screen hundreds of resumes, which
          can be time-consuming and prone to oversight. An AI-powered resume
          screening platform automates this process by extracting key
          information from resumes, comparing it with job requirements,
          generating match scores, and providing insights that help recruiters
          shortlist candidates faster and help job seekers improve their
          resumes.
        </p>
      </section>
      {
        isRegisterOpen &&  <Form closeRegisterModal={closeRegisterModal} openLoginModal={openLoginModal}/>
      }
      {
        isLoginOpen && <LoginModal closeLoginModal={closeLoginModal} openRegisterModal={openRegisterModal}/>
      }
      {
        isProfileOpen && <ProfileModal closeProfileModal={closeProfileModal}/>
      }
    </div>
  );
}

export default Home;