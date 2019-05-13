import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import TopNav from './Layout/TopNav/TopNav';
import MainPage from './MainPage/MainPage';
import ProfileView from './Profile/ProfileView/ProfileView';
import ProjectView from './Project/ProjectView/ProjectView';

function App() {
  return (
    <>
      <Header />
      <TopNav />
      <Router>
          <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/profile" component={ProfileView} />
              <Route exact path="/project" component={ProjectView} />
              <Route path="/profile/:id" component={ProfileView} />
          </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
