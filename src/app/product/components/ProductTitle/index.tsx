import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Color, Group, Vector3 } from 'three';
export default function ProductTitle() {
  const group = useRef<Group>(null);
  const cameraPosition = useMemo(() => new Vector3(), []);
  const titlePosition = useMemo(() => new Vector3(), []);

  useFrame(({ camera }) => {
    const object = group.current;
    if (!object) return;

    camera.getWorldPosition(cameraPosition);
    object.getWorldPosition(titlePosition);

    const dx = cameraPosition.x - titlePosition.x;
    const dz = cameraPosition.z - titlePosition.z;

    if (dx * dx + dz * dz > 0.000001) {
      object.rotation.set(0, Math.atan2(dx, dz), 0);
    }

    object.updateWorldMatrix(true, true);
  }, -0.5);

  return (
    <group ref={group} position-y={1.2}>
      <Text fontSize={3} textAlign='center'>
        Orsus
        <meshBasicMaterial color={new Color('white')} />
      </Text>
      <Text
        position-x={1.7}
        position-y={0.8}
        fontSize={0.24}
        textAlign='center'
        anchorX={'left'}
        anchorY={'top-baseline'}
      >
        让每一台机器懂得合作
        <meshBasicMaterial color={new Color('white')} />
      </Text>
    </group>
  );
}
