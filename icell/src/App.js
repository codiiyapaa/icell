import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Blogadd from "./components/Blogadd";
import Eventadd from "./components/Eventadd";
import Loginpage from "./components/Loginpage";



function App() {
  return (
    <>
    <Router>
      <Navigation/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Dashboard' component={Dashboard}/>
        <Route path='/Blogadd' component={Blogadd}/>
        <Route path='/Eventadd' component={Eventadd}/>
        <Route path='/Loginpage' component={Loginpage}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;