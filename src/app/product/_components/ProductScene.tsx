import { PresentationControls } from '@react-three/drei';
import { useControls } from 'leva';
import { Suspense } from 'react';
import Floor from './Floor';
import Orsus from './Orsus';
import ProductTitle from './ProductTitle';

export default function ProductScene() {
  const { background } = useControls('Scene', {
    background: '#e6e7ef',
  });

  return (
    <>
      <color attach='background' args={[background]} />
      <Suspense>
        <ProductTitle />
        <group position-y={-1.2}>
          <PresentationControls
            global
            zoom={1.25}
            speed={3}
            snap={true}
            rotation={[0, Math.PI / 2, 0]}
            polar={[0, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <Orsus />
            <Floor />
          </PresentationControls>
        </group>
      </Suspense>
    </>
  );
}
