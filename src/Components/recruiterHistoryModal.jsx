import React from 'react';
function RecruiterHistory(props){
    return(
        <div className='history-overlay'>
            <div className='history-modal'>
                <div className='history-header'>
                    <h2>History</h2>
                    <button className='close-btn' onClick={props.closeShowHistory}>✕</button>
                </div>
                <table className='history-table'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Domain</th>
                            <th> description</th>
                            <th>ResumesAnalyzed</th>
                            <th>TopScore</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.history.map((candidate,index)=>(
                            <tr key={index}>
                                <td>{(candidate.createdAt).slice(0,10)}</td>
                                <td>{candidate.domain}</td>
                                <td><button className='view-btn' onClick={()=>props.openDescription(candidate.description)}>View Descriprion</button></td>
                                <td >{candidate.results.length}</td>
                                <td className='score'>{candidate.topAtsScore}</td>
                                <td><button className='view-btn'onClick={()=>props.openRanking(candidate.results)}>view</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default RecruiterHistory