import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Profile from './views/profile';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home title="buenas" />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
