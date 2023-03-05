import React from 'react'
import p5 from 'p5'

const sketch = (p) => {

  let header = document.querySelector("header");
  let sidebar = document.querySelector("sidebar");
  let main = document.querySelector("main");

  let headerHeight = header.offsetHeight;

  let x = 0;
  let y = 0;
  let xSpeed = 5;
  let ySpeed = 5;

  p.setup = () => {
    let offset = headerHeight + 36;
    sidebar.style.height = `calc(100vh - ${offset}px)`;
    main.style.height = sidebar.style.height;
    let canvasWidth = header.offsetWidth - 500;
    p.createCanvas(canvasWidth, sidebar.offsetHeight-180);
  }

  p.draw = () => {
      p.background(255);
      p.fill(255, 0, 0);
      p.ellipse(x, y, 50, 50);
      x += xSpeed;
      y += ySpeed;
      if (x > p.width || x < 0) {
          xSpeed *= -1;
      }
      if (y > p.height || y < 0) {
          ySpeed *= -1;
      }
  }
}


export default class Draw1 extends React.Component {
  componentDidMount() {
    new p5(sketch)
  }

  render() {
    return <></>
  }
}
