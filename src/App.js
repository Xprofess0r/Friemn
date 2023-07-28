
import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp';
import Signin from './Signin';
// import BlogDetails from './BlogDetails';
// import NotFound from './NotFound';
import React,{useState} from 'react'


function App() {
 
  return (
    <Router>
    <div className="App">
  <Navbar />
      <div className="content">
       <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/Signin">
          <Signin />
         </Route>
        {/* <Route path="/posts/:id">
          <BlogDetails />

        </Route>
        <Route path="*">
          <NotFound />
        </Route> */} 
       </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
