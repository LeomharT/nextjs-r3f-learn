import { PresentationControls } from '@react-three/drei';
import { useControls } from 'leva';
import Floor from './Floor';
import ProductTitle from './ProductTitle';

export default function ProductScene() {
  const { background } = useControls('Scene', {
    background: '#e6e7ef',
  });

  return (
    <>
      <color attach='background' args={[background]} />
      <ProductTitle />
      <PresentationControls
        global
        zoom={1.25}
        speed={3}
        rotation={[0, Math.PI / 2, 0]}
        polar={[0, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <mesh renderOrder={1}>
          <boxGeometry args={[2, 2, 2, 32, 32, 32]} />
          <meshBasicMaterial color={'blue'} toneMapped={false} />
        </mesh>
        <Floor />
      </PresentationControls>
    </>
  );
}
