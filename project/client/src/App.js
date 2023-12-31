import './App.css';
import { Canvas } from '@react-three/fiber';
import {Html, OrbitControls} from '@react-three/drei'
import Sun from './components/Sun';
import Light from './components/Light';
import Create from './components/Create';
import planetData from './components/PlanetData';
import {Routes, Route,Link} from 'react-router-dom'
import React, { useState } from 'react'
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';
import Display from './components/Display';
import About from './components/About';
import Dialogue from './components/dialogue';
import Year2018 from './components/Year2018';
import Year2019 from './components/Year2019';
import Year2020 from './components/Year2020';
import Year2021 from './components/Year2021';
import Year2022 from './components/Year2022';
import Year2023 from './components/Year2023'
function App() {

    const [dialogueData,setDialogueData] = useState(null)
    const hideDialogue = () => {
        setDialogueData(null)
    }

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
            )}

    function Planets({planet:{color="yellow", xRadius=0, zRadius=0, size=1, speed=1, year=2018,id},setDialogueData}) {
        const planetRef = React.useRef();
        useFrame(({ clock }) => {
            const t = clock.getElapsedTime() * speed;
            const x = xRadius * Math.sin(t);
            const z = zRadius * Math.cos(t);
            planetRef.current.position.x = x;
                planetRef.current.position.z = z;
  });
        return(
            <>
                <mesh ref={planetRef} onClick={()=> window.location.href = `/year/${year}`}>

                    <sphereGeometry args={[size, 32, 32]} />
                    <meshStandardMaterial color={color} />
                    <Html distanceFactor={20}>
                            <div className='annotation'>{year}</div>
                    </Html>
                </mesh>
                <Ecliptic xRadius={xRadius} zRadius={zRadius} />
            </>
            )}
    
    // window.addEventListener('mousemove', function(e){
    //     const array = [1, 0.9, 0.8, 0.5, 0.2]
        
    //     array.forEach(function(i){
    //         const x = (1 - i) * 75
    //         const star = document.createElement('small')

    //         star.className = 'star'

    //         star.style.top = e.pageY + Math.round(Math.random()* x - x/2) + 'px'
    //         star.style.left = e.pageX + Math.round(Math.random()* x - x/2) + 'px'

    //         document.body.appendChild(star)

    //         window.setTimeout(function(){
    //             document.body.removeChild(star)
    //         }, Math.round(Math.random() * i * 100))
    //     })
    // }, false)



  return (
    <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D')", height:"1270px"}}>
            {/* <div>
                <Display/>
            </div> */}
        <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
            <h1 style={{color:'white'}}>Trips</h1>
            <Link to={'/about'}>
                <h4 style={{color:'white'}}>About</h4>
            </Link>
            <Link to={'/create/trip'}>
                <h4 style={{color:'white'}}>Create Trip</h4>
            </Link>
            <Dialogue hideDialogue={hideDialogue} dialogueData={dialogueData}/>
        </div>
        <Routes>
            
            <Route path='/about' element={<About/>}/>
            <Route path='/create/trip' element={<Create/>}/>
            <Route path='/year/2018' element={<Year2018/>}/>
            <Route path='/year/2019' element={<Year2019/>}/>
            <Route path='/year/2020' element={<Year2020/>}/>
            <Route path='/year/2021' element={<Year2021/>}/>
            <Route path='/year/2022' element={<Year2022/>}/>
            <Route path='/year/2023' element={<Year2023/>}/>

        </Routes>
        
        <Canvas style={{height:'700px'}} camera={{position: [0,20,25], fov:45}}>
            {/* renders the sun */}
            <Sun/>

            {/* renders array of planets */}
            {planetData.map((planet) => (
                <Planets planet={planet} key={planet.id} setDialogueData={setDialogueData}/>
            ))}

            {/* creates light source */}
            <Light/>

            {/* Allows movement of planets */}
            <OrbitControls/>
        </Canvas>
    </div>
  );
}

export default App;
