import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import * as THREE from 'three';

const FloatingIcon = ({ position, children, speed = 1, rotationSpeed = 0.5 }) => {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.rotation.y += rotationSpeed * 0.01;
    }
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh ref={meshRef}>
        <Html
          center
          distanceFactor={15}
          position={[0, 0, 0]}
          style={{
            background: 'rgba(0, 150, 255, 0.1)',
            borderRadius: '50%',
            padding: '20px',
            border: '2px solid rgba(0, 150, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 20px rgba(0, 150, 255, 0.5)',
          }}
        >
          {children}
        </Html>
      </mesh>
    </group>
  );
};

const AtomIcon = ({ position }) => {
  const meshRef = useRef();
  const electronsRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
    if (electronsRef.current) {
      electronsRef.current.rotation.x += 0.02;
      electronsRef.current.rotation.z += 0.01;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Nucleus */}
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Electron orbits */}
      <group ref={electronsRef}>
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <ringGeometry args={[1, 1.1, 32]} />
          <meshStandardMaterial color="#00ffff" transparent opacity={0.3} />
        </mesh>
        <mesh rotation={[0, Math.PI / 4, Math.PI / 4]}>
          <ringGeometry args={[1, 1.1, 32]} />
          <meshStandardMaterial color="#00ffff" transparent opacity={0.3} />
        </mesh>
        
        {/* Electrons */}
        <mesh position={[1, 0, 0]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={1} />
        </mesh>
        <mesh position={[-1, 0, 0]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={1} />
        </mesh>
      </group>
    </group>
  );
};

const GlobeIcon = ({ position }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial 
          color="#0066cc" 
          transparent 
          opacity={0.2} 
          wireframe 
        />
      </mesh>
      
      {/* Grid lines */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2, 2.1, 32]} />
        <meshStandardMaterial color="#00ffff" transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[0, 0, 0]}>
        <ringGeometry args={[2, 2.1, 32]} />
        <meshStandardMaterial color="#00ffff" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

const FloatingIcons = () => {
  const icons = useMemo(() => [
    { type: 'atom', position: [-8, 4, -5] },
    { type: 'globe', position: [8, 2, -3] },
    { type: 'js', position: [-6, -3, -4] },
    { type: 'python', position: [6, -4, -6] },
    { type: 'blockchain', position: [0, 5, -7] },
  ], []);

  return (
    <>
      {icons.map((icon, index) => {
        if (icon.type === 'atom') {
          return <AtomIcon key={index} position={icon.position} />;
        }
        if (icon.type === 'globe') {
          return <GlobeIcon key={index} position={icon.position} />;
        }
        if (icon.type === 'js') {
          return (
            <FloatingIcon key={index} position={icon.position} speed={0.8}>
              <div style={{ color: '#f7df1e', fontSize: '24px', fontWeight: 'bold' }}>JS</div>
            </FloatingIcon>
          );
        }
        if (icon.type === 'python') {
          return (
            <FloatingIcon key={index} position={icon.position} speed={1.2}>
              <div style={{ color: '#3776ab', fontSize: '20px', fontWeight: 'bold' }}>Python</div>
            </FloatingIcon>
          );
        }
        if (icon.type === 'blockchain') {
          return (
            <FloatingIcon key={index} position={icon.position} speed={0.6}>
              <div style={{ color: '#00ff88', fontSize: '18px', fontWeight: 'bold' }}>⚡</div>
            </FloatingIcon>
          );
        }
        return null;
      })}
    </>
  );
};

export default FloatingIcons;
