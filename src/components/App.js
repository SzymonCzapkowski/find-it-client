import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import TopNav from './Layout/TopNav/TopNav';
import MainPage from './MainPage/MainPage';
import ProfileView from './Profile/ProfileView/ProfileView';
import ProjectView from './Project/ProjectView/ProjectView';
import LoginForm from './Layout/LoginForm/LoginForm';
import RegisterForm from './Layout/RegisterForm/RegisterForm';
import { GlobalStyles } from './GlobalStyles';


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
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/register" component={RegisterForm} />
              <Route path="/profile/:id" component={ProfileView} />
          </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;
