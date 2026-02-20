import { useEffect, useRef } from 'react';

/**
 * FireParticles — real-time fire particle system rendered on a canvas.
 * Particles rise from the bottom, glow orange→red→gold, then fade out.
 */
const FireParticles = ({ intensity = 80, style = {} }) => {
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

        // Fire color palette: gold → orange → red → transparent
        const fireColors = [
            { r: 255, g: 215, b: 0 },    // gold (core)
            { r: 255, g: 140, b: 0 },    // orange
            { r: 255, g: 69, b: 0 },    // red-orange
            { r: 238, g: 9, b: 121 },  // deep fire / magenta edge
        ];

        const spawn = () => {
            const x = Math.random() * canvas.width;
            const col = fireColors[Math.floor(Math.random() * fireColors.length)];
            particles.push({
                x,
                y: canvas.height + 10,
                vx: (Math.random() - 0.5) * 1.4,
                vy: -(Math.random() * 2.5 + 1.8),
                life: 1,
                decay: Math.random() * 0.012 + 0.006,
                size: Math.random() * 14 + 5,
                col,
                wobble: Math.random() * 0.08,
                wobbleSpeed: Math.random() * 0.05 + 0.02,
                wobblePhase: Math.random() * Math.PI * 2,
            });
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Spawn new particles
            for (let i = 0; i < 3; i++) spawn();

            particles.forEach((p) => {
                p.x += p.vx + Math.sin(p.wobblePhase) * p.wobble;
                p.y += p.vy;
                p.vy *= 0.995; // slight gravity effect
                p.life -= p.decay;
                p.size *= 0.993;
                p.wobblePhase += p.wobbleSpeed;

                if (p.life <= 0 || p.size < 0.5) return;

                const { r, g, b } = p.col;
                const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
                grad.addColorStop(0, `rgba(${r},${g},${b},${p.life * 0.9})`);
                grad.addColorStop(0.5, `rgba(${r},${Math.max(g - 60, 0)},0,${p.life * 0.5})`);
                grad.addColorStop(1, `rgba(0,0,0,0)`);

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();
            });

            // Prune dead particles
            particles = particles.filter((p) => p.life > 0 && p.size >= 0.5);

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

export default FireParticles;
