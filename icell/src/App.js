import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Eventadd from './components/Eventadd';
import Loginpage from './components/Loginpage';
import Blogadd from './components/Blogadd';
import Error from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/Dashboard" component={Dashboard}/>
             <Route path="/Eventadd" component={Eventadd}/>
             <Route path="/LoginPage" component={Loginpage}/>
             <Route path="/Blogadd" component={Blogadd}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;