import React from 'react'
import img1 from '../images/image2023.jpg'
import img2 from '../images/image2023a.jpg'
import img3 from '../images/image2023b.jpg'
import img4 from '../images/image2023c.jpg'
import img5 from '../images/image2023d.jpg'
import img6 from '../images/image2023e.jpg'

const Year2023 = () => {
  return (
    <div style={{backgroundColor:'white',textAlign:'center'}}>
        <h1>2023</h1>
        <img src={img1} alt="" style={{height:'300px'}}/>
        <img src={img2} alt="" style={{height:'300px'}}/>
        <img src={img3} alt="" style={{height:'300px'}}/>
        <img src={img4} alt="" style={{height:'300px'}}/>
        <img src={img5} alt="" style={{height:'300px'}}/>
        <img src={img6} alt="" style={{height:'300px'}}/>
    </div>
  )
}

export default Year2023