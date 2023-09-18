// import { Sky } from "@react-three/drei";
import { OrbitControls, Stats } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


const AnimatedBox = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.05;
      
    }
  });

  return (
    <mesh ref={meshRef} scale={[0.5, 0.5, 0.5]}>
        <OrbitControls/>
        <Stats/>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};

export default AnimatedBox;
