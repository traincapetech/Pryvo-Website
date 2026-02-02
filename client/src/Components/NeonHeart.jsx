import { useEffect, useRef } from "react";

export default function NeonHeart({ children }) {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    function createParticle() {
      if (!scene) return;

      const p = document.createElement("span");
      const size = Math.random() * 6 + 4;

      p.style.position = "absolute";
      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.borderRadius = "50%";
      p.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
      p.style.left = "50%";
      p.style.top = "50%";
      p.style.transform = "translate(-50%, -50%)";
      p.style.boxShadow = `0 0 15px ${p.style.background}`;
      p.style.opacity = "0.9";

      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 120 + 40;

      p.animate(
        [
          { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
          {
            transform: `translate(${Math.cos(angle) * distance}px, ${
              Math.sin(angle) * distance
            }px) scale(0)`,
            opacity: 0,
          },
        ],
        {
          duration: 1800,
          easing: "ease-out",
        },
      );

      scene.appendChild(p);
      setTimeout(() => {
        if (p.parentNode === scene) {
          p.remove();
        }
      }, 1800);
    }

    const interval = setInterval(createParticle, 120);
    return () => {
      clearInterval(interval);
      if (scene) {
        scene.innerHTML = ""; // Clean up any remaining particles
      }
    };
  }, []);

  return (
    <>
      <style>{`
        .neon-scene {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background: radial-gradient(circle at center, #050505, #000);
          z-index: 9999;
        }

        .neon-heart {
          width: 130px;
          height: 130px;
          position: relative;
          background: linear-gradient(135deg, #ff2d55, #c77dff, #4cc9f0);
          transform: rotate(-45deg);
          animation: heart-pulse 1.4s infinite ease-in-out;
          filter: blur(0.2px);
          box-shadow:
            0 0 20px #ff2d55,
            0 0 40px #c77dff,
            0 0 70px #4cc9f0,
            0 0 120px rgba(76,201,240,0.8);
          z-index: 2;
        }

        .neon-heart::before,
        .neon-heart::after {
          content: "";
          width: 130px;
          height: 130px;
          position: absolute;
          border-radius: 50%;
          background: inherit;
        }

        .neon-heart::before {
          top: -65px;
          left: 0;
        }

        .neon-heart::after {
          left: 65px;
          top: 0;
        }

        .neon-content {
          position: absolute;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        @keyframes heart-pulse {
          0% {
            transform: rotate(-45deg) scale(1);
            filter: brightness(1);
          }
          50% {
            transform: rotate(-45deg) scale(1.2);
            filter: brightness(1.3);
          }
          100% {
            transform: rotate(-45deg) scale(1);
            filter: brightness(1);
          }
        }
      `}</style>

      <div className="neon-scene" ref={sceneRef}>
        <div className="neon-heart"></div>
        {children && <div className="neon-content">{children}</div>}
      </div>
    </>
  );
}
