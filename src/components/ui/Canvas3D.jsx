import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function NeuralNetwork() {
  const pointsRef = useRef();
  const linesRef = useRef();

  const count = 40; // Number of neural nodes

  // Generate random positions and data vectors for the nodes
  const [positions, initialPositions] = useMemo(() => {
    const posArray = new Float32Array(count * 3);
    const initPosArray = [];
    for (let i = 0; i < count * 3; i++) {
      const val = (Math.random() - 0.5) * 4.5;
      posArray[i] = val;
      initPosArray.push(val);
    }
    return [posArray, initPosArray];
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const pos = pointsRef.current.geometry.attributes.position.array;
    const linePos = linesRef.current.geometry.attributes.position.array;

    let lineIdx = 0;

    // Animate the neurons shifting through space using a wave formula
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = initialPositions[i3] + Math.sin(time + initialPositions[i3]) * 0.15;
      pos[i3 + 1] = initialPositions[i3 + 1] + Math.cos(time + initialPositions[i3 + 1]) * 0.15;
      pos[i3 + 2] = initialPositions[i3 + 2] + Math.sin(time * 0.5 + initialPositions[i3 + 2]) * 0.15;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Draw connection lines dynamically between nearby data neurons
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      for (let j = i + 1; j < count; j++) {
        const j3 = j * 3;
        const dx = pos[i3] - pos[j3];
        const dy = pos[i3 + 1] - pos[j3 + 1];
        const dz = pos[i3 + 2] - pos[j3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        // If the nodes are close enough, weave an electrical synapse connection
        if (dist < 1.8 && lineIdx < count * 12) {
          linePos[lineIdx++] = pos[i3];
          linePos[lineIdx++] = pos[i3 + 1];
          linePos[lineIdx++] = pos[i3 + 2];

          linePos[lineIdx++] = pos[j3];
          linePos[lineIdx++] = pos[j3 + 1];
          linePos[lineIdx++] = pos[j3 + 2];
        }
      }
    }

    // Pad remaining line positions to keep the array length stable
    while (lineIdx < count * 12) {
      linePos[lineIdx++] = 0;
    }
    linesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group>
      {/* 1. The Synapse Points (Glowing Neurons) */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00f2fe"
          size={0.12}
          sizeAttenuation={true}
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* 2. The Interconnecting Data Paths (Neural Mesh Threads) */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(count * 12), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#4facfe"
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
}

export default function Canvas3D() {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={1} />
        
        <NeuralNetwork />
        
        {/* Allows recruiter to interact, rotate, and pull the network structure around */}
        <OrbitControls 
          enableZoom={false} 
          autoRotate={true} 
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}