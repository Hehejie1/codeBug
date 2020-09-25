import * as React from "react";
import { ICommonCanvas } from "../../../../types/canvas";
import Particles from "reactparticles.js";
// import praticleConfig from './json/star.json'


const praticleConfig  = {
  "particles": {
    "number": {
      "value": 500,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

interface IProps extends ICommonCanvas {
  id: string;
  config?: string;
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
  state = {
    style: {
      position: "absolute" as "absolute",
      display: "block",
      top: "0",
      left: "0",
      height: "100vh",
      width: "100vw",
    },
  };

  render() {
    return (
      <Particles
        id={this.props.id}
        config={JSON.stringify(praticleConfig)}
        style={this.props.style}
        className={this.props.className}
      />
    );
  }
}
