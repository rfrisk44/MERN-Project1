import React from 'react'
import img1 from '../images/image2022.jpg'
import img2 from '../images/image2022a.jpg'
import img3 from '../images/image2022b.jpg'

const Year2022 = () => {
  return (
    <div style={{backgroundColor:'white',textAlign:'center'}}>
        <h1>2022</h1>
        <img src={img1} alt="" style={{height:'300px'}}/>
        <img src={img2} alt="" style={{height:'300px'}}/>
        <img src={img3} alt="" style={{height:'300px'}}/>
    </div>
  )
}

export default Year2022