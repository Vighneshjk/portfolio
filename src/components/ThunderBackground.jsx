import { useEffect, useRef, useState } from 'react';
import './ThunderBackground.css';

const ThunderBackground = () => {
  const canvasRef = useRef(null);
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    let clouds = [];
    let lightning = null;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Particle system (Electric Sparks)
    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: Math.random() * 0.5 + 0.5,
        color: Math.random() > 0.5 ? '#00d2ff' : '#00f2fe'
      };
    };

    for (let i = 0; i < 50; i++) {
      particles.push(createParticle());
    }

    // Lightning strike logic
    const createLightning = () => {
      const x = Math.random() * canvas.width;
      const points = [{ x, y: 0 }];
      let currentX = x;
      let currentY = 0;
      
      while (currentY < canvas.height) {
        currentX += (Math.random() - 0.5) * 100;
        currentY += Math.random() * 50 + 20;
        points.push({ x: currentX, y: currentY });
      }

      return {
        points,
        alpha: 1,
        width: Math.random() * 3 + 1
      };
    };

    const drawLightning = (bolt) => {
      if (!bolt) return;
      ctx.beginPath();
      ctx.moveTo(bolt.points[0].x, bolt.points[0].y);
      for (let i = 1; i < bolt.points.length; i++) {
        ctx.lineTo(bolt.points[i].x, bolt.points[i].y);
      }
      ctx.strokeStyle = `rgba(255, 255, 255, ${bolt.alpha})`;
      ctx.lineWidth = bolt.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#00d2ff';
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw atmospheric glow
      const grad = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      grad.addColorStop(0, '#050b2400');
      grad.addColorStop(1, '#020617');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.005;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.life * 255).toString(16).padStart(2, '0');
        ctx.fill();

        if (p.life <= 0 || p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
          particles[i] = createParticle();
        }
      });

      // Handle lightning
      if (!lightning && Math.random() < 0.005) {
        lightning = createLightning();
        setIsFlashing(true);
        setTimeout(() => setIsFlashing(false), 500);
      }

      if (lightning) {
        drawLightning(lightning);
        lightning.alpha -= 0.05;
        if (lightning.alpha <= 0) {
          lightning = null;
        }
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className={`thunder-background ${isFlashing ? 'thunder-background--flashing' : ''}`}>
      <div className="thunder-background__overlay" />
      <div className="thunder-background__flash" />
      <canvas ref={canvasRef} className="thunder-background__canvas" />
    </div>
  );
};

export default ThunderBackground;
