import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Licks from './pages/Licks';
import Analyze from './pages/Analyze';
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/licks">Licks</Link>
            </li>
            <li>
              <Link to="/analyze">Analyze</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/create" element={<Create />}>
          </Route>
          <Route path="/edit/:id" element={<Edit />}>
          </Route>
          <Route path="/analyze" element={<Analyze />}>
          </Route>
          <Route path="/licks" element={<Licks />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
