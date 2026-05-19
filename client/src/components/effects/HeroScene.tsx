import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import type { Mesh } from 'three'

function FloatingOrb() {
  const ref = useRef<Mesh>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.15
      ref.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1.2, 64, 64]} scale={1.4}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.35}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

function TorusRing() {
  const ref = useRef<Mesh>(null)
  useFrame((state) => {
    if (ref.current) ref.current.rotation.z = state.clock.elapsedTime * 0.3
  })

  return (
    <mesh ref={ref} rotation={[Math.PI / 3, 0, 0]}>
      <torusGeometry args={[2.2, 0.03, 16, 100]} />
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.35} />
    </mesh>
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-80 md:opacity-100 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, -5, -5]} color="#22d3ee" intensity={0.8} />
        <Suspense fallback={null}>
          <FloatingOrb />
          <TorusRing />
        </Suspense>
      </Canvas>
    </div>
  )
}
