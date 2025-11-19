import { useState } from 'react';
import { Compass, Mail, Key } from 'lucide-react';

interface VerificationPageProps {
  onNavigate: (page: string) => void;
}

const VerificationPage = ({ onNavigate }: VerificationPageProps) => {
  const [codeAttempts, setCodeAttempts] = useState(0);
  const [codes, setCodes] = useState(['', '', '', '']);
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [showPasswordReset, setShowPasswordReset] = useState(false);

  const handleCodeChange = (index: number, value: string) => {
    const newCodes = [...codes];
    newCodes[index] = value.slice(-1);
    setCodes(newCodes);
  };

  const handleVerify = () => {
    setCodeAttempts(codeAttempts + 1);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <nav className="p-6 border-b-2 border-white">
        <button
          onClick={() => onNavigate('registration')}
          className="text-xl font-bold hover:text-zinc-400 transition-colors"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          ← RETURN TO PREVIOUS CONFUSION
        </button>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 transform -rotate-1">
            <Key className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Courier New, monospace' }}>
              VERIFICATION
            </h1>
            <p className="text-sm text-zinc-400" style={{ fontFamily: 'Georgia, serif' }}>
              (Prove ye be who ye claim, though we're not certain who that is)
            </p>
          </div>

          <div className="bg-zinc-900 border-2 border-white p-8 mb-8 transform rotate-1">
            <div className="flex items-center gap-2 mb-6">
              <Mail className="w-6 h-6" />
              <h2 className="text-xl font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
                ENTER YER CODE
              </h2>
            </div>

            <p className="text-sm mb-6 text-zinc-400" style={{ fontFamily: 'Georgia, serif' }}>
              A verification code has been sent to yer email address. Or perhaps it hasn't. The courier pigeons be unreliable.
            </p>

            <div className="mb-6">
              <div className="flex justify-center gap-4 mb-4">
                {codes.map((code, index) => {
                  const rotation = [-15, 10, -20, 15][index];
                  return (
                    <div
                      key={index}
                      className="relative"
                      style={{ transform: `rotate(${rotation}deg)` }}
                    >
                      <input
                        type="text"
                        value={code}
                        onChange={(e) => handleCodeChange(index, e.target.value)}
                        maxLength={1}
                        className="w-16 h-16 bg-black border-2 border-white text-center text-2xl font-bold focus:outline-none focus:border-cyan-400"
                        style={{ fontFamily: 'Courier New, monospace' }}
                      />
                      {index === 0 && (
                        <div className="absolute -bottom-8 left-0 text-xs text-cyan-400 whitespace-nowrap">
                          North
                        </div>
                      )}
                      {index === 1 && (
                        <div className="absolute -bottom-8 left-0 text-xs text-cyan-400 whitespace-nowrap">
                          East
                        </div>
                      )}
                      {index === 2 && (
                        <div className="absolute -bottom-8 left-0 text-xs text-cyan-400 whitespace-nowrap">
                          South
                        </div>
                      )}
                      {index === 3 && (
                        <div className="absolute -bottom-8 left-0 text-xs text-cyan-400 whitespace-nowrap">
                          West
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-center text-zinc-500 mt-8" style={{ fontFamily: 'Georgia, serif' }}>
                Enter digits in compass point order (obviously)
              </p>
            </div>

            {codeAttempts > 0 && (
              <div className="mb-6 p-4 border border-cyan-400 bg-black">
                <p className="text-sm text-cyan-400">
                  {codeAttempts === 1 && "⚠ Yer code was nearly correct, sailor."}
                  {codeAttempts === 2 && "⚠ So close, yet so far. Like an island on the horizon."}
                  {codeAttempts === 3 && "⚠ Perhaps the code be different than ye think?"}
                  {codeAttempts > 3 && "⚠ The system grows weary of yer attempts."}
                </p>
              </div>
            )}

            <button
              onClick={handleVerify}
              className="w-full py-4 border-2 border-white hover:bg-white hover:text-black transition-all transform hover:rotate-2 text-xl font-bold mb-4"
              style={{ fontFamily: 'Courier New, monospace' }}
            >
              VERIFY (PROBABLY)
            </button>

            <button
              onClick={() => alert('A new code has been sent. Or the same code. Or no code at all.')}
              className="w-full py-2 border border-zinc-700 hover:border-white transition-colors text-sm"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Resend Code (Attempt)
            </button>
          </div>

          <div className="text-center mb-8">
            <button
              onClick={() => setShowPasswordReset(!showPasswordReset)}
              className="text-cyan-400 text-sm underline hover:no-underline"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Forgot yer password? (Of course ye did)
            </button>
          </div>

          {showPasswordReset && (
            <div className="bg-zinc-900 border-2 border-white p-8 transform -rotate-1">
              <div className="flex items-center gap-2 mb-6">
                <Compass className="w-6 h-6" />
                <h2 className="text-xl font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
                  PASSWORD RECOVERY
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ fontFamily: 'Courier New, monospace' }}>
                    SECURITY QUESTION #1
                  </label>
                  <p className="text-sm mb-2 text-zinc-400" style={{ fontFamily: 'Georgia, serif' }}>
                    What treasure did ye almost bury?
                  </p>
                  <input
                    type="text"
                    value={securityAnswer}
                    onChange={(e) => setSecurityAnswer(e.target.value)}
                    className="w-full bg-black border-2 border-white p-3 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="The... uh..."
                    style={{ fontFamily: 'Georgia, serif' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2" style={{ fontFamily: 'Courier New, monospace' }}>
                    SECURITY QUESTION #2
                  </label>
                  <p className="text-sm mb-2 text-zinc-400" style={{ fontFamily: 'Georgia, serif' }}>
                    Name the storm ye forgot
                  </p>
                  <input
                    type="text"
                    className="w-full bg-black border-2 border-white p-3 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="Storm... which one...?"
                    style={{ fontFamily: 'Georgia, serif' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2" style={{ fontFamily: 'Courier New, monospace' }}>
                    SECURITY QUESTION #3
                  </label>
                  <p className="text-sm mb-2 text-zinc-400" style={{ fontFamily: 'Georgia, serif' }}>
                    What color was yer first ship? (Trick question: All ships be the same)
                  </p>
                  <input
                    type="text"
                    className="w-full bg-black border-2 border-white p-3 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="Brown? Black? Wet?"
                    style={{ fontFamily: 'Georgia, serif' }}
                  />
                </div>

                <button
                  onClick={() => alert('Password reset link sent to an email ye probably cannot access.')}
                  className="w-full py-4 border-2 border-white hover:bg-white hover:text-black transition-all transform hover:rotate-1 text-xl font-bold"
                  style={{ fontFamily: 'Courier New, monospace' }}
                >
                  RECOVER PASSWORD
                </button>

                <p className="text-xs text-center text-cyan-400">
                  ⚠ Answers must match exactly what ye don't remember typing
                </p>
              </div>
            </div>
          )}

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('dashboard')}
              className="px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors text-sm"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Skip Verification (Risky, but faster)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
