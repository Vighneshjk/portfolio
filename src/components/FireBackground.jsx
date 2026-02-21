import { useEffect, useRef } from 'react';
import './FireBackground.css';

/**
 * FireBackground — A fixed full-screen background effect with floating embers and heat glow.
 */
const FireBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;
        let particles = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const fireColors = [
            { r: 255, g: 140, b: 0, a: 0.8 },  // orange
            { r: 255, g: 69, b: 0, a: 0.7 },   // red-orange
            { r: 255, g: 215, b: 0, a: 0.6 },  // gold
            { r: 238, g: 9, b: 121, a: 0.4 },  // deep pink/fire
        ];

        const spawn = () => {
            const size = Math.random() * 3 + 1;
            particles.push({
                x: Math.random() * canvas.width,
                y: canvas.height + 20,
                vx: (Math.random() - 0.5) * 1.5,
                vy: -(Math.random() * 2 + 1),
                life: 1,
                decay: Math.random() * 0.005 + 0.002,
                size,
                baseSize: size,
                color: fireColors[Math.floor(Math.random() * fireColors.length)],
                wobble: Math.random() * 2,
                wobbleSpeed: Math.random() * 0.05,
                phase: Math.random() * Math.PI * 2
            });
        };

        // Initial particles
        for (let i = 0; i < 50; i++) {
            const p = {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 1.5,
                vy: -(Math.random() * 2 + 1),
                life: Math.random(),
                decay: Math.random() * 0.005 + 0.002,
                size: Math.random() * 3 + 1,
                color: fireColors[Math.floor(Math.random() * fireColors.length)],
                wobble: Math.random() * 2,
                wobbleSpeed: Math.random() * 0.05,
                phase: Math.random() * Math.PI * 2
            };
            p.baseSize = p.size;
            particles.push(p);
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Add subtle heat glow at the bottom
            const gradient = ctx.createLinearGradient(0, canvas.height, 0, canvas.height - 300);
            gradient.addColorStop(0, 'rgba(255, 69, 0, 0.15)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            if (particles.length < 150 && Math.random() > 0.3) {
                spawn();
            }

            particles.forEach((p, index) => {
                p.x += p.vx + Math.sin(p.phase) * p.wobble;
                p.y += p.vy;
                p.phase += p.wobbleSpeed;
                p.life -= p.decay;

                // Pulsing size
                p.size = p.baseSize * (0.8 + Math.sin(p.phase) * 0.2) * p.life;

                if (p.life <= 0 || p.y < -20) {
                    particles[index] = {
                        x: Math.random() * canvas.width,
                        y: canvas.height + 20,
                        vx: (Math.random() - 0.5) * 1.5,
                        vy: -(Math.random() * 2 + 1),
                        life: 1,
                        decay: Math.random() * 0.005 + 0.002,
                        size: Math.random() * 3 + 1,
                        baseSize: Math.random() * 3 + 1,
                        color: fireColors[Math.floor(Math.random() * fireColors.length)],
                        wobble: Math.random() * 2,
                        wobbleSpeed: Math.random() * 0.05,
                        phase: Math.random() * Math.PI * 2
                    };
                    return;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

                // Glow effect
                ctx.shadowBlur = 10;
                ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.life * 0.5})`;

                ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.life * p.color.a})`;
                ctx.fill();

                // Reset shadow for next draws
                ctx.shadowBlur = 0;
            });

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
        <div className="fire-background">
            <div className="fire-background__overlay" />
            <canvas ref={canvasRef} className="fire-background__canvas" />
        </div>
    );
};

export default FireBackground;
