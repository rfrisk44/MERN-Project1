import React from 'react'

const Sun = (props) => {
  return (
    <>
        {/* Each mesh is a new planet */}
        <mesh>
            {/* This creates the center sphere */}
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial color="#ffff00" />
        </mesh>
    </>
  )
}

export default Sun 