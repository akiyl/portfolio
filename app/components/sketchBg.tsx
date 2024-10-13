"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import p5Types from "p5";

// Dynamically import react-p5 for p5.js rendering in React
const Sketch = dynamic(() => import("react-p5"), { ssr: false });

const GenerativeArtBackground: React.FC = React.memo(() => {
  const [seed] = useState(Math.random() * 1583);
  let t: number = 0;
  let num: number;
  let radius: number;
  let mySize: number;
  let sizes: number[] = [];
  let v_planet: p5Types.Vector[] = [];

  const colors22 = ["#070A0D", "#171F26", "#4A5259", "#7B848C", "#AEB7BF"];
  const colors23 = ["#D94389", "#4D578C", "#3791A6", "#3DF2D1", "#F28080"];
  const colors24 = ["#F28D35", "#D96A29", "#A66641", "#D9B0A7", "#F2DAD8"];
  const colors25 = ["#F2A7D8", "#473959", "#655A8C", "#9F8FD9", "#5979D9"];
  const colors26 = ["#025951", "#012623", "#21BF92", "#73D9BC", "#0D0D0D"];
  const colors7 = ["#fefefe", "#fffffb", "#fafdff", "#fef9fb", "#f7fcfe"];
  const colors11 = ["#025159", "#3E848C", "#7AB8BF", "#C4EEF2", "#A67458"];
  const colors12 = ["#10454F", "#506266", "#818274", "#A3AB78", "#BDE038"];
  const colors13 = ["#D96690", "#F28DB2", "#F2C9E0", "#89C2D9", "#88E8F2"];
  let color_setup1 = colors7;
  let color_setup2 = [
    colors22,
    colors23,
    colors24,
    colors25,
    colors26,
    colors11,
    colors12,
    colors13,
  ][Math.floor(Math.random() * 8)];
  const color_bg = "#f1faee";

  // p5.js setup function
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(
      canvasParentRef
    );
    p5.pixelDensity(3);
    p5.frameRate(10);
    mySize = Math.min(p5.windowWidth, p5.windowHeight);
    radius = mySize * 1.4;
    num = Math.floor(p5.random(10, 30));
    p5.background(color_bg);

    for (let a = 0; a < p5.TAU; a += p5.TAU / num) {
      sizes.push(10 * p5.random(0.1, 0.5));
    }
  };

  // p5.js draw function
  const draw = (p5: p5Types) => {
    p5.randomSeed(seed);

    for (let i = 0; i < num; i++) {
      const a = (p5.TAU / num) * i;
      const x = (radius * p5.sin(a + t)) / p5.random(5, 3);
      const y = (radius * p5.cos(a + t)) / p5.random(3, 5);
      v_planet[i] = p5.createVector(x, y);
    }

    p5.push();
    for (let q = 0; q < 1 / 5; q += 2 * p5.random(0.01, 0.02)) {
      for (let j = 0; j < 2; j++) {
        p5.rotateX(
          p5.random(p5.TAU) * j + t / 10 + q / p5.random(75, 100) / 10
        );
        p5.rotateY(p5.random(p5.PI) * j - t / 10 - q / p5.random(75, 100) / 10);
        p5.rotateZ(
          p5.random(p5.PI / 2) * j - t / 10 + q / p5.random(75, 100) / 10
        );
        p5.noFill();

        for (let i = 0; i < num; i++) {
          const d = p5.random(radius / 32, radius / 16);
          const x_plus = 1.001 * p5.random(-d, d);
          const y_plus = 0.001 * p5.random(-d, d);
          const z_plus = 0.001 * p5.random(-d, d);
          p5.stroke(p5.random(color_setup2));
          p5.strokeWeight(sizes[i] * p5.random(0.2, 0.6));
          p5.point(v_planet[i].x + x_plus, v_planet[i].y + y_plus, z_plus);
        }
      }
    }
    p5.pop();

    t += p5.random(2, 1) * p5.random(0.001, 0.0025);
  };

  return (
    <div className="fixed z-[-2]">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
});

export default GenerativeArtBackground;
