import React,{useState} from'react';
import RecruiterNavbar from '../Components/recruiterNavbar';
import UploadResumes from "../Components/ResumesUploadModal";
import ProfileModal from '../Components/profileModal';
import RecruiterHistory from '../Components/recruiterHistoryModal';
import RankingModal from '../Components/candidatesRankingModal';
import DescriptionModal from '../Components/descriptionModal'
import axios from 'axios';
function RecruiterDashboard(){
    const [showModal,setShowModal]=useState(false);
    const [isProfileOpen,setIsProfileOpen]=useState(false);
    const [history,setHistory]=useState([]);
    const[showHistory,setShowHistory]=useState(false);
    const[ranking,setRanking]=useState('')
    const[showRanking,setShowRanking]=useState(false);
    const [description,setDescription] = useState('');
    const [showDescription,setShowDescription] = useState(false);
    const token=localStorage.getItem('token')
    function closeModal(){
        setShowModal(false)
    }
    function openProfileModal(){
        setIsProfileOpen(true);
    }
    function closeProfileModal(){
        setIsProfileOpen(false)
    }
    function closeShowHistory(){
        setShowHistory(false)
    }
    function openShowHistory(){
        getHistory();
        setShowHistory(true);
    }
    function openRanking(rankingText){
        setRanking(rankingText);
        setShowRanking(true);
    }
    function handleCloseRanking(){
        setShowRanking(false);
    }
    function openDescription(text){
        setDescription(text);
        setShowDescription(true);
    }
    async function getHistory(){
        try{
            const response=await axios.get('https://resume-screening-backend-wi7w.onrender.com/recruiter-history',{headers:{Authorization:token}})
            setHistory(response.data.history);
            setShowHistory(true);
        }
        catch(err){
            console.log(err)
            alert(err.response.data.message)
        }
    }
    return(
        <div>
            <RecruiterNavbar openProfileModal={openProfileModal} closeProfileModal={closeProfileModal} 
            isProfileOpen={isProfileOpen} openShowHistory={openShowHistory}/>
            <section id="hero">
                <h1>Welcome to Recruiter dashboard</h1>
                <p className="hero-text">
                     Upload candidate resumes and enter the required skills or
                    keywords to identify the most suitable candidates.
                </p>
                <div className="hero-buttons">
                    <button onClick={()=>setShowModal(true)}>Upload Resumes</button>
                </div>
                {showModal && <UploadResumes closeModal={closeModal} 
                ranking={ranking} setRanking={setRanking}
                showRanking={showRanking} setShowRanking={setShowRanking}/>}
                {isProfileOpen && <ProfileModal closeProfileModal={closeProfileModal}/>}
                {showHistory && <RecruiterHistory history={history} closeShowHistory={closeShowHistory}
                openRanking={openRanking} openDescription={openDescription}/>}
                {
                showRanking && <RankingModal handleCloseRanking={handleCloseRanking} ranking={ranking}/>
                }
                {
                showDescription &&<DescriptionModal description={description} closeModal={() => setShowDescription(false)}/>
                }
            </section>
        </div>
    )
}
export default RecruiterDashboard
