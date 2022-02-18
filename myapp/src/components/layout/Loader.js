import React from 'react'
import { TailSpin } from  'react-loader-spinner'

const Loader = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <TailSpin
            height="100"
            width="100"
            color='grey'
            ariaLabel='loading'
        />
    </div>
  )
}
export default Loader