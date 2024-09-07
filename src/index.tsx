import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => <div>Hello world! I'm Toby!</div>;
const Test: React.FC = () => <div>This is the Test component!</div>;

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}
