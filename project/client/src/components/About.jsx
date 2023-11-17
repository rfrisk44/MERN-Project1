import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div style={{textAlign:'center', padding:'200px'}}>
        <h1 style={{color:'white'}}>As we get older, the years that pass seem to become less of an event for many of us.
            It's very common for 21 to be the last meaningful year.
            But it doesn't need to be that way!
            Take a moment and think about all the trials and tribulations you've overcome this past year.
            All the laughs, the tears, EVERYTHING. It's challenging to think about where we have been and where we came from.
            So take a moment and think about all the trips around the sun you've had.  What a way to think about a year...
            You just took another TRIP around the sun.</h1>
        <Link to={'/'}>
            <button>close</button>
        </Link>
    </div>
  )
}

export default About