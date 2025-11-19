import { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

interface VerificationProps {
  onNavigate: (page: string) => void;
  onVerify: () => void;
}

export default function Verification({ onNavigate, onVerify }: VerificationProps) {
  const [codeFields, setCodeFields] = useState(['', '', '', '', '', '']);
  const [fieldPositions, setFieldPositions] = useState([0, 1, 2, 3, 4, 5]);
  const [showPopup, setShowPopup] = useState(false);
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [captchaFailed, setCaptchaFailed] = useState(true);
  const [resendCount, setResendCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFieldPositions(prev => [...prev].sort(() => Math.random() - 0.5));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newFields = [...codeFields];
      newFields[index] = value;
      setCodeFields(newFields);

      if (value && index < 5) {
        const nextIndex = fieldPositions.indexOf(index + 1);
        const inputs = document.querySelectorAll<HTMLInputElement>('.code-input');
        inputs[nextIndex]?.focus();
      }
    }
  };

  const handleResend = () => {
    setResendCount(prev => prev + 1);
    const pages = ['about', 'register', 'home', '404'];
    const randomPages = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < randomPages; i++) {
      setTimeout(() => {
        window.open(`#${pages[Math.floor(Math.random() * pages.length)]}`, '_blank');
      }, i * 500);
    }

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const handleSubmit = () => {
    if (Math.random() > 0.5) {
      onVerify();
    } else {
      alert('Your previous step was almost correct.');
      setCodeFields(['', '', '', '', '', '']);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 text-black">
      <nav className="bg-black text-white border-b border-gray-700 p-3" style={{ paddingLeft: '56px' }}>
        <h1 className="font-mono text-lg">Verification Portal</h1>
      </nav>

      <div className="max-w-2xl mx-auto py-16 px-8" style={{ marginLeft: '32%' }}>
        <div className="bg-white border-2 border-black p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Georgia', marginLeft: '23px' }}>
            Account Verification
          </h2>

          <p className="text-sm mb-4 font-mono" style={{ marginLeft: '12px' }}>
            A verification code has been sent to your email address.
          </p>
          <p className="text-[7px] text-gray-500 mb-8" style={{ marginLeft: '12px' }}>
            Note: The code may have been sent to an email address you didn't provide, or possibly not sent at all
          </p>

          <div className="mb-8">
            <label className="block text-sm mb-4 font-bold">
              Enter the 6-digit code:
            </label>
            <div className="flex gap-2 mb-4" style={{ marginLeft: '34px' }}>
              {fieldPositions.map((position, displayIndex) => (
                <input
                  key={position}
                  type="text"
                  maxLength={1}
                  value={codeFields[position]}
                  onChange={(e) => handleCodeChange(position, e.target.value)}
                  className="code-input w-12 h-12 border-2 border-black text-center text-xl font-mono"
                  style={{
                    marginLeft: displayIndex % 2 === 0 ? '3px' : '-2px',
                    marginTop: displayIndex % 3 === 0 ? '5px' : '0'
                  }}
                />
              ))}
            </div>
            <p className="text-xs text-red-600 font-bold" style={{ marginLeft: '34px' }}>
              Note: Fields may rearrange themselves periodically
            </p>
          </div>

          <div className="mb-8 text-center">
            <button
              onClick={handleResend}
              className="text-cyan-400 hover:underline text-sm font-mono inline-flex items-center gap-2"
            >
              <RefreshCw size={14} />
              Resend Code?
            </button>
            {resendCount > 0 && (
              <p className="text-[8px] text-gray-500 mt-2">
                Code resent {resendCount} time{resendCount > 1 ? 's' : ''} (possibly)
              </p>
            )}
          </div>

          <div className="border-t-2 border-gray-300 pt-6 mb-6">
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'Arial', marginLeft: '18px' }}>
              Security Questions
            </h3>

            <div className="space-y-4">
              <div style={{ marginLeft: '23px' }}>
                <label className="block text-sm mb-2">
                  Write the answer you intended:
                </label>
                <input
                  type="text"
                  value={securityAnswer}
                  onChange={(e) => setSecurityAnswer(e.target.value)}
                  className="w-full border-2 border-gray-400 p-2"
                  style={{ width: '89%' }}
                />
                <p className="text-[7px] text-gray-500 mt-1">
                  This refers to the answer you were thinking of before you read this question
                </p>
              </div>

              <div style={{ marginLeft: '-12px' }}>
                <label className="block text-sm mb-2" style={{ fontFamily: 'Courier' }}>
                  What did you nearly think of?
                </label>
                <textarea
                  className="w-full border-2 border-black p-2 h-24"
                  style={{ width: '95%' }}
                />
              </div>
            </div>
          </div>

          <div className="border-4 border-yellow-400 bg-yellow-50 p-4 mb-6" style={{ marginLeft: '12px', width: '92%' }}>
            <p className="font-bold mb-2 text-sm">Additional Verification Required:</p>
            <div className="bg-gray-300 h-32 flex items-center justify-center">
              {captchaFailed ? (
                <p className="text-gray-500 italic text-xs">CAPTCHA failed to load</p>
              ) : (
                <p className="text-gray-600 text-xs">Verification image</p>
              )}
            </div>
            <p className="text-[8px] text-gray-600 mt-2">
              Please select the image above even though it hasn't loaded
            </p>
          </div>

          <div className="text-center" style={{ marginTop: '45px' }}>
            <button
              onClick={handleSubmit}
              className="bg-gray-800 hover:bg-black text-white font-bold py-3 px-12 border-2 border-gray-400"
              style={{ fontFamily: 'Impact' }}
            >
              Verify Account
            </button>
            <p className="text-[9px] text-gray-500 mt-2">
              Verification may succeed regardless of input accuracy
            </p>
          </div>
        </div>

        <div className="bg-black text-white p-6 text-center" style={{ marginLeft: '-45px', width: '108%' }}>
          <p className="text-lime-400 font-bold text-xl mb-2">
            ⚠ CRITICAL SECURITY NOTICE
          </p>
          <p className="text-xs font-mono">
            This verification process is entirely secure and may not function correctly
          </p>
        </div>
      </div>

      {showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-black p-6 z-50">
          <p className="font-mono text-sm">Your previous step was almost correct.</p>
        </div>
      )}
    </div>
  );
}
