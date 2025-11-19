import { useState } from 'react';
import { Anchor, AlertCircle, Settings, Calendar } from 'lucide-react';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

const DashboardPage = ({ onNavigate }: DashboardPageProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: '⚓', label: '???' },
    { icon: '◆', label: '???' },
    { icon: '✦', label: '???' },
    { icon: '❍', label: '???' },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <nav className="p-6 border-b-2 border-white flex justify-between items-center">
        <h1 className="text-2xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
          YER DASHBOARD (Supposedly)
        </h1>
        <button
          onClick={() => onNavigate('home')}
          className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors text-sm"
        >
          ABANDON (LOG OUT)
        </button>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 bg-zinc-900 border-2 border-white p-6 transform -rotate-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 border-2 border-white flex items-center justify-center">
              <Anchor className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
                CAPTAIN [NAME REDACTED]
              </h2>
              <p className="text-sm text-zinc-400">Status: Registered (Maybe)</p>
            </div>
          </div>
          <div className="flex gap-4 text-xs text-cyan-400">
            <span>⚠ Profile 47% Complete</span>
            <span>⚠ Verification Pending (Forever)</span>
            <span>⚠ Last Login: Unknown</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-4 border-2 transition-all transform hover:rotate-2 ${
                activeTab === index
                  ? 'border-white bg-white text-black'
                  : 'border-zinc-700 hover:border-white'
              }`}
            >
              <div className="text-2xl mb-2">{tab.icon}</div>
              <div className="text-xs" style={{ fontFamily: 'monospace' }}>
                {tab.label}
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-zinc-900 border-2 border-white p-6 transform rotate-1">
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Courier New, monospace' }}>
              EXAM STATUS
            </h3>
            <div className="space-y-4 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
              <div className="flex justify-between">
                <span>Registration:</span>
                <span className="text-cyan-400">Incomplete</span>
              </div>
              <div className="flex justify-between">
                <span>Payment:</span>
                <span className="text-cyan-400">Not Received</span>
              </div>
              <div className="flex justify-between">
                <span>Exam Date:</span>
                <span className="text-cyan-400">TBD</span>
              </div>
              <div className="flex justify-between">
                <span>Results:</span>
                <span className="text-cyan-400">N/A</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border-2 border-white p-6 transform -rotate-1">
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Courier New, monospace' }}>
              PERFORMANCE METRICS
            </h3>
            <div className="h-40 border border-white flex items-center justify-center text-zinc-500">
              <div className="text-center">
                <div className="animate-pulse mb-2">⌛</div>
                <p className="text-xs">Tides Pending...</p>
              </div>
            </div>
            <p className="text-xs text-cyan-400 mt-2">⚠ Graph data lost at sea</p>
          </div>
        </div>

        <div className="bg-zinc-900 border-2 border-white p-6 mb-8 transform rotate-1">
          <div className="flex items-center gap-2 mb-6">
            <AlertCircle className="w-6 h-6" />
            <h3 className="text-xl font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
              NOTIFICATIONS
            </h3>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-white pl-4 py-2">
              <p className="text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                Ye successfully undone yer settings.
              </p>
              <p className="text-xs text-zinc-500 mt-1">2 hours ago (or 2 days ago)</p>
            </div>
            <div className="border-l-4 border-cyan-400 pl-4 py-2">
              <p className="text-sm text-cyan-400" style={{ fontFamily: 'Georgia, serif' }}>
                IMPORTANT: Yer verification code has expired before ye received it.
              </p>
              <p className="text-xs text-zinc-500 mt-1">Yesterday</p>
            </div>
            <div className="border-l-4 border-white pl-4 py-2">
              <p className="text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                New message from Support: [MESSAGE CORRUPTED]
              </p>
              <p className="text-xs text-zinc-500 mt-1">Last week</p>
            </div>
            <div className="border-l-4 border-white pl-4 py-2">
              <p className="text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                Reminder: Complete yer profile (Instructions unclear)
              </p>
              <p className="text-xs text-zinc-500 mt-1">3 weeks ago</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <button
            onClick={() => onNavigate('registration')}
            className="p-6 border-2 border-white hover:bg-white hover:text-black transition-all transform hover:rotate-2"
          >
            <Settings className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
              UPDATE PROFILE
            </p>
            <p className="text-xs text-zinc-400 mt-1">(Break something new)</p>
          </button>

          <button
            onClick={() => onNavigate('reminder')}
            className="p-6 border-2 border-white hover:bg-white hover:text-black transition-all transform hover:-rotate-2"
          >
            <Calendar className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
              SET REMINDERS
            </p>
            <p className="text-xs text-zinc-400 mt-1">(They won't work)</p>
          </button>

          <button
            onClick={() => onNavigate('about')}
            className="p-6 border-2 border-white hover:bg-white hover:text-black transition-all transform hover:rotate-1"
          >
            <AlertCircle className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
              GET HELP
            </p>
            <p className="text-xs text-zinc-400 mt-1">(No help available)</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
