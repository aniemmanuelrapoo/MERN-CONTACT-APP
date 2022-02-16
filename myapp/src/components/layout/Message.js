import React from 'react'

const Message = ({ children, color }) => {
  return (
    <div style={{ color: color, padding: '10px', border: '1px solid gray', background: 'black', borderRadius: '10px' }}>
        {children}
    </div>
  )
}

export default Message