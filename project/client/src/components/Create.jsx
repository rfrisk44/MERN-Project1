import React from 'react'
import { Link } from 'react-router-dom'

const Create = () => {
  return (
    <div style={{outline:'1px solid white', margin:'10px',padding:'20px',textAlign:'center', color:'white'}}>
        <h1>Add Pictures to your year!</h1>
        <form>
            <label>Year Picture was Taken:</label>
            <input type="number" max={2023} min={1900}/> <br />

            <label>Add Picture File:</label>
            <input type="file" multiple/><br />

            <input type="submit" value="Submit" />
        </form>
        <Link to={'/'}>
            <button>Cancel</button>
        </Link>
    </div>
  )
}

export default Create