import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PublicationPage from './pages/PublicationPage';
import PublicationsListPage from './pages/PublicationsListPage';
import VolunteerPage from './pages/VolunteerPage';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Route path="/" component={HomePage} exact/>
          <Route path="/contact" component={ContactPage} />
          <Route path="/publication" component={PublicationPage} />
          <Route path="/publications-list" component={PublicationsListPage} />
          <Route path="/volunteer" component={VolunteerPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
