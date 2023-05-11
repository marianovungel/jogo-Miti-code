import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes> 
            <Route path="/" element={<Home />} exact />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
