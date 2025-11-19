import { Scroll, Anchor, HelpCircle } from 'lucide-react';

interface ReadmePageProps {
  onNavigate: (page: string) => void;
}

const ReadmePage = ({ onNavigate }: ReadmePageProps) => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <nav className="p-6 border-b-2 border-white">
        <button
          onClick={() => onNavigate('home')}
          className="text-xl font-bold hover:text-zinc-400 transition-colors"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          ← LEAVE THESE INSTRUCTIONS (They won't help)
        </button>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12 transform -rotate-2">
          <Scroll className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: 'Courier New, monospace' }}>
            CAPTAIN'S LOG:<br />NAVIGATION GUIDE
          </h1>
          <p className="text-sm text-zinc-400" style={{ fontFamily: 'Georgia, serif' }}>
            (Written by someone who is also confused by this site)
          </p>
        </div>

        <div className="bg-zinc-900 border-4 border-white p-8 mb-8 transform rotate-1">
          <div className="flex items-center gap-3 mb-6">
            <Anchor className="w-8 h-8" />
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
              HOW TO NAVIGATE THIS VESSEL
            </h2>
          </div>

          <div className="space-y-6 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
            <div className="border-l-4 border-white pl-6 py-2">
              <p className="font-bold mb-2">STEP 1: Click where yer instincts disagree</p>
              <p className="text-zinc-400">
                The buttons labeled "This Be Not The Way" often lead somewhere. Or nowhere. Me compass spins regardless.
              </p>
              <div className="mt-2 text-xs text-cyan-400">
                <span className="line-through">Trust the labels</span> Actually, don't.
              </div>
            </div>

            <div className="border-l-4 border-white pl-6 py-2">
              <p className="font-bold mb-2">STEP 2: <span className="line-through">Read all instructions carefully</span></p>
              <p className="text-zinc-400">
                I meant to say: Ignore most of what ye read. The important bits are marked with "IMPORTANT" but those be the least important.
              </p>
            </div>

            <div className="border-l-4 border-cyan-400 pl-6 py-2">
              <p className="font-bold mb-2 text-cyan-400">STEP 3: Ignore any message claiming to be important</p>
              <p className="text-zinc-400">
                Especially if it's in cyan. That color be decorative only. <span className="text-cyan-400">Like this warning.</span>
              </p>
            </div>

            <div className="border-l-4 border-white pl-6 py-2">
              <p className="font-bold mb-2">STEP 4: The registration form</p>
              <p className="text-zinc-400">
                Click "Set Sail" to reveal fields. Fill them with whatever comes to mind. The password rules change as ye type—this be intentional chaos, not a bug.
              </p>
              <p className="text-xs text-zinc-500 mt-2">
                Pro tip: There is no correct password. All passwords be wrong, eventually.
              </p>
            </div>

            <div className="border-l-4 border-white pl-6 py-2">
              <p className="font-bold mb-2">STEP 5: Complete the CAPTCHA</p>
              <p className="text-zinc-400">
                Select all islands. Or select none. Or select the mountains. The system accepts what it wants, when it wants.
              </p>
            </div>

            <div className="border-l-4 border-white pl-6 py-2">
              <p className="font-bold mb-2">STEP 6: Verification codes</p>
              <p className="text-zinc-400">
                Enter the code ye never received in the compass-shaped boxes. North, East, South, West. Or was it clockwise? The instructions were smudged.
              </p>
              <div className="mt-2 p-2 bg-black border border-cyan-400 text-cyan-400 text-xs">
                IMPORTANT: Codes expire before they arrive. This is normal.
              </div>
            </div>

            <div className="border-l-4 border-white pl-6 py-2">
              <p className="font-bold mb-2">STEP 7: <span className="line-through">Navigate to the hidden settings panel</span></p>
              <p className="text-zinc-400">
                There is no hidden settings panel. I wrote that to see if ye'd search for it. (But maybe there is one? I forget.)
              </p>
            </div>

            <div className="border-l-4 border-white pl-6 py-2">
              <p className="font-bold mb-2">STEP 8: The Dashboard</p>
              <p className="text-zinc-400">
                Four mysterious tabs (⚓ ◆ ✦ ❍) lead to... well, I never figured out what they do. Perhaps ye'll have better luck?
              </p>
              <p className="text-xs text-zinc-500 mt-2">
                Note: The graphs never load. Don't wait for them.
              </p>
            </div>

            <div className="border-l-4 border-white pl-6 py-2">
              <p className="font-bold mb-2">STEP 9: Set reminders</p>
              <p className="text-zinc-400">
                Choose a time. The system will ignore it and set a random time instead. This saves ye from making decisions.
              </p>
            </div>

            <div className="border-l-4 border-cyan-400 pl-6 py-2">
              <p className="font-bold mb-2 text-cyan-400">STEP 10: Avoid the pirate</p>
              <p className="text-zinc-400">
                A confused soul wanders the screen. Sometimes he blocks important text. This be on purpose. Move yer head to read around him.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-zinc-900 border-2 border-white p-6 transform -rotate-1">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ fontFamily: 'Courier New, monospace' }}>
              <HelpCircle className="w-5 h-5" />
              HELPFUL TIPS
            </h3>
            <ul className="text-xs space-y-2" style={{ fontFamily: 'Georgia, serif' }}>
              <li>• <span className="line-through">Read tooltips carefully</span></li>
              <li>• If something looks clickable, it might not be</li>
              <li>• Error messages provide entertainment, not information</li>
              <li>• The "Back" button sometimes goes forward</li>
              <li>• Progress is saved never</li>
              <li>• Keyboard shortcuts exist but do unpredictable things</li>
            </ul>
          </div>

          <div className="bg-zinc-900 border-2 border-white p-6 transform rotate-2">
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Courier New, monospace' }}>
              TROUBLESHOOTING
            </h3>
            <div className="text-xs space-y-3" style={{ fontFamily: 'Georgia, serif' }}>
              <div>
                <p className="font-bold text-cyan-400">Q: Nothing is working</p>
                <p className="text-zinc-400">A: Everything is working exactly as poorly as designed</p>
              </div>
              <div>
                <p className="font-bold text-cyan-400">Q: I can't find the submit button</p>
                <p className="text-zinc-400">A: Look in the least logical place</p>
              </div>
              <div>
                <p className="font-bold text-cyan-400">Q: Is this a joke?</p>
                <p className="text-zinc-400">A: No. Maybe. I honestly don't remember.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border-4 border-cyan-400 p-8 transform -rotate-1 mb-8">
          <h3 className="text-xl font-bold mb-4 text-cyan-400" style={{ fontFamily: 'Courier New, monospace' }}>
            SECRET SECTIONS (That Don't Exist)
          </h3>
          <div className="text-sm space-y-3 text-zinc-400" style={{ fontFamily: 'Georgia, serif' }}>
            <p>• The Hidden Treasure Room (Location: Unknown, probably fictional)</p>
            <p>• Advanced Settings (Would be accessible if we'd built them)</p>
            <p>• Support Chat (Connects to no one, responds never)</p>
            <p>• The Second Dashboard (Identical to the first, serves no purpose)</p>
            <p>• Easter Egg Gallery (Empty room with sign saying "Coming Soon" since 2019)</p>
          </div>
          <p className="text-xs text-cyan-400 mt-4">
            ⚠ Don't waste time searching for these. Or do. Time has no meaning here.
          </p>
        </div>

        <div className="bg-black border-2 border-white p-6 transform rotate-1">
          <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Courier New, monospace' }}>
            FINAL WORDS OF CONFUSION
          </h3>
          <p className="text-sm mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            This site be designed by someone (possibly me) who had <span className="line-through">clear vision</span> no vision whatsoever.
            Each page contradicts the last. Each button misleads. Each form field taunts.
          </p>
          <p className="text-sm mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            The examination itself may not exist. Registration may be pointless. The dashboard shows nothing useful.
            And yet, here ye are, still reading.
          </p>
          <p className="text-sm text-cyan-400" style={{ fontFamily: 'Georgia, serif' }}>
            Perhaps YE be the smartest person after all. Or the most stubborn. Hard to tell the difference at sea.
          </p>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('registration')}
            className="px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-all transform hover:rotate-2 text-xl font-bold mb-4"
            style={{ fontFamily: 'Courier New, monospace' }}
          >
            BEGIN YER JOURNEY
          </button>
          <p className="text-xs text-zinc-500" style={{ fontFamily: 'Georgia, serif' }}>
            (Armed with knowledge that helps not at all)
          </p>
        </div>

        <div className="mt-16 text-center text-xs text-zinc-600" style={{ fontFamily: 'monospace' }}>
          <p>~ End of Log Entry ~</p>
          <p className="mt-2 text-cyan-400">⚠ If ye understood any of this, ye understood it wrong</p>
        </div>
      </div>
    </div>
  );
};

export default ReadmePage;
