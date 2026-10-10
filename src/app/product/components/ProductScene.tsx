import { PresentationControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import { useEffect } from 'react';
import { Color } from 'three';
import Floor from './Floor';
import ProductTitle from './ProductTitle';

export default function ProductScene() {
  const scene = useThree((s) => s.scene);

  const { background } = useControls('Scene', {
    background: '#e6e7ef',
  });

  useEffect(() => {
    scene.background = new Color(background);
  }, [background, scene]);

  return (
    <>
      <ProductTitle />
      <PresentationControls
        global
        zoom={1.25}
        speed={3}
        rotation={[0, Math.PI / 2, 0]}
        polar={[0, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <mesh>
          <boxGeometry args={[2, 2, 2, 32, 32, 32]} />
          <meshBasicMaterial color={'blue'} toneMapped={false} />
        </mesh>
        <Floor />
      </PresentationControls>
    </>
  );
}
