import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from './GlobalStyles';
import Footer from './Layout/Footer/Footer';
import MainPage from './MainPage/MainPage';
import ProfileView from './Profile/ProfileView/ProfileView';
import ProjectForm from './Project/ProjectForm/ProjectForm';
import ProjectView from './Project/ProjectView/ProjectView';
import { GlobalStyles } from './GlobalStyles'


function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
      <Header />
      <TopNav />
          <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/profile" component={ProfileView} />
              <Route exact path="/project" component={ProjectView} />
              <Route path="/profile/:id" component={ProfileView} />
              <Route path="/projectform" component={ProjectForm}/>
          </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;
