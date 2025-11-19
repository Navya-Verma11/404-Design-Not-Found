import { MapPin, Compass } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
}

const NotFoundPage = ({ onNavigate }: NotFoundPageProps) => {
  return (
    <div className="min-h-screen bg-black text-white relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="torn-map" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M10 10 L50 30 L30 70 L70 90 L90 50 L110 80" stroke="white" strokeWidth="1" fill="none" />
            <path d="M120 40 L150 20 L180 60" stroke="white" strokeWidth="1" fill="none" />
            <circle cx="60" cy="50" r="3" fill="white" />
            <circle cx="140" cy="100" r="3" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#torn-map)" />
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <div className="mb-12">
          <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto opacity-50">
            <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="3" fill="none" />
            <line x1="100" y1="20" x2="100" y2="50" stroke="white" strokeWidth="3" />
            <line x1="100" y1="150" x2="100" y2="180" stroke="white" strokeWidth="3" />
            <line x1="20" y1="100" x2="50" y2="100" stroke="white" strokeWidth="3" />
            <line x1="150" y1="100" x2="180" y2="100" stroke="white" strokeWidth="3" />

            <line x1="100" y1="100" x2="100" y2="40" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
            <polygon points="95,45 100,35 105,45" fill="white" />

            <line x1="70" y1="70" x2="130" y2="130" stroke="white" strokeWidth="2" strokeDasharray="3,3" opacity="0.5" />
            <line x1="70" y1="130" x2="130" y2="70" stroke="white" strokeWidth="2" strokeDasharray="3,3" opacity="0.5" />

            <circle cx="100" cy="100" r="8" fill="white" />

            <path d="M 60 60 Q 50 50 60 40" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
            <path d="M 140 140 Q 150 150 140 160" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
          </svg>
        </div>

        <div className="transform -rotate-2 mb-8">
          <h1 className="text-8xl font-bold mb-4" style={{ fontFamily: 'Courier New, monospace' }}>
            404
          </h1>
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            YE HAVE DRIFTED<br />OFF THE MAP
          </h2>
        </div>

        <div className="bg-zinc-900 border-2 border-white p-8 transform rotate-1 mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6" />
            <p className="text-lg" style={{ fontFamily: 'Georgia, serif' }}>
              The page ye seek be lost to the depths
            </p>
          </div>

          <div className="border-t border-zinc-700 my-6 pt-6">
            <p className="text-sm text-zinc-400 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Possible reasons for this misfortune:
            </p>
            <ul className="text-sm text-left space-y-2 max-w-md mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
              <li>• The link was written on soggy parchment</li>
              <li>• Ye typed the address while the ship was rocking</li>
              <li>• This page never existed (intentional confusion)</li>
              <li>• The web designers were three sheets to the wind</li>
              <li>• Mercury is in retrograde (probably)</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => onNavigate('home')}
            className="px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-all transform hover:rotate-2 text-xl font-bold"
            style={{ fontFamily: 'Courier New, monospace' }}
          >
            RETURN TO PORT?
          </button>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => onNavigate('dashboard')}
              className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-all transform hover:-rotate-1 text-sm"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Dashboard (Maybe)
            </button>

            <button
              onClick={() => onNavigate('registration')}
              className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-all transform hover:rotate-1 text-sm"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Registration (Possibly)
            </button>
          </div>

          <button
            onClick={() => window.history.back()}
            className="block mx-auto px-6 py-2 border border-zinc-700 hover:border-white transition-colors text-xs mt-8"
            style={{ fontFamily: 'monospace' }}
          >
            Turn Back (Probably)
          </button>
        </div>

        <div className="mt-12 flex justify-center gap-8 opacity-30">
          <Compass className="w-8 h-8" />
          <div className="text-2xl">⚓</div>
          <div className="text-2xl">◆</div>
          <div className="text-2xl">✦</div>
        </div>

        <div className="mt-8 text-xs text-cyan-400 border border-cyan-400 inline-block px-4 py-2">
          ⚠ Error code: LOST_AT_SEA
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
