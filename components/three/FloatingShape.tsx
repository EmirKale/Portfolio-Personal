'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapeProps {
  geometry: 'torus' | 'icosahedron' | 'octahedron' | 'sphere' | 'torusKnot';
  position: [number, number, number];
  scale?: number;
  color?: string;
  speed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  metalness?: number;
  roughness?: number;
}

export default function FloatingShape({
  geometry,
  position,
  scale = 1,
  color = '#faf7f3',
  speed = 1,
  rotationIntensity = 1,
  floatIntensity = 1,
  metalness = 0.1,
  roughness = 0.05,
}: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.002 * speed;
    meshRef.current.rotation.y += 0.003 * speed;
  });

  const getGeometry = () => {
    switch (geometry) {
      case 'torus':
        return <torusGeometry args={[1, 0.4, 32, 64]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 1]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      case 'sphere':
        return <sphereGeometry args={[1, 64, 64]} />;
      case 'torusKnot':
        return <torusKnotGeometry args={[0.8, 0.3, 128, 32]} />;
      default:
        return <icosahedronGeometry args={[1, 1]} />;
    }
  };

  return (
    <Float
      speed={speed}
      rotationIntensity={rotationIntensity}
      floatIntensity={floatIntensity}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        {getGeometry()}
        <MeshTransmissionMaterial
          backside
          samples={8}
          thickness={0.5}
          chromaticAberration={0.2}
          anisotropy={0.3}
          distortion={0.4}
          distortionScale={0.3}
          temporalDistortion={0.1}
          metalness={metalness}
          roughness={roughness}
          color={color}
          transmission={0.95}
          ior={1.5}
        />
      </mesh>
    </Float>
  );
}
