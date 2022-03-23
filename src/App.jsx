import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => (
  <main className="main">
    <Routes>
      <Route path="/" index element={<Home />} />
    </Routes>
  </main>
);

export default App;
