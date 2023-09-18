import {Joey} from '@/app/Components/Joey'
// import {Truck} from '@/app/Components/Truck'
import { Html, useAnimations, useGLTF, useProgress } from '@react-three/drei';
import { Suspense, useEffect } from 'react';
// import {Land} from '@/app/Components/Landscape'
import {Model} from '@/app/Components/controller'






const Ground: React.FC = () => {
  return (
    <>
      
      <mesh rotation-x={Math.PI * -0.5} receiveShadow>
      <Joey rotation-x={Math.PI * 0.5} 
      scale={[0.04,0.04,0.04]}
      position={[3,0,0]}
      receiveShadow/>
        <Model rotation-x={Math.PI * 0.5} />
        <planeBufferGeometry args={[1000, 1000]} />
        <meshStandardMaterial color={"green"} />

        {/* <Truck/> */}
        
      </mesh>
      
    </>
  );
};

export default Ground;
