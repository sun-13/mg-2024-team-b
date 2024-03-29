import { useGLTF } from '@react-three/drei'
import { AvatarInner } from '@/components/avatar/AvatarInner'

const glbFile = "/models/sun.glb";

export function Sun(props) {
  const { nodes, materials, scene } = useGLTF(glbFile);

  return (
    <AvatarInner nodes={nodes} materials={materials} {...props} />
  );
}

useGLTF.preload(glbFile);
