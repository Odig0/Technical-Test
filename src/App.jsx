
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import PetList from './components/Petlist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterForm />} />     
        <Route path="/list" element={<PetList />} />
      </Routes>
    </Router>
  );
}

export default App;
