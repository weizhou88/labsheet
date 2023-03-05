import React from 'react'
import p5 from 'p5'
import Mover from './mover'
import WindButton from './widget/windButton'

const sketch = (p) => {

  let header = document.querySelector("header");
  let sidebar = document.querySelector("sidebar");
  let main = document.querySelector("main");

  let headerHeight = header.offsetHeight;

  let mover
  let toolbarMargin
  let windButton

  p.setup = () => {
    let offset = headerHeight + 36;
    sidebar.style.height = `calc(100vh - ${offset}px)`;
    main.style.height = sidebar.style.height;
    let canvasWidth = header.offsetWidth - 400;
    let canvasHeight = sidebar.offsetHeight-80;
    p.createCanvas(canvasWidth, canvasHeight);
    p.frameRate(30);
    toolbarMargin = 60;
    mover = new Mover(p, canvasWidth, canvasHeight, toolbarMargin);
    windButton = new WindButton(p, 10, p.height/2 - 50, 40, 100);
  }

  p.draw = showForcelab;

  function showForcelab() {
    p.background(255);
    drawLabBox();
    windButton.draw();

    let gravity = p.createVector(0, 0.5);
    mover.applyForce(gravity);
  
    if (p.mouseIsPressed) {
      let wind = p.createVector(0.1, 0);
      mover.applyForce(wind);
    }

    mover.update();
    mover.checkEdges();  
    mover.display();
  }

  function drawLabBox(){
    p.strokeWeight(3);
    p.rect(toolbarMargin, toolbarMargin, p.width-2*toolbarMargin, p.height-2*toolbarMargin);
  }

}


export default class Force1 extends React.Component {
  componentDidMount() {
    new p5(sketch)
  }

  render() {
    return <></>
  }
}



