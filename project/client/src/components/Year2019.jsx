import React from 'react'
import img1 from '../images/image1.jpg'
import img2 from '../images/image2.jpg'
import img3 from '../images/image3.jpg'
import img4 from '../images/image4.jpg'

const Year2019 = () => {
  return (
    <div style={{backgroundColor:'white',textAlign:'center'}}>
        <h1>2019</h1>
        <img src={img1} alt="" style={{height:'300px'}}/>
        <img src={img2} alt="" style={{height:'300px'}}/>
        <img src={img3} alt="" style={{height:'300px'}}/>
        <img src={img4} alt="" style={{height:'300px'}}/>
    </div>
  )
}

export default Year2019