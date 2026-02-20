import { useEffect, useRef } from 'react';

const StarBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animFrameId;
        let stars = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const initStars = () => {
            stars = [];
            for (let i = 0; i < 180; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 1.5 + 0.2,
                    alpha: Math.random(),
                    speed: Math.random() * 0.004 + 0.001,
                    phase: Math.random() * Math.PI * 2,
                    drift: (Math.random() - 0.5) * 0.08,
                });
            }
        };

        const draw = (t) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach((s) => {
                s.phase += s.speed;
                s.x += s.drift;
                if (s.x < 0) s.x = canvas.width;
                if (s.x > canvas.width) s.x = 0;
                const alpha = 0.3 + 0.7 * Math.abs(Math.sin(s.phase));
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 210, 255, ${alpha})`;
                ctx.fill();
            });
            animFrameId = requestAnimationFrame(draw);
        };

        resize();
        initStars();
        draw(0);
        window.addEventListener('resize', () => { resize(); initStars(); });

        return () => {
            cancelAnimationFrame(animFrameId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
};

export default StarBackground;
