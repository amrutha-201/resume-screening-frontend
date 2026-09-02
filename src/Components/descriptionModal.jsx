import React from 'react';
import '../styles/descriptionModal.css'
function DescriptionModal(props){
    return(
        <div className='description-overlay'>
            <div className='description-modal'>
                <div className='description-header'>
                    <h2>History</h2>
                    <button className='close-btn' onClick={props.closeModal}>✕</button>
                </div>
                <pre>{props.description}</pre>
            </div>
        </div>
    )
}
export default DescriptionModal