import { useEffect, useRef } from 'react';

export default function NeonNodes({ children }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const nodes = [];
    const numNodes = Math.floor((width * height) / 15000); // Responsive amount of nodes
    const maxDistance = 150;

    for (let i = 0; i < numNodes; i++) {
        nodes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 1
        });
    }

    const draw = () => {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];

            // Move
            node.x += node.vx;
            node.y += node.vy;

            // Bounce
            if (node.x < 0 || node.x > width) node.vx *= -1;
            if (node.y < 0 || node.y > height) node.vy *= -1;

            // Draw Node
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(0, 191, 255, 0.8)"; 
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#00BFFF";
         
            ctx.fill();

            // Connect
            for (let j = i + 1; j < nodes.length; j++) {
                const other = nodes[j];
                const dx = node.x - other.x;
                const dy = node.y - other.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(other.x, other.y);
                    const alpha = 1 - (distance / maxDistance);
                    // INCREASE OPACITY HERE: Change 0.8 to higher/lower (max 1.0)
                    ctx.strokeStyle = `rgba(0, 191, 255, ${alpha * 8})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }

        animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ display: "block" }}
      />
      <div className="relative z-10 h-full w-full">
         {children}
      </div>
    </div>
  );
}
