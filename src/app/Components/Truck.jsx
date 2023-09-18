/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/Truck.gltf
Author: Pongo115 (https://sketchfab.com/Pongo115)
License: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-american-pickup-truck-172f7725e28d4788b8b46030a7424316
Title: Low Poly American Pickup Truck
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Truck(props) {
  const { nodes, materials } = useGLTF('models/Truck.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[1.519, 0.933, -0.112]} scale={1.41}>
        <group position={[0.498, -0.336, 0.936]}>
          <mesh geometry={nodes.Object_16.geometry} material={materials.Tyre} />
          <mesh geometry={nodes.Object_17.geometry} material={materials.material} />
        </group>
        <group position={[-0.492, -0.336, 0.936]}>
          <mesh geometry={nodes.Object_19.geometry} material={materials.Tyre} />
          <mesh geometry={nodes.Object_20.geometry} material={materials.material} />
        </group>
        <group position={[0.498, -0.336, -0.991]}>
          <mesh geometry={nodes.Object_22.geometry} material={materials.Tyre} />
          <mesh geometry={nodes.Object_23.geometry} material={materials.material} />
        </group>
        <group position={[-0.492, -0.336, -0.991]}>
          <mesh geometry={nodes.Object_25.geometry} material={materials.Tyre} />
          <mesh geometry={nodes.Object_26.geometry} material={materials.material} />
        </group>
        <mesh geometry={nodes.Object_4.geometry} material={materials.White} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Dark_Grey} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Headlight} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Taillight} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Reverse_Light} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Right_Blinker} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Left_Blinker} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.Blue} />
      </group>
    </group>
  )
}

useGLTF.preload('models/Truck.gltf')
