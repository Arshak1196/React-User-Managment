import React from 'react'
import NewApplication from '../../Components/NewApplication/NewApplication';
import PendingApplication from '../../Components/PendingApplication/PendingApplication';

function ApplicantList() {
    return (
        <div>
            <NewApplication/>
            <PendingApplication/>
        </div>
    )
}

export default ApplicantList
