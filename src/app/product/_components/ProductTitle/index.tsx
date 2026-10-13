import { Text } from '@react-three/drei';
export default function ProductTitle() {
  return (
    <group position-y={2.1} position-z={-1}>
      <Text fontSize={4} textAlign='center'>
        Orsus
        <meshBasicMaterial color={[1.2, 1.2, 1.2]} toneMapped={false} />
      </Text>
      <Text
        position-x={4.5}
        position-y={1.2}
        fontSize={0.24}
        textAlign='center'
        anchorX={'left'}
        anchorY={'top-baseline'}
      >
        让每一台机器懂得合作
        <meshBasicMaterial color={[1, 1, 1]} toneMapped={false} />
      </Text>
    </group>
  );
}
