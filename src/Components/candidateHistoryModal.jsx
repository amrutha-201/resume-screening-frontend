import React from 'react';
import {  } from "../styles/candidateHistoryModal.css";
function CandidateHistory(props){
    return(
        <div className='history-overlay'>
            <div className='history-modal'>
                <div className='history-header'>
                    <h2>History</h2>
                    <button className="close-btn" onClick={props.closeShowHistory}>✕</button>
                </div>
                <table className='history-table'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Domain</th>
                            <th>ATS Score</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.history.map((candidate,index)=>(
                            <tr key={index}>
                                <td>{(candidate.createdAt).slice(0,10)}</td>
                                <td>{candidate.domain}</td>
                                <td className="score">{candidate.atsScore}</td>
                                <td><button className='view-btn'onClick={()=>props.openAnalysis(candidate.analysis)}>view</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default CandidateHistory