import { MeshReflectorMaterial } from '@react-three/drei';
import { useControls } from 'leva';

export default function Floor() {
  const { mixStrength } = useControls('Floor', {
    mixStrength: {
      label: 'Mix Strenght',
      value: 15,
      min: 1,
      max: 20,
      step: 0.01,
    },
  });

  return (
    <mesh rotation-x={-Math.PI / 2} position-y={-1.25}>
      <planeGeometry args={[10, 10, 1, 1]} />
      <MeshReflectorMaterial
        blur={[400, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={mixStrength}
        depthScale={1}
        minDepthThreshold={0.85}
        color='#151515'
        metalness={0.6}
        roughness={1}
        mirror={1}
      />
    </mesh>
  );
}
