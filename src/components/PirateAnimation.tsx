import { useEffect, useState } from 'react';

const PirateAnimation = () => {
  const [position, setPosition] = useState(-200);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [gesture, setGesture] = useState('walk');

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setPosition((prev) => {
          const newPos = prev + (direction * (Math.random() > 0.7 ? 0 : 2));

          if (newPos > window.innerWidth + 200) {
            setDirection(-1);
            return window.innerWidth + 200;
          }
          if (newPos < -200) {
            setDirection(1);
            return -200;
          }

          return newPos;
        });

        if (Math.random() > 0.95) {
          setIsPaused(true);
          setGesture(Math.random() > 0.5 ? 'confused' : 'shrug');
          setTimeout(() => {
            setIsPaused(false);
            setGesture('walk');
          }, 1500 + Math.random() * 2000);
        }

        if (Math.random() > 0.98) {
          setDirection((prev) => -prev);
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [direction, isPaused]);

  const isBlockingContent = position > 100 && position < window.innerWidth - 100;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-all duration-100"
      style={{
        left: `${position}px`,
        top: '40%',
        transform: `scaleX(${direction})`,
      }}
    >
      <div
        className={`relative ${isBlockingContent ? 'ring-2 ring-cyan-400' : ''}`}
        style={{
          filter: isBlockingContent ? 'drop-shadow(0 0 8px cyan)' : 'none',
        }}
      >
        <svg
          width="120"
          height="140"
          viewBox="0 0 120 140"
          fill="none"
          className="drop-shadow-2xl"
        >
          <path
            d="M60 10 L55 20 L50 18 L55 25 L45 30 L60 28 L65 35 L62 25 L70 20 L60 22 Z"
            fill="#1a1a1a"
            stroke="#fff"
            strokeWidth="2"
          />
          <circle cx="55" cy="26" r="2" fill="#fff" />

          <ellipse cx="60" cy="50" rx="25" ry="20" fill="#2a2a2a" stroke="#fff" strokeWidth="2" />
          <path d="M50 50 Q60 55 70 50" stroke="#fff" strokeWidth="1.5" fill="none" />

          <rect x="45" y="65" width="30" height="35" fill="#1a1a1a" stroke="#fff" strokeWidth="2" />
          <path d="M50 70 L55 75 L50 80" stroke="#fff" strokeWidth="1" fill="none" />
          <path d="M65 70 L70 75 L65 80" stroke="#fff" strokeWidth="1" fill="none" />

          <rect x="48" y="100" width="8" height="30" fill="#1a1a1a" stroke="#fff" strokeWidth="2" />
          <rect x="64" y="100" width="8" height="30" fill="#1a1a1a" stroke="#fff" strokeWidth="2" />

          {gesture === 'walk' && (
            <>
              <rect x="35" y="75" width="8" height="20" fill="#1a1a1a" stroke="#fff" strokeWidth="1.5" transform="rotate(-20 39 75)" />
              <rect x="77" y="75" width="8" height="20" fill="#1a1a1a" stroke="#fff" strokeWidth="1.5" transform="rotate(20 81 75)" />
            </>
          )}

          {gesture === 'confused' && (
            <>
              <path d="M50 40 Q45 38 42 40" stroke="#fff" strokeWidth="1.5" fill="none" />
              <text x="35" y="35" fill="#fff" fontSize="20">?</text>
            </>
          )}

          {gesture === 'shrug' && (
            <>
              <rect x="35" y="70" width="8" height="20" fill="#1a1a1a" stroke="#fff" strokeWidth="1.5" transform="rotate(-45 39 70)" />
              <rect x="77" y="70" width="8" height="20" fill="#1a1a1a" stroke="#fff" strokeWidth="1.5" transform="rotate(45 81 70)" />
            </>
          )}

          <path
            d="M40 55 Q35 70 30 65 L25 68"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default PirateAnimation;
