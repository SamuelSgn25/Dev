import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const FloatingCube = ({ position, rotation, speed, color }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.rotation.x += speed * 0.01;
      meshRef.current.rotation.y += speed * 0.01;
    }
  });

  return (
    <Box
      ref={meshRef}
      args={[0.5, 0.5, 0.5]}
      position={position}
      rotation={rotation}
    >
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.6}
        wireframe
      />
    </Box>
  );
};

const FloatingCubes = () => {
  const cubes = useMemo(() => [
    { position: [-8, 2, -5], rotation: [0, 0, 0], speed: 1, color: '#00ffff' },
    { position: [8, -2, -3], rotation: [Math.PI / 4, 0, 0], speed: 1.2, color: '#0066ff' },
    { position: [-6, -3, -4], rotation: [0, Math.PI / 4, 0], speed: 0.8, color: '#ff00ff' },
    { position: [6, 3, -6], rotation: [Math.PI / 6, Math.PI / 6, 0], speed: 1.5, color: '#00ff88' },
    { position: [0, -4, -7], rotation: [Math.PI / 3, 0, Math.PI / 3], speed: 0.9, color: '#ff6600' },
  ], []);

  return (
    <group>
      {cubes.map((cube, index) => (
        <FloatingCube
          key={index}
          position={cube.position}
          rotation={cube.rotation}
          speed={cube.speed}
          color={cube.color}
        />
      ))}
    </group>
  );
};

export default FloatingCubes;
