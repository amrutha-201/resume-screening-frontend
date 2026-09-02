import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import CandidateDashboard from './pages/candidateDashboard';
import RecruiterDashboard from './pages/recruiterDashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/candidate-dashboard' element={<CandidateDashboard/>}/>
        <Route path='/recruiter-dashboard' element={<RecruiterDashboard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;