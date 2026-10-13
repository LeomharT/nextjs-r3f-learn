import { useLoader } from '@react-three/fiber';
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js';

export default function Orsus() {
  const model = useLoader(GLTFLoader, '/Orsus.glb', (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.preload();
    loader.dracoLoader = dracoLoader;
  });

  return <primitive object={model.scene} scale={2.1} rotation-y={-Math.PI / 2} />;
}
