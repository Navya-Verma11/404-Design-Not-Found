import { useState } from 'react';
import { MapPin, AlertTriangle, Lock } from 'lucide-react';

interface RegistrationPageProps {
  onNavigate: (page: string) => void;
}

const RegistrationPage = ({ onNavigate }: RegistrationPageProps) => {
  const [showForm, setShowForm] = useState(false);
  const [passwordRules, setPasswordRules] = useState('Must contain 3 cursed symbols (@, #, !)');
  const [captchaAttempts, setCaptchaAttempts] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    distantMemory: '',
  });

  const handlePasswordChange = (value: string) => {
    setFormData({ ...formData, password: value });
    const rules = [
      'Must contain 3 cursed symbols (@, #, !)',
      'Must not contain the letter ye just typed',
      'Must be exactly 12 characters (or 11, or 13)',
      'Must include a number that represents yer age at sea',
      'Must contain uppercase and lowercase (but not both)',
      'Password cannot rhyme with "treasure"',
    ];
    setPasswordRules(rules[Math.floor(Math.random() * rules.length)]);
  };

  const handleCaptchaClick = () => {
    setCaptchaAttempts(captchaAttempts + 1);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <nav className="p-6 border-b-2 border-white">
        <button
          onClick={() => onNavigate('home')}
          className="text-xl font-bold hover:text-zinc-400 transition-colors"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          ← ABANDON SHIP
        </button>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 transform -rotate-1">
            <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Courier New, monospace' }}>
              CHART YER COURSE
            </h1>
            <p className="text-sm text-zinc-400" style={{ fontFamily: 'Georgia, serif' }}>
              (Registration for the Smartest Person Examination)
            </p>
            <div className="mt-4 inline-block px-3 py-1 text-xs text-cyan-400 border border-cyan-400">
              ⚠ Form fields appear only after clicking "Set Sail"
            </div>
          </div>

          {!showForm && (
            <div className="text-center mb-12">
              <button
                onClick={() => setShowForm(true)}
                className="px-12 py-6 border-4 border-white hover:bg-white hover:text-black transition-all transform hover:rotate-2 text-2xl font-bold"
                style={{ fontFamily: 'Courier New, monospace' }}
              >
                SET SAIL
              </button>
              <p className="mt-4 text-xs text-zinc-500" style={{ fontFamily: 'Georgia, serif' }}>
                (Nothing will happen until ye click)
              </p>
            </div>
          )}

          {showForm && (
            <div className="bg-zinc-900 border-2 border-white p-8 transform -rotate-1">
              <div className="mb-8 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-cyan-400" />
                <p className="text-xs text-cyan-400">
                  All fields be required, except the ones that aren't
                </p>
              </div>

              <div className="space-y-8">
                <div className="transform rotate-1">
                  <label className="block text-sm font-bold mb-2" style={{ fontFamily: 'Courier New, monospace' }}>
                    YER NAME (As ye remember it)
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black border-2 border-white p-3 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="Captain... something..."
                    style={{ fontFamily: 'Georgia, serif' }}
                  />
                  <p className="text-xs text-zinc-500 mt-1">* First and last, or just first, or whatever ye fancy</p>
                </div>

                <div className="transform -rotate-1">
                  <label className="block text-sm font-bold mb-2" style={{ fontFamily: 'Courier New, monospace' }}>
                    EMAIL ADDRESS (That ye check never)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black border-2 border-white p-3 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="captain@thesea.void"
                    style={{ fontFamily: 'Georgia, serif' }}
                  />
                  <p className="text-xs text-cyan-400 mt-1">⚠ Confirmation emails may arrive in 3-7 storms</p>
                </div>

                <div className="transform rotate-2">
                  <label className="block text-sm font-bold mb-2 flex items-center gap-2" style={{ fontFamily: 'Courier New, monospace' }}>
                    <Lock className="w-4 h-4" />
                    PASSWORD (Impossible to guess)
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                    className="w-full bg-black border-2 border-white p-3 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="***********"
                    style={{ fontFamily: 'monospace' }}
                  />
                  <div className="mt-2 p-2 bg-black border border-cyan-400 text-xs text-cyan-400">
                    {passwordRules}
                  </div>
                </div>

                <div className="transform -rotate-2">
                  <label className="block text-sm font-bold mb-2" style={{ fontFamily: 'Courier New, monospace' }}>
                    CONFIRM PASSWORD (Hope ye remember it)
                  </label>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full bg-black border-2 border-white p-3 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="***********"
                    style={{ fontFamily: 'monospace' }}
                  />
                  {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <p className="text-xs text-cyan-400 mt-1">⚠ Passwords don't match (or do they? Hard to tell)</p>
                  )}
                </div>

                <div className="transform rotate-1 overflow-x-auto" style={{ marginLeft: '200px' }}>
                  <label className="block text-sm font-bold mb-2 whitespace-nowrap" style={{ fontFamily: 'Courier New, monospace' }}>
                    A DISTANT MEMORY OF THE SEA (Required, somehow)
                  </label>
                  <input
                    type="text"
                    value={formData.distantMemory}
                    onChange={(e) => setFormData({ ...formData, distantMemory: e.target.value })}
                    className="w-full bg-black border-2 border-white p-3 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="That storm... or was it a calm day...?"
                    style={{ fontFamily: 'Georgia, serif' }}
                  />
                </div>

                <div className="bg-zinc-800 border-2 border-white p-6 transform -rotate-1">
                  <p className="text-sm font-bold mb-4" style={{ fontFamily: 'Courier New, monospace' }}>
                    PROVE YE NOT BE A GHOST
                  </p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {['🏝️', '🌊', '⚓', '🏔️', '🌳', '🏝️', '☁️', '🏝️', '🗻'].map((emoji, idx) => (
                      <button
                        key={idx}
                        onClick={handleCaptchaClick}
                        className="aspect-square border border-white hover:bg-white hover:bg-opacity-20 flex items-center justify-center text-2xl"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-zinc-400">Select all islands ye vaguely recall</p>
                  {captchaAttempts > 0 && (
                    <p className="text-xs text-cyan-400 mt-2">
                      ⚠ Arrr... that might not be correct. Or maybe it is?
                    </p>
                  )}
                </div>

                <div className="border-t-2 border-white pt-6 space-y-4">
                  <button
                    onClick={() => onNavigate('verification')}
                    className="w-full py-4 border-2 border-white hover:bg-white hover:text-black transition-all transform hover:rotate-1 text-xl font-bold"
                    style={{ fontFamily: 'Courier New, monospace' }}
                  >
                    SUBMIT TO THE VOID
                  </button>

                  <button
                    onClick={() => setShowForm(false)}
                    className="w-full py-2 border border-zinc-700 hover:border-white transition-colors text-sm"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    Clear Form (Start over, ye fool)
                  </button>

                  <p className="text-xs text-center text-zinc-500">
                    By proceeding, ye agree to terms ye haven't read located somewhere ye cannot find
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
