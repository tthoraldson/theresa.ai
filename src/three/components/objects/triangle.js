import React, { useRef } from "react"
import { useFrame} from "react-three-fiber"

function Triangle(props) {
    const mesh = useRef()
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
    return (
        <mesh
            {...props}
            ref={mesh}>
            <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
            <meshStandardMaterial wireframe attach="material" color='white' />
        </mesh>
    )
}  

export default Triangle;