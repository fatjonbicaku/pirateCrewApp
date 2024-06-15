import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import CreatePirate from './views/CreatePirate';
import PirateDetails from './views/PirateDetails';
import Dashboard from './views/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/pirates' element={<PrivateRoute element={Home} />} />
        <Route path='/pirate/new' element={<PrivateRoute element={CreatePirate} />} />
        <Route path='/pirate/:id' element={<PrivateRoute element={PirateDetails} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
