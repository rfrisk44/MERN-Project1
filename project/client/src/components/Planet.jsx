import React from 'react'
import * as THREE from "three";


const Planet = (props) => {

    // makes the orbital pattern
    function Ecliptic({xRadius=1,zRadius=1}){
        const points = []
        for( let i=0; i<64; i++){
            const angle = (i/64) * 2 * Math.PI
            const x = xRadius * Math.cos(angle)
            const z = zRadius * Math.sin(angle)
            points.push(new THREE.Vector3(x,0,z))
        }
        const lineGeometry= new THREE.BufferGeometry().setFromPoints(points)
            return (
                <line geometry={lineGeometry}>
                    <lineBasicMaterial attack='material' color={"yellow"} linewidth={10}/>
                </line>
            )
    }

    // makes random planet colors and sizes
    // function createPlanets() {
    // const random = (a,b) => a + Math.random() * b
    // const randomInt = (a,b) => Math.floor(random(a,b))
    // const randomColor = () => `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`;
  
    // const planetData = []
    // const totalPlanets = 6

    // for(let i = 0; i<totalPlanets; i++){
    //     planetData.push({
    //         id:i,
    //         color: randomColor(),
    //         xRadius: (i + 1.5) *4,
    //         zRadius: (i + 1.5) * 2,
    //         size: random(0.5,1)
    //     })
    // }


    return (
    <>
        <mesh position={[15,0,0]}>
            <sphereGeometry args={[2, 32, 32]}/>
            <meshStandardMaterial color="#78D481"/>
        </mesh>
        <Ecliptic xRadius={15} zRadius={15}/>
    </>
  )
}

export default Planet