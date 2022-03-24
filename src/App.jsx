import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import Home from './pages/Home';
import SignIn from './pages/SignIn';

const Shop = () => <h1>Shop</h1>;

const App = () => (
  <main className="main">
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  </main>
);

export default App;
