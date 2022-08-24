import React from 'react'
import NewApplication from '../../Components/NewApplication/NewApplication';
import PendingApplication from '../../Components/PendingApplication/PendingApplication';

function ApplicantList() {
    return (
        <div style={{'minHeight':'80vh'}}>
            <NewApplication/>
            <PendingApplication/>
        </div>
    )
}

export default ApplicantList
