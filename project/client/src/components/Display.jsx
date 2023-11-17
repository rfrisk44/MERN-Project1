import React, { useState,useEffect } from 'react'
import axios from 'axios'

const Display = () => {

    const [trips,setTrips] = useState(null)

    useEffect(() => {
        axios
          .get("http://localhost:8000/api/trips")
          .then((res) => {
            console.log(res.data);
            setTrips(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

  return trips ? (
    <div>
        {trips.map((oneTrip) => {
            return(
                <div style={{color:'white'}}>
                    <h1>{oneTrip.year}</h1>
                    <img src={oneTrip.images} alt="" />
                </div>
                
            )
        })}
    </div>
  ): <h1>Loading</h1>
}

export default Display