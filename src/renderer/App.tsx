import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TitleBar from './components/TitleBar';
import Home from './views/Home';
import Profile from './views/profile';

export default function App() {
  return (
    <div>
    <TitleBar />
    <Router>
      <Routes>
        <Route path="/" element={<Home title="buenas" />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    </div>
  );
}
