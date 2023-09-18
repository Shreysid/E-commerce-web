"use client";
import {
  Sky,
  OrbitControls,
  Stats,
  useProgress,
  Html,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AnimatedBox from "@/app/Components/AnimatedBox";
import Lights from "@/app/Components/Lights";
import Ground from "@/app/Components/Ground";
// import { Model } from "@/app/Components/Prot";
import { Suspense } from "react";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

export default function box() {
  return (
    <>
      <div className="h-screen w-screen">
        <Canvas className="bg-white" shadows camera={{ position: [10, 3, 3] }}>
          {/* <AnimatedBox /> */}
          <Suspense fallback={<Loader />}>
            <Stats />

            <OrbitControls />
            {/* <Model position={[3,1,0]}/> */}
            <Lights />
            <Ground />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
