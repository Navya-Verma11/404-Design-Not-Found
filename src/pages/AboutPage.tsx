import { Ship, Scroll, HelpCircle } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

const AboutPage = ({ onNavigate }: AboutPageProps) => {
  const logEntries = [
    { date: 'Day ???', entry: 'The examination be a test of wits, they say. Or was it a test of patience? Me memory fails...' },
    { date: 'Day 47 (or 48)', entry: 'Candidates must prove their intelligence through rigorous assessment. Assessment consists of... well, the records be water-damaged.' },
    { date: 'Yesterday (I think)', entry: 'IMPORTANT: All applicants must register. Then verify. Then register again. Possibly.' },
    { date: 'Day UNKNOWN', entry: 'The exam takes place on [SMUDGED]. Bring [ILLEGIBLE] and absolutely do NOT bring [TORN PAGE].' },
    { date: 'Last Tuesday', entry: 'Scoring system: 100 points total. Or 1000. The system changed mid-voyage and none were informed.' },
    { date: 'Day 12', entry: 'Upon completion, candidates receive certification. Certificate delivery time: 3-5 business storms.' },
    { date: 'Today?', entry: 'The examination board consists of [SPILLED INK OBSCURES ENTIRE SECTION]' },
    { date: 'Some day', entry: 'Dress code: Formal attire required. Or casual. The rulebook contradicts itself on page 3 and page 3.' },
    { date: 'Day 89', entry: 'CRITICAL: Read the handbook thoroughly before proceeding. Note: Handbook does not exist.' },
    { date: 'Tomorrow', entry: 'Questions may cover mathematics, literature, science, navigation, or none of the above. Preparation be impossible.' },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <nav className="p-6 border-b-2 border-white">
        <div className="flex justify-between items-center">
          <button
            onClick={() => onNavigate('home')}
            className="text-2xl font-bold hover:text-zinc-400 transition-colors"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            ← RETURN TO PORT (MAYBE)
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12 transform -rotate-1">
          <Ship className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Courier New, monospace' }}>
            ABOUT THIS<br />EXAMINATION
          </h1>
          <p className="text-sm text-zinc-400" style={{ fontFamily: 'Georgia, serif' }}>
            (From the Captain's Log, partially recovered)
          </p>
        </div>

        <div className="mb-8 bg-zinc-900 border-2 border-white p-6 transform rotate-1">
          <div className="flex items-center gap-2 mb-4">
            <Scroll className="w-6 h-6" />
            <h2 className="text-xl font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
              OFFICIAL FRAGMENTS
            </h2>
          </div>
          <p className="text-xs text-cyan-400 mb-4">
            ⚠ The following information may or may not be accurate
          </p>
          <div className="space-y-6">
            {logEntries.map((log, index) => (
              <div
                key={index}
                className={`border-l-4 border-white pl-4 py-2 ${index % 2 === 0 ? 'transform -rotate-1' : 'transform rotate-1'}`}
                style={{ fontFamily: 'Georgia, serif' }}
              >
                <div className="text-xs text-zinc-500 mb-1 font-bold" style={{ fontFamily: 'monospace' }}>
                  {log.date}
                </div>
                <p className="text-sm leading-relaxed">{log.entry}</p>
                {index === 2 && (
                  <div className="mt-2 text-xs text-cyan-400 border border-cyan-400 inline-block px-2 py-1">
                    IMPORTANT: This contradicts entry from Day 47
                  </div>
                )}
                {index === 5 && (
                  <div className="mt-2">
                    <span className="line-through opacity-50">Actually, make that 7-12 storms</span>
                    <br />
                    <span className="text-xs text-cyan-400">Updated: Never</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="bg-zinc-900 border-2 border-white p-6 transform -rotate-2">
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Courier New, monospace' }}>
              ELIGIBILITY
            </h3>
            <ul className="text-sm space-y-2" style={{ fontFamily: 'Georgia, serif' }}>
              <li>• Must be sentient (probably)</li>
              <li>• Age requirement: <span className="text-cyan-400">[MISSING]</span></li>
              <li>• Previous exam takers: <span className="line-through">Not eligible</span> <span className="text-cyan-400">Actually, yes eligible</span></li>
              <li>• Education: <span className="opacity-50">¯\_(ツ)_/¯</span></li>
            </ul>
          </div>

          <div className="bg-zinc-900 border-2 border-white p-6 transform rotate-2">
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Courier New, monospace' }}>
              FEE STRUCTURE
            </h3>
            <div className="text-sm space-y-2" style={{ fontFamily: 'Georgia, serif' }}>
              <p>Registration: <span className="line-through">$50</span> <span className="line-through">$75</span> <span className="text-cyan-400">TBD</span></p>
              <p>Exam Fee: <span className="opacity-50">See page [PAGE NOT FOUND]</span></p>
              <p>Late Fee: Applies always</p>
              <p className="text-xs text-cyan-400 mt-4">⚠ Refunds available: No</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border-4 border-white p-8 transform -rotate-1 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <HelpCircle className="w-8 h-8" />
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
              FREQUENTLY CONFUSED QUESTIONS
            </h2>
          </div>
          <div className="space-y-4 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
            <div>
              <p className="font-bold mb-2">Q: When be the examination?</p>
              <p className="pl-4 text-zinc-400">A: Consult the calendar ye don't have access to.</p>
            </div>
            <div>
              <p className="font-bold mb-2">Q: Where do I take the exam?</p>
              <p className="pl-4 text-zinc-400">A: At the location specified in yer confirmation letter, which may not arrive.</p>
            </div>
            <div>
              <p className="font-bold mb-2">Q: How long does the exam last?</p>
              <p className="pl-4 text-zinc-400">A: <span className="line-through">2 hours</span> <span className="line-through">4 hours</span> Until ye give up.</p>
            </div>
            <div>
              <p className="font-bold mb-2">Q: What if I fail?</p>
              <p className="pl-4 text-zinc-400">A: <span className="text-cyan-400">IMPORTANT: The sea remembers.</span></p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate('registration')}
            className="px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-all transform hover:rotate-2 text-xl font-bold mb-4"
            style={{ fontFamily: 'Courier New, monospace' }}
          >
            PROCEED, YE BRAVE FOOL?
          </button>
          <p className="text-xs text-zinc-500" style={{ fontFamily: 'Georgia, serif' }}>
            (Or return to port and reconsider yer life choices)
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 opacity-20">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2" fill="none" />
          <line x1="50" y1="10" x2="50" y2="30" stroke="white" strokeWidth="2" />
          <line x1="50" y1="70" x2="50" y2="90" stroke="white" strokeWidth="2" />
          <line x1="10" y1="50" x2="30" y2="50" stroke="white" strokeWidth="2" />
          <line x1="70" y1="50" x2="90" y2="50" stroke="white" strokeWidth="2" />
          <circle cx="50" cy="50" r="5" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default AboutPage;
