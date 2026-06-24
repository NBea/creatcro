import { useEffect, useRef } from "react";
import "./MouseTrail.scss";

type Point = {
  x: number;
  y: number;
  life: number;
};

function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    // resize canvas
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let points: Point[] = [];

    let lastX = 0;
    let lastY = 0;

    // 🎨 DRAW LOOP
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.forEach((p, i) => {
        p.life -= 0.009;

        if (p.life <= 0) {
          points.splice(i, 1);
          return;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2 * p.life, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(204,199,194,${p.life})`;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    // 🖱 MOUSE MOVE
    const move = (e: MouseEvent) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      // više točaka ako je miš brz → glatka linija
      const steps = Math.max(1, Math.floor(distance / 2));

      for (let i = 0; i < steps; i++) {
        const t = i / steps;

        points.push({
          x: lastX + dx * t,
          y: lastY + dy * t,
          life: 1.5,
        });
      }

      lastX = e.clientX;
      lastY = e.clientY;
    };

    window.addEventListener("mousemove", move);
    draw();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return <canvas ref={canvasRef} className="mouse-trail" />;
}

export default MouseTrail;