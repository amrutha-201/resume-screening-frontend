import React from 'react';
import '../styles/atsmodel.css'
function ATSmodel(props){
    return(
            <div className="analysis-overlay">
                <div className="analysis-modal">
                    <div className="analysis-header">
                        <h2>ATS Analysis Report</h2>
                        <button
                            onClick={()=>props.setShowAnalysis(false)}
                            className="close-btn"
                        >
                        ✕
                        </button>
                    </div>
                    <pre>{props.analysis}</pre>
                </div>
            </div>
    )
}
export default ATSmodel