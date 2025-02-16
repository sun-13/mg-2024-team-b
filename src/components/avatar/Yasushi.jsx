/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/64f1a714fe61576b46f27ca2.glb -o src/components/Avatar.jsx -k -r public
*/
import { useGLTF } from '@react-three/drei'
import { AvatarInner } from '@/components/avatar/AvatarInner'

const glbFile = "/models/yasushi.glb";

export function Yasushi(props) {
  const { nodes, materials, scene } = useGLTF(glbFile);

  return (
    <AvatarInner nodes={nodes} materials={materials} from="Yasushi" {...props} />
  );
}

useGLTF.preload(glbFile);
