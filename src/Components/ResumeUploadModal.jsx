import React,{useState} from 'react';
import axios from 'axios';
import '../styles/loadingModal.css';
function UploadModal(props){
    const[domain,setDomain]=useState('');
    const[file,setFile]=useState(null);
    const[jobDescription,setJobDescription]=useState('');
    const[loading,setLoading]=useState(false);
    function handleDomainChange(event){
        setDomain(event.target.value)
    }
    function handleFileChange(event){
        setFile(event.target.files[0])
    }
    function handleJobDescription(event){ 
        setJobDescription(event.target.value);
    }
    async function handleSubmit(event){
        event.preventDefault();
        const token=localStorage.getItem('token');
        const formData=new FormData();
        formData.append('domain',domain);
        formData.append('resume',file);
        formData.append('description',jobDescription)
        try{
            setLoading(true);
            const response=await axios.post('http://localhost:5000/upload-resume',formData,
                {headers:
                    {Authorization:token}
                })
            alert(response.data.message);
            props.setAnalysis(response.data.analysis);
            setLoading(false);
            props.setShowAnalysis(true);
        }
        catch(err){
            console.log(err);
            alert(err.response.data.message);
            setLoading(false);
        }
        //props.closeModal()
    }
    return(
        <div className="overlay">
        <div className='modal'>
            <form onSubmit={handleSubmit}>
                <div className="modalHeader">
                    <h2>UPLOAD RESUME</h2>
                    <button type="button" onClick={props.closeModal} className='close-btn'>✕</button>
                </div>
                <div>
                    <label>Domain</label>
                    <select value={domain} onChange={handleDomainChange} required>
                        <option value="">Select Domain</option>
                        <option value="">Select Domain</option>
                        {/* Software Development */}
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="Full Stack Developer">Full Stack Developer</option>
                        <option value="MERN Stack Developer">MERN Stack Developer</option>
                        <option value="Java Developer">Java Developer</option>
                        <option value="Python Developer">Python Developer</option>
                        <option value="Software Engineer">Software Engineer</option>
                        <option value="Web Developer">Web Developer</option>     
                        {/* Data & AI */}
                        <option value="Data Analyst">Data Analyst</option>
                        <option value="Data Scientist">Data Scientist</option>
                        <option value="Machine Learning Engineer">Machine Learning Engineer</option>
                        <option value="AI Engineer">AI Engineer</option>
                        <option value="Business Analyst">Business Analyst</option>
                        {/* Cloud & DevOps */}
                        <option value="DevOps Engineer">DevOps Engineer</option>
                        <option value="Cloud Engineer">Cloud Engineer</option>
                        <option value="AWS Engineer">AWS Engineer</option>
                        {/* Cyber Security */}
                        <option value="Cyber Security Analyst">Cyber Security Analyst</option>
                        <option value="Security Engineer">Security Engineer</option>
                        {/* Testing */}
                        <option value="QA Engineer">QA Engineer</option>
                        <option value="Automation Test Engineer">Automation Test Engineer</option>
                        {/* Mobile Development */}
                        <option value="Android Developer">Android Developer</option>
                        <option value="iOS Developer">iOS Developer</option>
                        <option value="Mobile App Developer">Mobile App Developer</option>
                        {/* Database */}
                        <option value="Database Administrator">Database Administrator</option>
                        <option value="SQL Developer">SQL Developer</option>
                        {/* Networking */}
                        <option value="Network Engineer">Network Engineer</option>
                        <option value="System Administrator">System Administrator</option>
                        {/* Management */}
                        <option value="Project Manager">Project Manager</option>
                        <option value="Product Manager">Product Manager</option>
                        {/* Freshers */}
                        <option value="Software Developer Intern">Software Developer Intern</option>
                        <option value="Frontend Developer Intern">Frontend Developer Intern</option>
                        <option value="Backend Developer Intern">Backend Developer Intern</option>
                        <option value="Full Stack Developer Intern">Full Stack Developer Intern</option>
                    </select>
                </div>
                <div>
                    <label>Enter your job description</label>
                    <textarea required placeholder={'Enter your job description here in 1000 characters'}
                    value={jobDescription} onChange={handleJobDescription}>
                    </textarea>
                </div>
                <div>
                    <label>Upload Resume</label>
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type='submit' className='register-btn'>Analyze Resume</button>
            </form>
            {
                loading &&
                <div className="loading-overlay">
                    <div className="loading-box">
                        <h3>Analyzing Resume...</h3>
                        <p>Please wait while AI evaluates your resume.</p>
                        <div className="spinner"></div>
                    </div>
                </div>
            }
        </div>
        </div>
    )
}
export default UploadModal;