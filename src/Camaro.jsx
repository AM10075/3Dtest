import React from 'react'
import { useGLTF } from "@react-three/drei";

import car from "./assets/models/scene.glb"
export default function Camaro() {
    const { nodes, materials } = useGLTF(car)
    return (
        <group ref={group} {...props} dispose={null}>
            <group ref={group} {...props} dispose={null}>
                <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
                <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
                <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
                <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
                <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
                <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
                <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
                <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
            </group>
        </group>
    )
}
