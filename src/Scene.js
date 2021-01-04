import { useGLTF } from '@react-three/drei'
import React from 'react'
import { useFrame } from 'react-three-fiber'
import useTransmissionMaterial from './use-material'
import usePostprocessing from './use-postprocessing'

export default function Scene() {
  const { nodes } = useGLTF('/suzanne-draco.glb', true)
  const [ref, pipeline] = useTransmissionMaterial({
    frontMaterial: {
      color: 'hotpink'
    },
    backMaterial: {
      color: 'fuchsia'
    },
    transmissionMaterial: {
      transmission: 1,
      transmissionIntensity: 2,
      distortionIntensity: 0.4,
      fresnel: 3,
      fresnelAmplifier: 2
    }
  })
  usePostprocessing(pipeline)

  useFrame(() => void (ref.current.rotation.y += 0.01))

  return <mesh ref={ref} geometry={nodes.Suzanne.geometry} />
}
