import React from 'react'
import img1 from '../images/image2020.jpg'
import img2 from '../images/image2020a.jpg'
import img3 from '../images/image2020b.jpg'
import img4 from '../images/image2020c.jpg'
import img5 from '../images/image2020d.jpg'
import img6 from '../images/image2020e.jpg'

const Year2020 = () => {
  return (
    <div style={{backgroundColor:'white',textAlign:'center'}}>
        <h1>2020</h1>
        <img src={img1} alt="" style={{height:'300px'}}/>
        <img src={img2} alt="" style={{height:'300px'}}/>
        <img src={img3} alt="" style={{height:'300px'}}/>
        <img src={img4} alt="" style={{height:'300px'}}/>
        <img src={img5} alt="" style={{height:'300px'}}/>
        <img src={img6} alt="" style={{height:'300px'}}/>
    </div>
  )
}

export default Year2020