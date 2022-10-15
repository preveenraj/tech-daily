import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'tailwindcss/tailwind.css';

const Hello = () => {
  return (
    <div className="text-gray-500">
      <h1>Hello World!</h1>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
