import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Ring } from '@react-three/drei';
import * as THREE from 'three';

const RotatingRing = ({ position, rotation, speed, color, opacity = 0.3 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += speed;
    }
  });

  return (
    <Ring
      ref={meshRef}
      args={[2, 2.1, 32]}
      position={position}
      rotation={rotation}
    >
      <meshStandardMaterial
        color={color}
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
      />
    </Ring>
  );
};

const RotatingRings = () => {
  return (
    <group>
      <RotatingRing
        position={[0, 0, -10]}
        rotation={[Math.PI / 4, 0, 0]}
        speed={0.01}
        color="#00ffff"
        opacity={0.2}
      />
      <RotatingRing
        position={[0, 0, -8]}
        rotation={[0, Math.PI / 4, 0]}
        speed={-0.015}
        color="#0066ff"
        opacity={0.15}
      />
      <RotatingRing
        position={[0, 0, -6]}
        rotation={[Math.PI / 6, Math.PI / 6, 0]}
        speed={0.02}
        color="#ff00ff"
        opacity={0.1}
      />
    </group>
  );
};

export default RotatingRings;
