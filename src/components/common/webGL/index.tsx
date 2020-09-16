import React from "react";
import { Shaders, Node, GLSL } from "gl-react";
import { Interface } from "readline";
const shaders = Shaders.create({
  helloBlue: {
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform float blue;
void main() {
  gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);
}`
  }
});

interface IState{
    blue : any
}


class HelloBlue extends React.Component<IState> {
  render() {
    const { blue } = this.props;
    return <Node shader={shaders.helloBlue} uniforms={{ blue }} />;
  }
}
export default HelloBlue