import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from './GlobalStyles';
import Footer from './Layout/Footer/Footer';
/*import Header from './Layout/Header/Header';
import TopNav from './Layout/TopNav/TopNav';*/
import MainPage from './MainPage/MainPage';
import ProfileView from './Profile/ProfileView/ProfileView';
import PlacesAndCategory from './Project/ProjectView/ProjectView';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
          <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/profile" component={ProfileView} />
              <Route path="/profile/:id" component={ProfileView} />
          </Switch>
      </Router>
        <br></br>
        <br></br>

        <PlacesAndCategory />
        
        <br></br>
        <br></br>
      <Footer />
    </>
  );
}

export default App;
