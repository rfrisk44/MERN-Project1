import React from 'react'
import img1 from '../images/image2021.jpg'
import img2 from '../images/image2021a.jpg'
import img3 from '../images/image2021b.jpg'
import img4 from '../images/image2021c.jpg'
import img5 from '../images/image2021d.jpg'

const Year2021 = () => {
  return (
    <div style={{backgroundColor:'white',textAlign:'center'}}>
        <h1>2021</h1>
        <img src={img1} alt="" style={{height:'300px'}}/>
        <img src={img2} alt="" style={{height:'300px'}}/>
        <img src={img3} alt="" style={{height:'300px'}}/>
        <img src={img4} alt="" style={{height:'300px'}}/>
        <img src={img5} alt="" style={{height:'300px'}}/>
    </div>
    
  )
}

export default Year2021