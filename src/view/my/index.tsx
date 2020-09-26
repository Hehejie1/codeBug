import React, {Component} from 'react';
import { SettingOutlined, HighlightOutlined, CloseCircleOutlined, QuestionCircleOutlined, ImportOutlined, RightOutlined } from '@ant-design/icons';
import "./index.scss"
// import * as THREE from "three"
import avatarImg from '../../assert/images/user_one.jpg'


interface IProps{

}

interface IState{
    msg: string
}

export default class Index extends Component<IProps, IState>{
    constructor(props: any){
        super(props);
        this.state = {
            msg : '我的'
        }
        // this.init();
    }
    // init(){
    //     var scene = new THREE.Scene();
    //     var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    //     var renderer = new THREE.WebGLRenderer({
    //         antialias: true
    //     });
    //     renderer.setSize(150, 150);
    //     document.getElementById("react-gl-avatar")?.appendChild(renderer.domElement);
    //     renderer.setClearColor(0xFFFFFF, 1.0)
    //     var geometry = new THREE.Geometry();
    //     var material = new THREE.LineBasicMaterial( { vertexColors: true } );
    //     var color1 = new THREE.Color( 0x444444 ), color2 = new THREE.Color( 0xFF0000 );
    //     // 线的材质可以由2点的颜色决定
    //     var p1 = new THREE.Vector3( -100, 0, 100 );
    //     var p2 = new THREE.Vector3(  100, 0, -100 );
    //     geometry.vertices.push(p1);
    //     geometry.vertices.push(p2);
    //     geometry.colors.push( color1, color2 );
    //     var line = new THREE.LineSegments( geometry, material );
    //     scene.add(line);
    //     console.log(scene);
    // }
    render(){
        return (
            <div className="hh-my">
                <section>
                    <a href="/index"  className="hh-close"> <CloseCircleOutlined className="f16" /></a>
                </section>
                <section className="hh-avatar">
                    <div id="react-gl-avatar" className="hh-avatar-gl">
                        <img src={avatarImg} />
                    </div>
                    <div className="hh-avatar-info">
                        <span>呵呵杰</span>
                        <span>水瓶座</span>
                    </div>
                </section>
                <section className="hh-options">
                    <ul className="hh-groups">
                        <li className="hh-row"><a href="/my/setting" className="hh-btn-item"><SettingOutlined className="icon" />设置<RightOutlined className="fr" /></a></li>
                        <li className="hh-row"><a href="/my/goal" className="hh-btn-item"><HighlightOutlined className="icon" />我的目标<RightOutlined className="fr" /></a></li>
                        <li className="hh-row"><a href="/my/help" className="hh-btn-item"><QuestionCircleOutlined className="icon" />帮助<RightOutlined className="fr" /></a></li>
                        <li className="hh-row"><a href="/login" className="hh-btn-item"><ImportOutlined className="icon" />退出<RightOutlined className="fr" /></a></li>
                    </ul>
                </section>
            </div>
        )
    }
}