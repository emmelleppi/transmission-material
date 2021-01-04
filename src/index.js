import { render } from 'react-dom'
import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import Scene from './Scene'
import { Environment, Loader, OrbitControls, Stats } from '@react-three/drei'

function App() {
  return (
    <>
      <Canvas
        concurrent
        pixelRatio={[1, 1.5]}
        camera={{ position: [0, 0, 5] }}
        gl={{
          powerPreference: 'high-performance',
          alpha: false,
          antialias: false,
          stencil: false,
          depth: false
        }}>
        <Suspense fallback={null}>
          <Scene />
          <Environment background files="adams_place_bridge_1k.hdr" />
        </Suspense>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} />
        <directionalLight position={[-10, -10, -5]} />
        <OrbitControls />
      </Canvas>
      <Stats />
      <Loader />
    </>
  )
}

render(<App />, document.querySelector('#root'))
