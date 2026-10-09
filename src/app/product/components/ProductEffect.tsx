import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { useControls } from 'leva';
import { OverrideMaterialManager } from 'postprocessing';
OverrideMaterialManager.workaroundEnabled = true;

export default function ProductEffect() {
  const { intensity, radius } = useControls('Effect', {
    intensity: {
      label: 'Intensity',
      value: 1,
      step: 0.01,
      min: 0,
      max: 10,
    },
    radius: {
      label: 'Radius',
      value: 0.5,
      step: 0.01,
      min: 0,
      max: 3,
    },
  });

  return (
    <>
      <EffectComposer>
        <Bloom luminanceThreshold={1.0} radius={radius} intensity={intensity} />
      </EffectComposer>
    </>
  );
}
