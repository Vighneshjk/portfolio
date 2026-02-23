import { useEffect, useRef } from 'react';

/**
 * ThunderParticles — real-time electric particle system rendered on a canvas.
 * Particles move jittery, glow blue→cyan→white, and flash.
 */
const ThunderParticles = ({ intensity = 80, style = {} }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;
        let particles = [];

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        // Thunder color palette: Cyan → Electric Blue → White
        const thunderColors = [
            { r: 0, g: 210, b: 255 },    // electric blue
            { r: 0, g: 242, b: 254 },    // cyan
            { r: 255, g: 255, b: 255 },  // white
            { r: 58, g: 123, b: 213 },   // deep blue
        ];

        const spawn = () => {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const col = thunderColors[Math.floor(Math.random() * thunderColors.length)];
            particles.push({
                x,
                y,
                vx: (Math.random() - 0.5) * 3,
                vy: (Math.random() - 0.5) * 3,
                life: 1,
                decay: Math.random() * 0.03 + 0.015,
                size: Math.random() * 4 + 1,
                col,
                jitter: Math.random() > 0.8,
            });
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Spawn new particles based on intensity
            if (particles.length < intensity) {
                for (let i = 0; i < 2; i++) spawn();
            }

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.jitter) {
                    p.x += (Math.random() - 0.5) * 10;
                    p.y += (Math.random() - 0.5) * 10;
                }

                p.life -= p.decay;
                p.size *= 0.98;

                if (p.life <= 0 || p.size < 0.2) return;

                const { r, g, b } = p.col;
                const alpha = p.life * 0.8;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.shadowBlur = 10;
                ctx.shadowColor = `rgba(${r},${g},${b},${alpha})`;
                ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
                ctx.fill();
                ctx.shadowBlur = 0;

                // Occasional "arc" between nearby particles
                if (Math.random() > 0.98) {
                    const nearest = particles.find(other =>
                        other !== p &&
                        Math.hypot(other.x - p.x, other.y - p.y) < 50
                    );
                    if (nearest) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(nearest.x, nearest.y);
                        ctx.strokeStyle = `rgba(0, 210, 255, ${p.life * 0.3})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            });

            // Prune dead particles
            particles = particles.filter((p) => p.life > 0 && p.size >= 0.2);

            animId = requestAnimationFrame(draw);
        };

        resize();
        draw();

        const ro = new ResizeObserver(resize);
        ro.observe(canvas);

        return () => {
            cancelAnimationFrame(animId);
            ro.disconnect();
        };
    }, [intensity]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
                ...style,
            }}
        />
    );
};

export default ThunderParticles;
