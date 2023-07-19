import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import Box from "./Box";
import Esphere from "./Esphere";

import Scene from "./Scene";
export default function DCanvas() {
  
  return (<>
  <h1>Hola Mundo</h1>
    <div className="wrapper">
      <Canvas className='canvas' >
        <Suspense fallback={null}>
          <Box />
        </Suspense>
        <ambientLight intensity={1} /> //Light is a necessity to see the object
        <directionalLight position={[-2, 5, 2]} intensity={1} /> //This light changes the intensity from different axes
        <OrbitControls enableZoom={false} autoRotate={true} />
      </Canvas>
    </div>
    <div className="wrapper">
      <Canvas className='canvas' >
        <Suspense fallback={null}>
          <Esphere />
        </Suspense>
        <ambientLight intensity={1} /> //Light is a necessity to see the object
        <directionalLight position={[-2, 5, 2]} intensity={1} /> //This light changes the intensity from different axes
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
    <div className="wrapper">
      <Canvas className='canvas' >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <ambientLight intensity={1} /> //Light is a necessity to see the object
        <directionalLight position={[-2, 5, 2]} intensity={1} /> //This light changes the intensity from different axes
        <OrbitControls  />
      </Canvas>
    </div>
  </>
  )
}