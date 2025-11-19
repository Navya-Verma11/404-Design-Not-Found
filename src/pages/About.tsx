import { useState } from 'react';
import { X, HelpCircle } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const faqs = [
    {
      question: 'What is the exam format?',
      wrongAnswer: 'The registration deadline is midnight on the last Tuesday of next month.'
    },
    {
      question: 'How long does the exam take?',
      wrongAnswer: 'Candidates must bring two forms of identification and a pencil.'
    },
    {
      question: 'What should I bring to the exam?',
      wrongAnswer: 'The exam consists of 150 multiple choice questions administered over 3 hours.'
    },
    {
      question: 'When will I receive my results?',
      wrongAnswer: 'Yes, calculators are permitted but must be non-graphing models.'
    },
  ];

  const handleLearnMore = () => {
    setPopupMessage('');
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="bg-gray-900 text-white border-b border-gray-700 p-4 flex justify-between">
        <button onClick={() => onNavigate('home')} className="font-mono text-sm hover:underline">
          ← Back (Maybe)
        </button>
        <h1 className="font-serif text-xl" style={{ marginRight: '234px' }}>About the Examination</h1>
        <div></div>
      </nav>

      <div className="max-w-5xl mx-auto py-12 px-8" style={{ marginLeft: '18%' }}>
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Georgia', marginLeft: '-23px' }}>
            Understanding the Process
          </h2>

          <div className="grid grid-cols-3 gap-4" style={{ marginTop: '34px' }}>
            <div className="col-span-1 bg-black text-white p-4" style={{ marginTop: '45px' }}>
              <p className="text-[11px] leading-tight">
                The National Smartest Person Examination has been administered since 1987 or possibly 1989.
                Records are incomplete.
              </p>
            </div>
            <div className="col-span-2 bg-gray-100 p-4 border border-black" style={{ marginLeft: '-18px' }}>
              <p className="font-mono text-xs">
                Eligibility criteria include but are not limited to: cognitive function, respiratory activity,
                and <span className="text-[7px]">the ability to read this extremely tiny text which contains the actually important information that the exam fee is non-refundable under any circumstances including medical emergencies</span> general awareness of surroundings.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16" style={{ marginRight: '89px' }}>
          <h3 className="text-2xl font-mono mb-6" style={{ marginLeft: '67px' }}>Key Information</h3>

          <div className="space-y-6">
            <div className="bg-gray-200 p-6" style={{ width: '78%', marginLeft: '34px' }}>
              <h4 className="font-bold text-lg mb-2">Exam Structure</h4>
              <p className="text-sm leading-relaxed">
                The examination consists of multiple sections, each designed to assess different aspects of
                cognitive performance. The first section evaluates logical reasoning through a series of
                pattern recognition tasks. The second section focuses on verbal comprehension and includes
                reading passages followed by
              </p>
              <p className="text-xs mt-2 text-gray-500 italic">
                [Text continues but is cut off here]
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6" style={{ width: '92%', marginLeft: '-12px', marginTop: '56px' }}>
              <h4 className="font-bold text-lg mb-2" style={{ fontFamily: 'Arial' }}>Scoring Methodology</h4>
              <p className="text-sm">
                Scores are calculated using a proprietary algorithm that weighs various factors including
                response time, accuracy, and
              </p>
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={handleLearnMore}
                  className="text-cyan-400 font-bold text-xs hover:underline"
                >
                  Click here to learn what you might need →
                </button>
                <span className="text-[8px] text-gray-400">
                  This link may not function as expected
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-serif mb-8" style={{ marginLeft: '12px' }}>
            Frequently Asked Questions
          </h3>

          <div className="space-y-3" style={{ paddingLeft: '23px', paddingRight: '45px' }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-400 bg-gray-50"
                style={{ marginLeft: index % 2 === 0 ? '0' : '34px' }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left p-4 font-mono text-sm hover:bg-gray-100 flex justify-between items-center"
                >
                  <span>{faq.question}</span>
                  <HelpCircle size={16} />
                </button>
                {expandedFaq === index && (
                  <div className="p-4 bg-white border-t border-gray-300">
                    <p className="text-xs italic text-gray-700">{faq.wrongAnswer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-lime-400 font-bold text-lg" style={{ textShadow: '1px 1px 2px black' }}>
              ⚡ CRITICAL NOTE: The answers above are accurate and should be trusted completely
            </p>
          </div>
        </div>

        <div className="bg-black text-white p-8 mb-12" style={{ marginLeft: '45px', width: '89%' }}>
          <h3 className="text-xl font-bold mb-4">Important Disclaimers</h3>
          <div className="space-y-2 font-mono text-xs">
            <p>• Examination dates are subject to change without notice or with notice we may forget to send</p>
            <p>• Results typically arrive within 6-8 weeks, or possibly months</p>
            <p className="text-[7px]">• THE MOST IMPORTANT DISCLAIMER: By registering for this exam you agree to waive all rights to appeal your score even in cases of administrative error or natural disaster</p>
            <p>• Test centers are located in major cities and some minor cities we haven't identified yet</p>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: '67px', marginLeft: '-34px' }}>
          <button
            onClick={() => onNavigate('register')}
            className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-3 px-8 border-2 border-black"
            style={{ fontFamily: 'Impact' }}
          >
            Proceed to Registration Area
          </button>
          <p className="mt-2 text-[9px] text-gray-400">
            Or click anywhere else to go somewhere unexpected
          </p>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 border-4 border-gray-400" style={{ width: '400px', marginLeft: '89px', marginTop: '-45px' }}>
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-bold text-lg">Information Portal</h4>
              <button onClick={() => setShowPopup(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="h-32 bg-gray-100 flex items-center justify-center">
              <p className="text-gray-400 italic text-sm">Loading relevant content...</p>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-gray-800 text-white py-4 text-center" style={{ marginTop: '45px' }}>
        <p className="text-xs font-mono">Additional information may be available elsewhere</p>
      </footer>
    </div>
  );
}
