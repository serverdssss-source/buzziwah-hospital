import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudyPage from './pages/CaseStudyPage';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen w-full flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study/:id" element={<CaseStudyPage />} />
        </Routes>
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;
