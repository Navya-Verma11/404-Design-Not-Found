import { useState } from 'react';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Registration from './pages/Registration';
import Verification from './pages/Verification';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      {currentPage === 'home' && <Homepage onNavigate={setCurrentPage} />}
      {currentPage === 'about' && <About onNavigate={setCurrentPage} />}
      {currentPage === 'register' && <Registration onNavigate={setCurrentPage} onRegister={() => setIsLoggedIn(true)} />}
      {currentPage === 'verify' && <Verification onNavigate={setCurrentPage} onVerify={() => { setIsLoggedIn(true); setCurrentPage('dashboard'); }} />}
      {currentPage === 'dashboard' && <Dashboard onNavigate={setCurrentPage} isLoggedIn={isLoggedIn} />}
      {currentPage === '404' && <NotFound onNavigate={setCurrentPage} />}
    </div>
  );
}

export default App;
