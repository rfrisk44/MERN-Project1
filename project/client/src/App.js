import './App.css';
import { Canvas } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei'
import Sun from './components/Sun';
import Light from './components/Light';
import Create from './components/Create';
import planetData from './components/PlanetData';
import {Routes, Route,Link} from 'react-router-dom'
import React from 'react'
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';

function App() {

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

    function Planets({planet:{color="yellow", xRadius=0, zRadius=0, size=1, speed=1}}) {
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
                <mesh ref={planetRef}>
                    <sphereGeometry args={[size, 32, 32]} />
                    <meshStandardMaterial color={color} />
                </mesh>
                <Ecliptic xRadius={xRadius} zRadius={zRadius} />
            </>
            )}
    
    window.addEventListener('mousemove', function(e){
        const array = [1, 0.9, 0.8, 0.5, 0.2]
        
        array.forEach(function(i){
            const x = (1 - i) * 75
            const star = document.createElement('small')

            star.className = 'star'

            star.style.top = e.pageY + Math.round(Math.random()* x - x/2) + 'px'
            star.style.left = e.pageX + Math.round(Math.random()* x - x/2) + 'px'

            document.body.appendChild(star)

            window.setTimeout(function(){
                document.body.removeChild(star)
            }, Math.round(Math.random() * i * 100))
        })
    }, false)

    function removePlanet(){
        console.log(planetData)
        planetData.pop()
        console.log(planetData)
    }

  return (
    <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D')", height:"1270px"}}>
        <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
            <h1 style={{color:'white'}}>Trips</h1>
            <h4 style={{color:'white'}}>About</h4>
            <Link to={'/create/trip'}>
                <h4 style={{color:'white'}}>Create Trip</h4>
            </Link>
        </div>
        <Routes>
            
            <Route path='/create/trip' element={<Create/>}/>

        </Routes>
        <Canvas style={{height:'700px'}} camera={{position: [0,20,25], fov:45}}>
            {/* renders the sun */}
            <Sun/>

            {/* renders array of planets */}
            {planetData.map((planet) => (
                <Planets planet={planet} key={planet.id}/>
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
