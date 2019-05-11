import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import TopNav from './Layout/TopNav/TopNav';
import MainPage from './MainPage/MainPage';
import ProfileView from './Profile/ProfileView/ProfileView';

import Places from './Project/ProjectForm/Places/Places'; //to trzeba dać w projectFormMain!

function App() {
  return (
    <>
      <Header />
      <TopNav />
      <Router>
          <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/profile" component={ProfileView} />
              <Route path="/profile/:id" component={ProfileView} />
          </Switch>
      </Router>
        <br></br>
        <br></br>

        <Places />
        
        <br></br>
        <br></br>
      <Footer />
    </>
  );
}

export default App;
