import React, { useEffect, useRef } from 'react';

const DotsAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const maxx = window.innerWidth;
    const maxy = window.innerHeight;
    const halfx = maxx / 2;
    const halfy = maxy / 2;
    const dotCount = 200;
    const dots = [];

    canvas.width = maxx;
    canvas.height = maxy;

    class Dot {
      constructor() {
        this.rad_x = Math.random() * halfx;
        this.rad_y = Math.random() * halfy;
        this.alpha = Math.random() * 360;
        this.speed = Math.random() * 100 < 50 ? 1 : -1;
        this.speed *= 0.1;
        this.size = Math.random() * 5 + 1;
        this.color = Math.floor(Math.random() * 256);
      }

      draw() {
        const dx = this.rad_x * Math.cos((this.alpha / 180) * Math.PI);
        const dy = this.rad_y * Math.sin((this.alpha / 180) * Math.PI);
        context.fillStyle = `rgb(${this.color},${this.color},${this.color})`;
        context.fillRect(halfx + dx, halfy + dy, this.size, this.size);
      }

      move() {
        this.alpha += this.speed;
        if (Math.random() * 100 < 50) {
          this.color += 1;
        } else {
          this.color -= 1;
        }
      }
    }

    for (let i = 0; i < dotCount; i++) {
      dots.push(new Dot());
    }

    const render = () => {
      context.fillStyle = '#000000';
      context.fillRect(0, 0, maxx, maxy);

      for (let i = 0; i < dotCount; i++) {
        dots[i].draw();
        dots[i].move();
      }

      requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(render);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
};

export default DotsAnimation;
