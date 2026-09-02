import React,{useState} from 'react';
import CandidateNavbar from '../Components/candidateNavbar';
import UploadModal from '../Components/ResumeUploadModal';
import ProfileModal from '../Components/profileModal';
import CandidateHistory from '../Components/candidateHistoryModal';
import ATSmodel from '../Components/ATS-analysismodel';
import axios from 'axios';
function CandidateDashboard(){
    const [showModal,setShowModal]=useState(false);
    const [isProfileOpen,setIsProfileOpen]=useState(false);
    const[history,setHistory]=useState([]);
    const[showHistory,setShowHistory]=useState(false);
    const[analysis,setAnalysis]=useState('');
    const[showAnalysis,setShowAnalysis]=useState(false);
    const token=localStorage.getItem('token')
    function closeModal(){
        setShowModal(false);
    }
    function openProfileModal(){
        setIsProfileOpen(true);
    }
    function closeProfileModal(){
      setIsProfileOpen(false)
    }
    function closeShowHistory(){
        setShowHistory(false);
    }
    function openShowHistory(){
        getHistory();
        setShowHistory(true);
    }
    function openAnalysis(analysisText){
        setAnalysis(analysisText);
        setShowAnalysis(true);
    }
    async function getHistory(){
        try{
            const response=await axios.get('https://resume-screening-backend-wi7w.onrender.com/candidate-history',{headers:{Authorization:token}});
            setHistory(response.data.history);
            setShowHistory(true);
        }
        catch(err){
            console.log(err);
            alert(err.response.data.message)
        }
    }
    return(
        <div>
            <CandidateNavbar
            openProfileModal={openProfileModal} closeProfileModal={closeProfileModal} 
            isProfileOpen={isProfileOpen} openShowHistory={openShowHistory}/>
            <section id="hero">
                <h1>Welcome to Candidate dashboard</h1>
                <p className="hero-text">
                    Upload your resume and select your target domain to receive a detailed analysis of 
                    your profile. Our system evaluates your resume against industry requirements and 
                    provides insights to help improve your chances of getting shortlisted.
                </p>
                <div className="hero-buttons">
                   <button onClick={()=>setShowModal(true)}>Upload Resume </button>
                </div>
                {showModal && <UploadModal closeModal={closeModal} analysis={analysis} setAnalysis={setAnalysis}
                showAnalysis={showAnalysis} setShowAnalysis={setShowAnalysis}/>}
                {
                isProfileOpen && <ProfileModal closeProfileModal={closeProfileModal}/>
                }
                {
                    showHistory && <CandidateHistory closeShowHistory={closeShowHistory} history={history} openAnalysis={openAnalysis}/>
                }
                {
                showAnalysis && <ATSmodel setShowAnalysis={setShowAnalysis} analysis={analysis}/>
                }
            </section>
        </div>
    )
}
export default CandidateDashboard
