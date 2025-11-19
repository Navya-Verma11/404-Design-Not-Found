import { useState } from 'react';
import { Clock, Bell, FileText, User, Settings } from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string) => void;
  isLoggedIn: boolean;
}

export default function Dashboard({ onNavigate, isLoggedIn }: DashboardProps) {
  const [notification, setNotification] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [reminderText, setReminderText] = useState('Soon');

  const handleBoxClick = (box: string) => {
    const contents = {
      profile: 'exam',
      exam: 'notes',
      notes: 'settings',
      settings: 'profile',
    };

    setNotification(`You have successfully unresolved your previous update.`);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleReminderChange = () => {
    const options = ['Soon', 'Eventually', 'Approximately This Time', 'Later (Maybe)', 'Uncertain'];
    setReminderText(options[Math.floor(Math.random() * options.length)]);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-mono mb-4">Access requires verification</p>
          <button
            onClick={() => onNavigate('verify')}
            className="bg-black text-white px-6 py-2 border-2 border-gray-400"
          >
            Return to Verification
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <nav className="bg-black text-white p-4 flex justify-between items-center border-b-4 border-gray-600">
        <h1 className="font-serif text-xl" style={{ marginLeft: '34px' }}>
          Candidate Dashboard
        </h1>
        <button
          onClick={() => onNavigate('home')}
          className="text-xs font-mono hover:underline"
          style={{ marginRight: '23px' }}
        >
          Logout (Possibly)
        </button>
      </nav>

      {notification && (
        <div className="bg-yellow-300 text-black p-3 text-center font-mono text-sm border-b-2 border-black">
          {notification}
        </div>
      )}

      <div className="max-w-6xl mx-auto py-12 px-8" style={{ marginLeft: '18%' }}>
        <div className="grid grid-cols-2 gap-8 mb-12" style={{ marginLeft: '23px' }}>
          <div
            onClick={() => handleBoxClick('profile')}
            className="bg-white border-2 border-black p-6 cursor-pointer hover:bg-gray-50"
            style={{ marginTop: '12px', marginLeft: '-8px' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <User size={24} />
              <h2 className="text-xl font-bold">Profile</h2>
            </div>
            <div className="h-32 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500 text-sm italic">Loading indefinitely...</p>
            </div>
          </div>

          <div
            onClick={() => handleBoxClick('exam')}
            className="bg-gray-800 text-white border-2 border-black p-6 cursor-pointer hover:bg-gray-700"
            style={{ marginTop: '-5px', marginLeft: '15px' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText size={24} />
              <h2 className="text-xl font-bold">Exam Time</h2>
            </div>
            <div className="h-32 flex items-center justify-center">
              <p className="text-gray-400 text-sm">Content relocated to Settings</p>
            </div>
          </div>

          <div
            onClick={() => handleBoxClick('notes')}
            className="bg-white border border-gray-400 p-6 cursor-pointer hover:bg-gray-50"
            style={{ marginLeft: '28px', marginTop: '-23px' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">◆</span>
              <h2 className="text-lg font-mono">Notes</h2>
            </div>
            <div className="space-y-2">
              <div className="bg-black h-4"></div>
              <div className="bg-gray-300 h-4 w-3/4"></div>
              <div className="bg-gray-400 h-4 w-1/2"></div>
            </div>
            <p className="text-[7px] text-gray-500 mt-2">
              These are not your actual notes but rather placeholder elements representing where notes might appear
            </p>
          </div>

          <div
            onClick={() => handleBoxClick('settings')}
            className="bg-black text-white border-4 border-gray-500 p-6 cursor-pointer"
            style={{ marginLeft: '-12px', marginTop: '8px' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Settings size={24} />
              <h2 className="text-xl font-serif">Settings</h2>
            </div>
            <div className="h-32 flex items-center justify-center">
              <p className="text-gray-400 text-xs">Redirects to Profile when clicked</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-black p-6 mb-8" style={{ width: '92%', marginLeft: '45px' }}>
          <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Times New Roman', marginLeft: '12px' }}>
            Activity Graph
          </h3>
          <div className="h-48 bg-gray-100 border border-gray-300 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-2"></div>
              <p className="text-sm text-gray-500 font-mono">Processing data...</p>
            </div>
          </div>
          <p className="text-[8px] text-gray-400 mt-2" style={{ marginLeft: '12px' }}>
            Graph rendering has been delayed indefinitely due to circumstances
          </p>
        </div>

        <div className="bg-gray-50 border border-black p-6 mb-8" style={{ marginLeft: '-23px', width: '108%' }}>
          <h3 className="text-xl font-mono mb-6" style={{ marginLeft: '34px' }}>
            Reminder System
          </h3>

          <div className="grid grid-cols-2 gap-6" style={{ marginLeft: '23px' }}>
            <div>
              <label className="block text-sm mb-2">Set reminder for:</label>
              <div className="flex items-center gap-2">
                <input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="border-2 border-black p-2"
                  style={{ marginLeft: '5px', marginTop: '-3px' }}
                />
                <span className="font-bold text-lg" style={{ marginLeft: '-8px', marginTop: '4px' }}>:</span>
                <input
                  type="number"
                  className="border border-gray-400 p-2 w-16"
                  placeholder="??"
                  style={{ marginLeft: '-12px', marginTop: '2px' }}
                />
              </div>
              <p className="text-[7px] text-gray-500 mt-1" style={{ marginLeft: '5px' }}>
                Time display may not align correctly with actual time values
              </p>
            </div>

            <div style={{ marginTop: '8px', marginLeft: '-15px' }}>
              <label className="block text-sm mb-2">Snooze duration:</label>
              <select
                className="border-2 border-black p-2 w-full"
                onChange={handleReminderChange}
              >
                <option>Soon</option>
                <option>Eventually</option>
                <option>Approximately This Time</option>
                <option>Later (Maybe)</option>
                <option>Uncertain</option>
              </select>
              <p className="text-xs mt-1 font-mono">Current: {reminderText}</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setNotification('Reminder has been set for an indeterminate time')}
              className="bg-gray-400 hover:bg-gray-500 text-black font-bold py-2 px-8 border-2 border-black"
            >
              Set Reminder
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-lime-400 font-bold text-lg" style={{ textShadow: '1px 1px 2px black' }}>
              IMPORTANT: Something might occur.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4" style={{ marginLeft: '12px' }}>
          <button className="bg-white border-2 border-black p-4 hover:bg-gray-50">
            <span className="text-3xl block mb-2">◼︎</span>
            <p className="text-[8px] text-gray-500">Function unclear</p>
          </button>

          <button className="bg-black text-white border-2 border-gray-400 p-4" style={{ marginTop: '12px' }}>
            <span className="text-3xl block mb-2">✦</span>
            <p className="text-[8px] text-gray-400">Purpose undefined</p>
          </button>

          <button className="bg-gray-300 border border-black p-4 hover:bg-gray-400" style={{ marginTop: '-8px' }}>
            <span className="text-3xl block mb-2">❍</span>
            <p className="text-[8px] text-gray-600">Action unknown</p>
          </button>
        </div>

        <div className="mt-12 bg-yellow-200 border-4 border-black p-6 text-center" style={{ marginLeft: '34px', width: '89%' }}>
          <Bell size={32} className="mx-auto mb-3" />
          <p className="font-bold text-lg mb-2">System Notification</p>
          <p className="text-sm font-mono">
            Your exam status has been partially updated and requires no further action at this time, unless it does.
          </p>
          <p className="text-[7px] text-gray-600 mt-2">
            This message will remain visible indefinitely and cannot be dismissed
          </p>
        </div>
      </div>
    </div>
  );
}
