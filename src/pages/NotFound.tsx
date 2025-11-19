import { useState } from 'react';

interface NotFoundProps {
  onNavigate: (page: string) => void;
}

export default function NotFound({ onNavigate }: NotFoundProps) {
  const [cursorStyle, setCursorStyle] = useState('default');

  const handleReturn = () => {
    const pages = ['about', 'register', 'verify', '404'];
    onNavigate(pages[Math.floor(Math.random() * pages.length)]);
  };

  const handleGoBack = () => {
    const pages = ['dashboard', 'about', '404', 'register'];
    onNavigate(pages[Math.floor(Math.random() * pages.length)]);
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center" style={{ cursor: cursorStyle }}>
      <div className="max-w-2xl mx-auto text-center px-8">
        <h1 className="text-8xl font-bold mb-8" style={{ fontFamily: 'Courier New', letterSpacing: '12px', marginLeft: '-45px' }}>
          404
        </h1>

        <p className="text-xl mb-4 font-mono" style={{ marginLeft: '23px', lineHeight: '1.8' }}>
          This might not be the page you intended.
        </p>

        <p className="text-sm mb-8 text-gray-600" style={{ marginLeft: '-34px', marginTop: '34px' }}>
          Or perhaps it is. We cannot be certain of your original intention.
        </p>

        <div className="my-12 mx-auto" style={{ width: '400px', height: '300px', marginLeft: '18%' }}>
          <svg width="400" height="300" className="border-2 border-black bg-gray-50">
            <path d="M 50 50 L 150 50 L 150 100 L 200 150 L 150 200 L 100 180 L 80 220 L 120 250 L 200 230 L 250 200 L 300 180 L 320 150 L 280 100 L 250 80 L 200 60 L 150 70 L 100 90 L 50 50"
                  stroke="black"
                  strokeWidth="2"
                  fill="none"
                  style={{ strokeDasharray: '5,5' }}
            />
            <circle cx="200" cy="150" r="30" fill="gray" opacity="0.3" />
            <rect x="180" y="180" width="40" height="60" fill="black" opacity="0.2" />
            <line x1="100" y1="100" x2="300" y2="200" stroke="gray" strokeWidth="1" />
            <line x1="300" y1="100" x2="100" y2="200" stroke="gray" strokeWidth="1" />
            <text x="200" y="280" textAnchor="middle" fontSize="10" fill="gray">
              Exit is almost somewhere
            </text>
          </svg>
        </div>

        <div className="flex gap-8 justify-center mt-12" style={{ marginLeft: '-23px' }}>
          <button
            onClick={handleReturn}
            onMouseEnter={() => setCursorStyle('help')}
            onMouseLeave={() => setCursorStyle('default')}
            className="bg-gray-300 hover:bg-gray-400 text-black font-mono py-3 px-8 border-2 border-black"
            style={{ marginRight: '12px' }}
          >
            Return?
          </button>

          <button
            onClick={handleGoBack}
            onMouseEnter={() => setCursorStyle('crosshair')}
            onMouseLeave={() => setCursorStyle('default')}
            className="bg-black hover:bg-gray-900 text-white font-serif py-3 px-8 border-2 border-gray-500"
            style={{ marginLeft: '-5px' }}
          >
            Go Back-ish
          </button>
        </div>

        <div className="mt-12">
          <p className="text-[8px] text-gray-400" style={{ marginLeft: '67px', lineHeight: '1.6' }}>
            Neither button is guaranteed to return you to your intended destination. One may lead to the homepage,
            the other may lead elsewhere, or both may lead to unexpected locations. The choice is yours to make,
            though the outcome remains uncertain regardless of your selection.
          </p>
        </div>

        <div className="mt-16 bg-gray-900 text-white p-6 border-4 border-gray-400" style={{ marginLeft: '34px', width: '89%' }}>
          <p className="font-bold text-lg mb-2">Error Code: <span className="text-cyan-400">UNCERTAIN</span></p>
          <p className="text-xs font-mono">
            The requested resource may exist elsewhere, or may have never existed at all.
          </p>
          <p className="text-[7px] text-gray-500 mt-3">
            This error message is decorative and provides no actionable information.
          </p>
        </div>

        <div className="mt-8">
          <p className="text-yellow-300 font-bold text-2xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            ⚠ CRITICAL: You are currently somewhere.
          </p>
        </div>
      </div>
    </div>
  );
}
