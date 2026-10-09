'use client';
import { CameraControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function ProductCanvas() {
  return (
    <Canvas>
      <CameraControls />
    </Canvas>
  );
}
