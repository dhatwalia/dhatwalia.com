import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ResearchPage from './pages/ResearchPage';
import ResearchListPage from './pages/ResearchListPage';
import ProjectPage from './pages/ProjectPage';
import ProjectListPage from './pages/ProjectListPage';
import VolunteerPage from './pages/VolunteerPage';
import NotFoundPage from './pages/NotFoundPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <div>
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/contact" component={ContactPage} />
            <Route path="/research/:name" component={ResearchPage} />
            <Route path="/research-list" component={ResearchListPage} />
            <Route path="/project/:name" component={ProjectPage} />
            <Route path="/project-list" component={ProjectListPage} />
            <Route path="/volunteer" component={VolunteerPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
