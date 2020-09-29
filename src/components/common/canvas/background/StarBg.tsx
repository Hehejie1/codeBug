import * as React from "react";
import { ICommonCanvas } from "../../../../types/canvas";
import ParticlesBg from 'particles-bg'

interface IProps extends ICommonCanvas {
  id?: string;
  style?: any;
  className?: string;
}
interface IState {
  style: any;
}

// particles.number.value ： 粒子的数量
// particles.number.density ： 粒子的稀密程度
// particles.number.density.enable ： 启用粒子的稀密程度 （true 或 false）
// particles.number.density.value_area ： 每一个粒子占据的空间（启用粒子密度，才可用）
// particles.color.value ： 粒子的颜色 （支持16进制”#b61924”，rgb”{r:182, g:25, b:36}”，hsl，以及random）
// particles.shape.type： 粒子的形状 （”circle” “edge” “triangle” “polygon” “star” “image”）
// particles.opacity.value： 粒子的透明度
// particles.size.anim.enable： 是否启用粒子速度（true/false）
// particles.size.anim.speed： 粒子动画频率
// particles.size.anim.sync： 粒子运行速度与动画是否同步
// particles.move.speed： 粒子移动速度

/*
 * @desc ReactParticles.js class
 */

export default class StarBg extends React.Component<IProps, IState> {
  // Initial state is the default style; style can be overridden
  render() {
    return (
      <>
         <ParticlesBg type="lines" bg={true} />
      </>
    );
  }
}
