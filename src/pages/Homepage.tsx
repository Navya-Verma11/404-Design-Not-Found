import { Anchor, Compass, Skull } from 'lucide-react';
import bgImage from '../home-bg.jpg';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div
      className="min-h-screen text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/600 z-0"></div>

      <div className="relative z-10">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="scratches" width="100" height="100" patternUnits="userSpaceOnUse">
              <line x1="10" y1="20" x2="90" y2="30" stroke="white" strokeWidth="0.5" />
              <line x1="20" y1="60" x2="80" y2="55" stroke="white" strokeWidth="0.5" />
              <line x1="30" y1="80" x2="70" y2="85" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#scratches)" />
          </svg>
        </div>

        <nav className="relative z-10 p-6 border-b-2 border-white transform -rotate-1">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl font-serif" style={{ fontFamily: 'Georgia, serif' }}>
              NATIONAL SMARTEST PERSON<br />
              <span className="text-xs tracking-wider">EXAMINATION & REGISTRATION</span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => onNavigate('readme')}
                className="px-3 py-1 border border-white hover:bg-white hover:text-black transition-colors text-xs"
              >
                INSTRUCTIONS (MAYBE)
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-3 py-1 border border-white hover:bg-white hover:text-black transition-colors text-xs"
              >
                ABOUT (OR NOT)
              </button>
            </div>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="relative">
            <div className="absolute -top-10 left-0 w-full h-96 overflow-hidden opacity-20">
              <svg width="100%" height="400" viewBox="0 0 800 400">
                <path
                  d="M100 200 Q200 150 300 200 Q400 250 500 200 Q600 150 700 200"
                  stroke="white"
                  strokeWidth="3"
                  fill="none"
                />
                <polygon points="650,180 700,200 650,220" fill="white" />
                <circle cx="300" cy="200" r="5" fill="white" />
                <circle cx="500" cy="200" r="5" fill="white" />
              </svg>
            </div>

            <div className="text-center mb-16 relative" style={{ marginTop: '100px', marginLeft: '-50px' }}>
              <h1 className="text-6xl font-bold mb-4 transform -rotate-2" style={{ fontFamily: 'Courier New, monospace' }}>
                PROVE YER<br />BRILLIANCE
              </h1>
              <p className="text-xl mb-2 transform rotate-1" style={{ fontFamily: 'Georgia, serif' }}>
                (Or attempt to, ye brave fool)
              </p>
              <div className="inline-block px-2 py-1 text-xs text-cyan-400 border border-cyan-400 transform rotate-2">
                ⚠ CAPTAIN JACK SPARROW
              </div>
            </div>

            <div className="relative max-w-2xl mx-auto">
              <div className="absolute -left-20 top-0">
                <Skull className="w-16 h-16 opacity-30" />
              </div>
              <div className="absolute -right-20 bottom-0">
                <Anchor className="w-16 h-16 opacity-30" />
              </div>

              <div className="bg-zinc-900/70 border-4 border-white p-8 transform -rotate-1 relative">
                <div className="absolute top-0 right-0 w-32 h-32 border-l-2 border-b-2 border-white opacity-20"></div>

                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <Compass className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                      Chart yer course, if ye dare...
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate('registration')}
                    className="w-full py-4 border-2 border-white hover:bg-white hover:text-black transition-all transform hover:rotate-1 text-xl font-bold"
                    style={{ fontFamily: 'Courier New, monospace' }}
                  >
                    BOARD THE VESSEL?
                  </button>

                  <button
                    onClick={() => onNavigate('404')}
                    className="w-full py-4 border-2 border-white hover:bg-white hover:text-black transition-all transform hover:-rotate-1 text-xl font-bold"
                    style={{ fontFamily: 'Courier New, monospace' }}
                  >
                    THIS BE NOT THE WAY
                  </button>

                  <button
                    onClick={() => onNavigate('dashboard')}
                    className="w-full py-2 border border-zinc-700 hover:border-white transition-colors text-sm transform rotate-1"
                    style={{ fontFamily: 'Georgia, serif', marginTop: '30px' }}
                  >
                    (Already aboard? Mayhaps enter here...)
                  </button>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-700">
                  <p className="text-xs text-center opacity-50" style={{ fontFamily: 'monospace' }}>
                    ~ Ye coordinates be recorded ~<br />
                    <span className="text-cyan-400">IMPORTANT: The sea remembers nothing</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="inline-block transform -rotate-2 border-2 border-white p-6 bg-zinc-900/70">
                <p className="text-sm mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  "The finest examination for the brightest minds"
                </p>
                <p className="text-xs opacity-50">- Said by someone, probably</p>
                <div className="mt-4 flex justify-center gap-8 opacity-30">
                  <div className="text-xs">⚓</div>
                  <div className="text-xs">◆</div>
                  <div className="text-xs">✦</div>
                  <div className="text-xs">❍</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="relative z-10 border-t-2 border-white p-4 text-center transform rotate-1">
          <p className="text-xs opacity-50" style={{ fontFamily: 'monospace' }}>
            © UNKNOWN YEAR - National Smartest Person Bureau (Location Unknown)
          </p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
