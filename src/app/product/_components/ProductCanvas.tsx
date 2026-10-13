'use client';
import { Canvas, extend } from '@react-three/fiber';
import * as THREE from 'three';
import ProductEffect from './ProductEffect';
import ProductEnvironment from './ProductEnvironment';
import ProductScene from './ProductScene';

// @ts-expect-error Register the THREE namespace as native JSX elements.
// See below for notes on tree-shaking
extend(THREE);

export default function ProductCanvas() {
  return (
    <Canvas
      shadows
      style={{ touchAction: 'none' }}
      gl={{ toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 3 }}
      scene={{ background: new THREE.Color('#e6e7ef').convertSRGBToLinear() }}
    >
      <ProductEnvironment />
      <ProductEffect />
      <ProductScene />
    </Canvas>
  );
}
