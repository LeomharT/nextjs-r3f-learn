import { Text } from '@react-three/drei';
export default function ProductTitle() {
  return (
    <group position-y={3.5} position-z={-2}>
      <Text fontSize={3} textAlign='center'>
        Orsus
        <meshBasicMaterial color={[1.2, 1.2, 1.2]} toneMapped={false} />
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
        <meshBasicMaterial color={[1, 1, 1]} toneMapped={false} />
      </Text>
    </group>
  );
}
