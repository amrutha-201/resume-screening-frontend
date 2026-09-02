import React from 'react';
import '../styles/rankingModal.css';
function RankingModal(props){
    return(
        <div className='ranking-overlay'>
            <div className='ranking-modal'>
                <div className='ranking-header'>
                    <h2>ATS Analysis Report</h2>
                        <button
                            onClick={props.handleCloseRanking}
                            className="close-btn"
                        >
                        ✕
                        </button>
                </div>
                <table className="ranking-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Resume</th>
                        <th>ATS Score</th>
                    </tr>
                </thead>
                <tbody>
                {props.ranking.map((candidate,index)=>(
                    <tr
                        key={index}
                        className={
                            index===0 ? "rank-1" :
                            index===1 ? "rank-2" :
                            index===2 ? "rank-3" : ""
                }
                >
                    <td>{index+1}</td>
                    <td>{candidate.fileName}</td>
                    <td className="score">{candidate.atsScore}</td>
                </tr>
                ))}
                </tbody>
                </table>
            </div>
        </div>
    )
}
export default RankingModal;
