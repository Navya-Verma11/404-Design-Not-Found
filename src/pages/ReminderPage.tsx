import { useState } from 'react';
import { Bell, Clock, Calendar } from 'lucide-react';

interface ReminderPageProps {
  onNavigate: (page: string) => void;
}

const ReminderPage = ({ onNavigate }: ReminderPageProps) => {
  const [selectedTime, setSelectedTime] = useState('');
  const [reminders, setReminders] = useState<string[]>([]);

  const timeOptions = ['Soon-ish', 'When the tide turns', 'Before dawn (which dawn?)', 'After sunset (today?)', 'Maybe Tuesday', 'Never (but still set it)'];

  const handleAddReminder = () => {
    const randomTime = `${Math.floor(Math.random() * 23)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`;
    setReminders([...reminders, `Reminder set for ${randomTime} (you didn't choose this)`]);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <nav className="p-6 border-b-2 border-white">
        <button
          onClick={() => onNavigate('dashboard')}
          className="text-xl font-bold hover:text-zinc-400 transition-colors"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          ← RETURN TO DASHBOARD
        </button>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 transform -rotate-1">
            <Bell className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Courier New, monospace' }}>
              REMINDER SYSTEM
            </h1>
            <p className="text-sm text-zinc-400" style={{ fontFamily: 'Georgia, serif' }}>
              (Set alarms that may or may not function)
            </p>
          </div>

          <div className="bg-zinc-900 border-2 border-white p-8 mb-8 transform rotate-1">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-6 h-6" />
              <h2 className="text-xl font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
                CREATE NEW REMINDER
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-3" style={{ fontFamily: 'Courier New, monospace' }}>
                  WHEN SHOULD WE REMIND YE?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {timeOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTime(option)}
                      className={`p-3 border-2 transition-all transform hover:rotate-2 text-sm ${
                        selectedTime === option
                          ? 'border-white bg-white text-black'
                          : 'border-zinc-700 hover:border-white'
                      }`}
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="transform -rotate-1">
                <label className="block text-sm font-bold mb-3" style={{ fontFamily: 'Courier New, monospace' }}>
                  OR PICK A SPECIFIC TIME (Good luck)
                </label>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-6xl opacity-20 z-10">
                    <span style={{ transform: 'rotate(-45deg)' }}>12</span>
                    <span style={{ transform: 'rotate(15deg)', marginLeft: '-20px' }}>34</span>
                  </div>
                  <input
                    type="time"
                    className="w-full bg-black border-2 border-white p-4 text-white focus:outline-none focus:border-cyan-400 relative z-0"
                    style={{ fontFamily: 'monospace' }}
                  />
                </div>
                <p className="text-xs text-cyan-400 mt-2">
                  ⚠ Numbers overlap for dramatic effect. Impossible to read accurately.
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold mb-3" style={{ fontFamily: 'Courier New, monospace' }}>
                  WHAT SHOULD WE REMIND YE ABOUT?
                </label>
                <input
                  type="text"
                  defaultValue="Exam preparation (or was it registration?)"
                  className="w-full bg-black border-2 border-white p-4 text-white focus:outline-none focus:border-cyan-400"
                  style={{ fontFamily: 'Georgia, serif' }}
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-3" style={{ fontFamily: 'Courier New, monospace' }}>
                  HOW OFTEN? (This setting does nothing)
                </label>
                <select
                  className="w-full bg-black border-2 border-white p-4 text-white focus:outline-none focus:border-cyan-400"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  <option>Once</option>
                  <option>Daily (but randomly)</option>
                  <option>Weekly (on no particular day)</option>
                  <option>When the mood strikes</option>
                  <option>Never (why set it then?)</option>
                </select>
              </div>

              <button
                onClick={handleAddReminder}
                className="w-full py-4 border-2 border-white hover:bg-white hover:text-black transition-all transform hover:rotate-2 text-xl font-bold"
                style={{ fontFamily: 'Courier New, monospace' }}
              >
                SET REMINDER
              </button>
            </div>
          </div>

          {reminders.length > 0 && (
            <div className="bg-zinc-900 border-2 border-white p-8 transform -rotate-1">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-6 h-6" />
                <h2 className="text-xl font-bold" style={{ fontFamily: 'Courier New, monospace' }}>
                  YER REMINDERS
                </h2>
              </div>
              <div className="space-y-4">
                {reminders.map((reminder, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-cyan-400 pl-4 py-3 bg-black"
                  >
                    <p className="text-sm text-cyan-400" style={{ fontFamily: 'Georgia, serif' }}>
                      {reminder}
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">
                      Status: Pending (Will it trigger? Who knows)
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-center text-zinc-500 mt-6">
                ⚠ All times are approximate. Very approximate. Possibly wrong.
              </p>
            </div>
          )}

          <div className="mt-8 bg-zinc-900 border border-cyan-400 p-6 transform rotate-1">
            <h3 className="text-sm font-bold mb-3 text-cyan-400" style={{ fontFamily: 'Courier New, monospace' }}>
              IMPORTANT REMINDER NOTES:
            </h3>
            <ul className="text-xs space-y-2 text-zinc-400" style={{ fontFamily: 'Georgia, serif' }}>
              <li>• Reminders may arrive before, during, or after the specified time</li>
              <li>• The system operates on maritime time (no one knows what that means)</li>
              <li>• Reminder sounds include: silence, distant fog horn, or parrot screech</li>
              <li>• Snooze function adds 9 minutes. Or 19. The code is unclear.</li>
              <li>• Dismissed reminders return randomly to haunt ye</li>
              <li>• Maximum reminders: 5 (but system allows 17 for some reason)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderPage;
