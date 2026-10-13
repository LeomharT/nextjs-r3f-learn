import { MeshReflectorMaterial } from '@react-three/drei';
import { useControls } from 'leva';

export default function Floor() {
  const { mirror, mixStrength, color, mixBlur, depthScale } = useControls('Floor', {
    mixStrength: {
      label: 'Mix Strenght',
      value: 15,
      min: 1,
      max: 20,
      step: 0.01,
    },
    mixBlur: {
      label: 'Mix Blur',
      value: 1,
      min: 0,
      max: 1,
      step: 0.01,
    },
    depthScale: {
      label: 'Depth Scale',
      value: 0.55,
      min: 0,
      max: 1,
      step: 0.01,
    },
    mirror: {
      label: 'Mirror',
      value: 0.135,
      min: 0,
      max: 1,
      step: 0.01,
    },
    color: '#eff0f4',
  });

  return (
    <mesh rotation-x={-Math.PI / 2} position-y={-0.03}>
      <planeGeometry args={[20, 20, 1, 1]} />
      <MeshReflectorMaterial
        blur={[400, 100]}
        resolution={512}
        mixBlur={mixBlur}
        mixStrength={mixStrength}
        mirror={mirror}
        depthScale={depthScale}
        minDepthThreshold={0.85}
        color={color}
        metalness={0.6}
        roughness={1}
        polygonOffset
      />
    </mesh>
  );
}
