import { motion } from "framer-motion";

export default function ProfessionalHeartLoader({ children }) {
  return (
    <>
      <style>{`
        .loader-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #ffffff; /* Clean professional background */
          overflow: hidden;
          z-index: 9999;
        }

        .heart-container {
          position: relative;
          width: 120px;
          height: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 30px;
        }

        /* The Professional SVG Heart */
        .main-heart {
          width: 80px;
          height: 80px;
          fill: url(#heartGradient);
          filter: drop-shadow(0 10px 20px rgba(255, 45, 85, 0.3));
          z-index: 2;
        }

        /* Subtle ring animation around the heart */
        .heart-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid #ff2d55;
          border-radius: 50%;
          opacity: 0;
        }

        .content-area {
          text-align: center;
          z-index: 10;
        }

        .loading-letters {
          font-family: 'Inter', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: -0.5px;
        }

        .loading-tagline {
          margin-top: 8px;
          color: #888;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
      `}</style>

      <div className="loader-wrapper">
        <div className="heart-container">
          {/* Pulsing Background Rings */}
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              className="heart-ring"
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1.8, opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.7,
                ease: "easeOut",
              }}
            />
          ))}

          {/* The Professional Heart Icon */}
          <motion.svg
            className="main-heart"
            viewBox="0 0 24 24"
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <defs>
              <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#ff5f6d", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#ffc371", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </motion.svg>
        </div>

        <div className="content-area">
          {children}
        </div>
      </div>
    </>
  );
}