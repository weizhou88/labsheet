import React, { useEffect, useRef } from "react";
import p5 from "p5";

const Draw = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    sketchRef.current = new p5((p) => {
      p.setup = () => {
        p.createCanvas(400, 400);
      };
      p.draw = () => {
        p.ellipse(200, 200, 50, 50);
      };
    });
    return () => {
      sketchRef.current.remove();
    };
  }, []);

  return <div ref={sketchRef} />;
};

export default Draw;
