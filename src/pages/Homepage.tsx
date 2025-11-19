import { useState, useEffect } from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';

interface HomepageProps {
  onNavigate: (page: string) => void;
}

export default function Homepage({ onNavigate }: HomepageProps) {
  const [navOrder, setNavOrder] = useState([0, 1, 2, 3]);
  const [cursorStyle, setCursorStyle] = useState('default');

  useEffect(() => {
    setNavOrder([...navOrder].sort(() => Math.random() - 0.5));
  }, []);

  const navItems = ['Home', 'About', 'Register', 'Login'];
  const navPages = ['home', 'about', 'register', 'verify'];

  const handleButton1 = () => {
    const pages = ['about', 'register', '404', 'verify'];
    onNavigate(pages[Math.floor(Math.random() * pages.length)]);
  };

  const handleButton2 = () => {
    const pages = ['register', 'about', 'dashboard', '404'];
    onNavigate(pages[Math.floor(Math.random() * pages.length)]);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden" style={{ cursor: cursorStyle }}>
      <nav className="bg-white text-black border-b-2 border-black p-3 flex justify-between items-center"
           style={{ paddingLeft: '47px', paddingRight: '23px' }}>
        <h1 className="font-serif text-2xl" style={{ letterSpacing: '-1px' }}>
          National Smartest Person Exam
        </h1>
        <div className="flex gap-6" style={{ marginRight: '-12px' }}>
          {navOrder.map((idx) => (
            <button
              key={idx}
              onClick={() => onNavigate(navPages[idx])}
              className="hover:underline font-mono"
              style={{ fontSize: idx === 2 ? '11px' : '14px', marginTop: idx === 1 ? '3px' : '0' }}
              onMouseEnter={() => setCursorStyle('text')}
              onMouseLeave={() => setCursorStyle('default')}
            >
              {navItems[idx]}
            </button>
          ))}
        </div>
      </nav>

      <div className="relative h-96 bg-gradient-to-b from-gray-400 to-gray-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 80%)' }}></div>
        <div className="z-10 text-center" style={{ marginLeft: '-34px', marginTop: '18px' }}>
          <h2 className="text-6xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#e0e0e0' }}>
            Prove Your Intelligence
          </h2>
          <p className="text-xl" style={{ fontFamily: 'Courier New', color: '#d0d0d0', marginLeft: '67px' }}>
            Or Don't. We're Not Sure Yet.
          </p>
        </div>

        <div className="absolute top-16 left-20 bg-gray-200 text-black p-3 rotate-2 border border-black">
          <p className="text-xs font-mono">This may or may not be relevant</p>
        </div>

        <div className="absolute bottom-12 right-32 text-lime-400 font-bold text-sm rotate-[-3deg]">
          ⚠ CRITICAL: Read nothing carefully
        </div>
      </div>

      <div className="bg-white text-black py-16 px-8">
        <div className="max-w-4xl mx-auto" style={{ marginLeft: '23%' }}>
          <div className="mb-12">
            <h3 className="text-3xl font-serif mb-4" style={{ marginLeft: '-15px' }}>
              Welcome to the Registration Process
            </h3>
            <p className="font-mono text-sm leading-relaxed" style={{ maxWidth: '87%' }}>
              This examination has been designed to assess cognitive capabilities through a series of
              <span className="text-[8px] inline-block mx-1">extremely important standardized protocols that may or may not be administered</span>
              rigorous assessments. <span className="text-cyan-400 font-bold">MANDATORY:</span> Please ignore the previous sentence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12" style={{ marginLeft: '31px' }}>
            <div className="bg-black text-white p-6" style={{ marginTop: '12px' }}>
              <h4 className="font-bold mb-2 text-lg">Eligibility</h4>
              <p className="text-xs">Must be between ages 18-65, or possibly other ages we haven't decided on yet.</p>
            </div>
            <div className="bg-gray-800 text-white p-6 border-4 border-black" style={{ marginTop: '-8px' }}>
              <h4 className="font-bold mb-2 text-lg">Requirements</h4>
              <p className="text-xs">Valid identification, proof of existence, and documentation we'll specify later.</p>
            </div>
          </div>

          <div className="flex gap-6 justify-center" style={{ marginLeft: '-89px', marginTop: '48px' }}>
            <button
              onClick={handleButton1}
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-4 px-8 border-2 border-black transition-all"
              style={{ fontFamily: 'Arial Black', fontSize: '18px', marginRight: '23px' }}
              onMouseEnter={() => setCursorStyle('crosshair')}
              onMouseLeave={() => setCursorStyle('default')}
            >
              Continue Anyway?
            </button>
            <button
              onClick={handleButton2}
              className="bg-black hover:bg-gray-900 text-white font-mono py-4 px-8 border border-white"
              style={{ fontSize: '14px', marginLeft: '-12px' }}
              onMouseEnter={() => setCursorStyle('pointer')}
              onMouseLeave={() => setCursorStyle('default')}
            >
              Not This One
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-yellow-300 font-bold text-2xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              ★ IMPORTANT: Both buttons are equally valid ★
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 text-black py-8 px-4">
        <div className="max-w-3xl mx-auto" style={{ marginRight: '12%' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Times New Roman', marginLeft: '45px' }}>
            Testimonials From Previous Candidates
          </h3>
          <div className="space-y-4" style={{ paddingLeft: '18px' }}>
            <div className="bg-white p-4 border-l-4 border-black" style={{ marginRight: '67px' }}>
              <p className="italic text-sm">"I'm still not sure if I passed." - Candidate #4782</p>
            </div>
            <div className="bg-white p-4 border-r-4 border-black" style={{ marginLeft: '34px' }}>
              <p className="italic text-sm">"The exam was... somewhere?" - Anonymous</p>
            </div>
            <div className="bg-white p-4 border-t-4 border-black" style={{ marginRight: '23px' }}>
              <p className="italic text-sm text-[9px]">"This is the most important testimonial but we made it tiny so you probably won't read it: The entire examination process is intentionally designed to be confusing." - Dr. Someone</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white py-6 text-center border-t-8 border-gray-500">
        <p className="font-mono text-xs" style={{ letterSpacing: '3px' }}>
          © 2024 National Smartest Person Examination Board
        </p>
        <p className="text-[7px] mt-2 text-gray-500">
          All rights reserved, possibly. We haven't checked the legal documentation thoroughly.
        </p>
        <div className="mt-3">
          <span className="text-pink-400 font-bold text-xl">URGENT:</span>
          <span className="text-white text-xs ml-2">This footer contains no urgent information.</span>
        </div>
      </footer>
    </div>
  );
}
