import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import NotFound from './pages/404'
import Project from './pages/Project'
import Projects from './pages/ProjectList'
import Research from './pages/Research'
import ResearchList from './pages/ResearchList'
import Volunteer from './pages/Volunteer'

function App() {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:name" element={<Project />} />
      <Route path="/project-list" element={<Projects />} />
      <Route path="/research/:name" element={<Research />} />
      <Route path="/research-list" element={<ResearchList />} />
      <Route path="/volunteer" element={<Volunteer />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>;
}

export default App
