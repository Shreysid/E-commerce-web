"use client";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { PerspectiveCamera, PositionalAudio } from '@react-three/drei'


export default function boxModel() {
  return (
    <>
      <Canvas className=" mt-80 pt-12">
        <mesh>
          <ambientLight intensity={0.1} />
          <OrbitControls/>
          <Stars/>
          <meshBasicMaterial attach="material" />
          <directionalLight color="red" position={[1, 1, 10]} />
          <boxGeometry args={[2, 2, 2]}/>
          
          <spotLight position={[10, 15, 10]} angle={0.3}/>

          
          <meshStandardMaterial />

          
        </mesh>
      </Canvas>
    </>
  );
}
