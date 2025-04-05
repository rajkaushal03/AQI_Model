import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import EarthMaterial from "./EarthMaterial";
import AtmosphereMesh from "./AtmosphereMesh";

const sunDirection = new THREE.Vector3(-2, 0.5, 1.5);

function Earth() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  useEffect(() => {
    ref.current.rotation.y = 2 * (Math.PI / 180); // Adjust to face India
    ref.current.rotation.x = 4 * (Math.PI / 180); // Adjust to face India
  }, []);

  const axialTilt = (1.9 * Math.PI) / 180;

  return (
    <group rotation-z={axialTilt}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[2, 64]} />
        <EarthMaterial sunDirection={sunDirection} />
        <AtmosphereMesh />
      </mesh>
    </group>
  );
}

function FinalEarth() {
  return (
    <div className="xl:px-6 w-[85vh] h-[65vh] ">

      <Canvas 
        camera={{ position: [0, 1.5, 4] }} 
        gl={{ toneMapping: THREE.NoToneMapping }}
      >
        <Earth />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default FinalEarth;
