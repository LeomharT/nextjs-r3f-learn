'use client';
import { Environment } from '@react-three/drei';
import { Canvas, extend } from '@react-three/fiber';
import * as THREE from 'three';
import ProductScene from './ProductScene';

// Register the THREE namespace as native JSX elements.
// See below for notes on tree-shaking
extend(THREE as any);

export default function ProductCanvas() {
  return (
    <Canvas
      shadows
      style={{ touchAction: 'none' }}
      gl={{ toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 3 }}
      scene={{ background: new THREE.Color('#eff0f4') }}
    >
      <Environment preset='city' />
      <ProductScene />
    </Canvas>
  );
}
