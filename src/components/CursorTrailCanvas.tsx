// src/components/CursorTrailCanvas.tsx

import { useEffect, useRef } from "react";
import { Particle } from "../utils/particle";

interface CursorTrailCanvasProps {
  className?: string;
}

const CursorTrailCanvas: React.FC<CursorTrailCanvasProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const lastMouse = useRef({ x: 0, y: 0 });
  const lastParticleTime = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size with pixel ratio handling
    const setCanvasSize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * pixelRatio;
      canvas.height = rect.height * pixelRatio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      ctx.scale(pixelRatio, pixelRatio);
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouseVelocityX = mouse.current.x - lastMouse.current.x;
      const mouseVelocityY = mouse.current.y - lastMouse.current.y;
      const currentTime = Date.now();

      // Create new particles with rate limiting
      if (currentTime - lastParticleTime.current > 16) { // ~60 particles per second
        const speed = Math.sqrt(mouseVelocityX ** 2 + mouseVelocityY ** 2);
        if (speed > 0.1) { // Only create particles when mouse is moving
          const newParticle = new Particle(
            mouse.current.x,
            mouse.current.y,
            mouseVelocityX * 0.3,
            mouseVelocityY * 0.3
          );
          particles.current.push(newParticle);
          lastParticleTime.current = currentTime;
        }
      }

      // Update and draw particles (fixed array iteration)
      particles.current = particles.current.filter((particle) => {
        particle.update();
        particle.draw(ctx);
        return particle.alpha > 0;
      });

      lastMouse.current.x = mouse.current.x;
      lastMouse.current.y = mouse.current.y;

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
};

export default CursorTrailCanvas;
