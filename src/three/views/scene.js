import React from 'react';
import { Canvas } from 'react-three-fiber';

import Triangle from '../components/objects/triangle';

class Scene extends React.Component {
  render(){
    return(
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Triangle position={[0, 0, 0]} test="hello" />
      </Canvas>
    );
  } 
}


export default Scene;