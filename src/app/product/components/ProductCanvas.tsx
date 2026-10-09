'use client';
import { Canvas, extend } from '@react-three/fiber';
import * as THREE from 'three';
import ProductEffect from './ProductEffect';
import ProductEnvironment from './ProductEnvironment';
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
      scene={{ background: new THREE.Color('#e6e7ef') }}
    >
      <ProductEnvironment />
      <ProductEffect />
      <ProductScene />
    </Canvas>
  );
}
