import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';


function AppProgressBar(props) {
  console.log(1212121)
  if(props.progress==='new'){
    return (
      <div>
        <ProgressBar animated variant="warning" now="20" label="Pending" />
      </div>
    )
  }else if(props.progress==='pending'){
    return (
      <div>
        <ProgressBar animated now="60" label="UnderProcess" />
      </div>
    )
  }else if(props.progress==='approve'){
    return (
      <div>
        <ProgressBar animated variant="success" now="100" label="Approved" />
      </div>
    )
  }else if(props.progress==='decline'){
    return (
      <div>
        <ProgressBar animated variant="danger" now="9" label="Declined" />
      </div>
    )
  }else{
    return (
      <div>
        <ProgressBar variant="secondary" now="100" label="Something went wrong" />
      </div>
    )
  }
  
}

export default AppProgressBar