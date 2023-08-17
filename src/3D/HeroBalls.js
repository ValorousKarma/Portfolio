/*  slightly modified code from React Three Fiber Pmndrs.doc example "Object clump
  - Paul Henschel/drcmda 
  - https://codesandbox.io/s/ssbdsw?file=/public/index.html*/

import * as THREE from 'three';
import {
  Canvas,
  useFrame,
  useThree,
} from '@react-three/fiber';
import { Physics, useSphere } from '@react-three/cannon';
import {
  EffectComposer,
  N8AO,
  SMAA,
} from '@react-three/postprocessing';

const rfs = THREE.MathUtils.randFloatSpread;
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const baubleMaterial = new THREE.MeshStandardMaterial({
  color: 'white',
  roughness: 0,
  envMapIntensity: 1,
});

export const HeroCanvas = ({ icon }) => (
  <Canvas
    shadows
    gl={{ antialias: false }}
    dpr={[1, 1.5]}
    camera={{
      position: [0, 0, 40],
      rotation: [(Math.PI / 180) * 3, 0, 0],
      fov: 35,
      near: 1,
      far: 40,
    }}
  >
    <ambientLight intensity={1.5} />
    <color
      attach='background'
      args={['#f2f2f2']}
    />
    <pointLight
      intensity={20}
      position={[-10, 10, 10]}
      decay={1.5}
    />
    <Physics
      gravity={[0, 2, 0]}
      iterations={10}
    >
      <Pointer />
      <Clump />
    </Physics>
    <EffectComposer
      disableNormalPass
      multisampling={0}
    >
      <N8AO
        halfRes
        color='black'
        aoRadius={2}
        intensity={1}
        aoSamples={6}
        denoiseSamples={4}
      />
      <SMAA />
    </EffectComposer>
  </Canvas>
);

function Clump({
  mat = new THREE.Matrix4(),
  vec = new THREE.Vector3(),
  ...props
}) {
  const [ref, api] = useSphere(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)],
  }));
  useFrame((state) => {
    for (let i = 0; i < 40; i++) {
      // Get current whereabouts of the instanced sphere
      ref.current.getMatrixAt(i, mat);
      // Normalize the position and multiply by a negative force.
      // This is enough to drive it towards the center-point.
      api
        .at(i)
        .applyForce(
          vec
            .setFromMatrixPosition(mat)
            .normalize()
            .multiplyScalar(-40)
            .toArray(),
          [0, 0, 0]
        );
    }
  });
  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[null, null, 40]}
      geometry={sphereGeometry}
      material={baubleMaterial}
    />
  );
}

function Pointer() {
  const viewport = useThree((state) => state.viewport);
  const [, api] = useSphere(() => ({
    type: 'Kinematic',
    args: [3],
    position: [0, 0, 0],
  }));
  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      0
    )
  );
}
