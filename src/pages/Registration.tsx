import { useState, useEffect } from 'react';
import { Eye, EyeOff, AlertTriangle } from 'lucide-react';

interface RegistrationProps {
  onNavigate: (page: string) => void;
  onRegister: () => void;
}

export default function Registration({ onNavigate, onRegister }: RegistrationProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    country: '',
    occupation: '',
    referralSource: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordRequirements, setPasswordRequirements] = useState([
    'At least 8 characters',
    'One uppercase letter',
    'One number',
  ]);
  const [showHiddenFields, setShowHiddenFields] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [captchaAttempts, setCaptchaAttempts] = useState(0);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [selectedImages, setSelectedImages] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPasswordRequirements([
        ['At least 8 characters', 'At least 12 characters', 'Between 6-10 characters'][Math.floor(Math.random() * 3)],
        ['One uppercase letter', 'Two uppercase letters', 'No uppercase letters'][Math.floor(Math.random() * 3)],
        ['One number', 'Three numbers', 'One special character'][Math.floor(Math.random() * 3)],
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const generateCountries = () => {
    const countries = [];
    for (let i = 0; i < 247; i++) {
      countries.push(`Country ${i + 1} (Region ${Math.floor(i / 10)})`);
    }
    return countries.sort(() => Math.random() - 0.5);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!showHiddenFields) {
      setShowHiddenFields(true);
      return;
    }

    if (!showCaptcha) {
      setShowCaptcha(true);
      return;
    }

    const progress = Math.random() * 150 - 20;
    setProgressPercent(progress);

    setTimeout(() => {
      if (Math.random() > 0.3) {
        onNavigate('verify');
      } else {
        alert('Your previous step was almost correct.');
      }
    }, 2000);
  };

  const handleImageClick = (index: number) => {
    setSelectedImages(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black relative">
      <nav className="bg-white border-b-4 border-black p-3 flex justify-between items-center" style={{ paddingLeft: '34px' }}>
        <button onClick={() => onNavigate('home')} className="font-mono text-xs hover:underline">
          Home
        </button>
        <h1 className="font-serif text-2xl" style={{ marginRight: '156px', letterSpacing: '-2px' }}>
          Candidate Registration Portal
        </h1>
        <div></div>
      </nav>

      <div className="absolute top-32 right-12 bg-yellow-300 text-black p-4 border-4 border-black z-50 rotate-3" style={{ width: '200px' }}>
        <p className="font-bold text-lg">⚠ CRITICAL!</p>
        <p className="text-xs mt-2">Remember to fill out the form completely, except for the parts you should skip.</p>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-8" style={{ marginLeft: '28%', overflowX: 'scroll' }}>
        <div className="bg-white border-2 border-black p-8 mb-8" style={{ marginRight: '-234px', width: '1200px' }}>
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Times New Roman', marginLeft: '23px' }}>
            Registration Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6" style={{ marginLeft: '12px' }}>
              <div>
                <label className="block text-sm font-mono mb-2">
                  First Name <span className="text-cyan-400 font-bold">MANDATORY!!!</span>
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full border-2 border-black p-2 font-mono text-xs"
                  style={{ marginLeft: '-5px' }}
                />
                <p className="text-[7px] text-gray-500 mt-1">Enter your first name, or possibly your last name if that feels more natural</p>
              </div>

              <div style={{ marginTop: '15px' }}>
                <label className="block text-sm font-serif mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full border border-gray-400 p-2"
                  style={{ marginLeft: '8px' }}
                />
                <p className="text-[8px] text-gray-600 mt-1" style={{ marginLeft: '8px' }}>This field is optional but required</p>
              </div>
            </div>

            <div style={{ marginLeft: '45px', marginTop: '34px' }}>
              <label className="block text-xs mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full border-2 border-gray-600 p-2 text-sm"
                style={{ width: '87%' }}
              />
              <p className="text-lime-400 font-bold text-xs mt-1">IMPORTANT: Email must contain the @ symbol</p>
            </div>

            <div className="grid grid-cols-2 gap-4" style={{ marginLeft: '-12px', marginTop: '45px' }}>
              <div>
                <label className="block text-sm font-bold mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full border-2 border-black p-2"
                    style={{ marginLeft: '7px' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-2"
                    style={{ marginRight: '-7px' }}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <div className="mt-2 text-[9px] bg-gray-100 p-2" style={{ marginLeft: '7px' }}>
                  <p className="font-bold mb-1">Requirements (subject to change):</p>
                  {passwordRequirements.map((req, idx) => (
                    <p key={idx}>• {req}</p>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '8px' }}>
                <label className="block text-sm mb-2" style={{ fontFamily: 'Courier' }}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className="w-full border border-black p-2"
                  style={{ marginLeft: '-3px' }}
                />
                <p className="text-[7px] text-red-600 mt-1 font-bold">
                  WARNING: This must match your password exactly unless it shouldn't
                </p>
              </div>
            </div>

            <div style={{ marginLeft: '67px', marginTop: '56px' }}>
              <label className="block text-lg font-serif mb-2">Date of Birth</label>
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                className="border-2 border-black p-2"
                style={{ width: '45%' }}
              />
              <p className="text-xs mt-1">Must be between 18-65 years old (approximately)</p>
            </div>

            <div style={{ marginTop: '45px', marginLeft: '12px' }}>
              <label className="block text-sm mb-2">
                Country of Residence <span className="text-pink-400 font-bold text-xs">★ CRITICAL ★</span>
              </label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
                className="w-full border-2 border-gray-500 p-2 text-xs"
                style={{ height: '200px' }}
              >
                <option value="">Select a country (scroll to find yours)</option>
                {generateCountries().map((country, idx) => (
                  <option key={idx} value={country}>{country}</option>
                ))}
              </select>
              <p className="text-[7px] text-gray-400 mt-1">
                If your country is not listed, select the one that seems closest alphabetically
              </p>
            </div>

            {showHiddenFields && (
              <div className="space-y-6 border-t-2 border-black pt-6" style={{ marginTop: '67px' }}>
                <div style={{ marginLeft: '89px' }}>
                  <label className="block text-xs mb-2">Occupation (Required)</label>
                  <input
                    type="text"
                    value={formData.occupation}
                    onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                    className="w-full border border-gray-400 p-2"
                    style={{ width: '78%' }}
                    required
                  />
                </div>

                <div style={{ marginLeft: '-23px' }}>
                  <label className="block text-sm mb-2" style={{ fontFamily: 'Arial' }}>
                    How did you hear about this exam?
                  </label>
                  <textarea
                    value={formData.referralSource}
                    onChange={(e) => setFormData({...formData, referralSource: e.target.value})}
                    className="w-full border-2 border-black p-2 h-32"
                    style={{ width: '92%' }}
                    required
                  />
                  <p className="text-cyan-400 font-bold text-xs mt-1">
                    NOTE: This field was hidden until now
                  </p>
                </div>
              </div>
            )}

            {showCaptcha && (
              <div className="border-4 border-red-600 bg-gray-50 p-6 mt-8" style={{ marginLeft: '34px', width: '89%' }}>
                <h3 className="font-bold text-lg mb-4">Verification Required</h3>
                <p className="text-sm mb-4">Select all images that resemble something you forgot:</p>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <div
                      key={num}
                      onClick={() => handleImageClick(num)}
                      className={`h-24 border-2 flex items-center justify-center cursor-pointer transition-all ${
                        selectedImages.includes(num) ? 'border-blue-500 bg-blue-100' : 'border-gray-400 bg-white'
                      }`}
                      style={{
                        marginLeft: num % 3 === 0 ? '12px' : '0',
                        marginTop: num > 6 ? '-8px' : '0'
                      }}
                    >
                      <span className="text-gray-400 text-xs">Image {num}</span>
                      <span className="text-[6px] text-gray-300 absolute bottom-1">Loading...</span>
                    </div>
                  ))}
                </div>
                <p className="text-[8px] text-gray-500 mt-2">
                  Note: Images may not load properly but selection is still required
                </p>
              </div>
            )}

            <div className="mt-8" style={{ marginLeft: '123px' }}>
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-12 border-2 border-gray-400"
                style={{ fontFamily: 'Impact', fontSize: '16px' }}
              >
                {!showHiddenFields ? 'Submit' : !showCaptcha ? 'Submit Again' : 'Final Submit'}
              </button>
              <p className="text-[9px] text-gray-500 mt-2">
                Clicking this button may reveal additional required fields
              </p>
            </div>

            {progressPercent !== 0 && (
              <div className="mt-6" style={{ marginLeft: '45px' }}>
                <p className="text-sm mb-2">Processing your registration...</p>
                <div className="w-full bg-gray-200 h-6 border border-black">
                  <div
                    className="bg-black h-full transition-all duration-1000"
                    style={{ width: `${Math.max(0, Math.min(progressPercent, 100))}%` }}
                  ></div>
                </div>
                <p className="text-xs mt-1 font-mono">{progressPercent.toFixed(1)}% Complete</p>
              </div>
            )}
          </form>
        </div>

        <div className="text-center mt-8" style={{ marginLeft: '-234px' }}>
          <p className="text-yellow-300 font-bold text-2xl" style={{ textShadow: '2px 2px 4px black' }}>
            ⚡ REMEMBER: All information entered is final and cannot be changed, except when it can
          </p>
        </div>
      </div>
    </div>
  );
}
