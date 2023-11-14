import React from 'react'

const Light = () => {
  return (
    <>
        {/* This creates the light */}
        <ambientLight/>
        <pointLight position={[0, 0, 0]} />
    </>
  )
}

export default Light