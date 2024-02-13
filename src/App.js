import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import DataStructures from './components/DataStructures/DataStructures';
import Algorithms from './components/Algorithms/Algorithms';
import Arrays from './components/DataStructures/Arrays/Arrays';
import OneDArrays from './components/DataStructures/Arrays/OneDArrays/OneDArrays';
import MultiDimensionArrays from './components/DataStructures/Arrays/MultiDimensionArrays/MultiDimensionArrays';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data-structures" element={<DataStructures />} />
          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/arrays" element={<Arrays />} />
          <Route path="/single-dimension-arrays" element={<OneDArrays />} />
          <Route path="/multi-dimension-arrays"element={<MultiDimensionArrays />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
    <Footer />
    </div>

  );
}

export default App;
