import { useState } from 'react';
import HomePage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import RegistrationPage from './pages/RegistrationPage';
import VerificationPage from './pages/VerificationPage';
import DashboardPage from './pages/DashboardPage';
import ReminderPage from './pages/ReminderPage';
import NotFoundPage from './pages/NotFoundPage';
import ReadmePage from './pages/ReadmePage';
import PirateAnimation from './components/PirateAnimation';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'registration':
        return <RegistrationPage onNavigate={setCurrentPage} />;
      case 'verification':
        return <VerificationPage onNavigate={setCurrentPage} />;
      case 'dashboard':
        return <DashboardPage onNavigate={setCurrentPage} />;
      case 'reminder':
        return <ReminderPage onNavigate={setCurrentPage} />;
      case 'readme':
        return <ReadmePage onNavigate={setCurrentPage} />;
      case '404':
        return <NotFoundPage onNavigate={setCurrentPage} />;
      default:
        return <NotFoundPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <PirateAnimation />
      {renderPage()}
    </div>
  );
}

export default App;
