import { useGLTF } from '@react-three/drei'
import { AvatarInner } from '@/components/avatar/AvatarInner'

const glbFile = "/models/yato.glb";

export function Yato(props) {
  const { nodes, materials, scene } = useGLTF(glbFile);

  return (
    <AvatarInner nodes={nodes} materials={materials} from="Yato" {...props} />
  );
}

useGLTF.preload(glbFile);
