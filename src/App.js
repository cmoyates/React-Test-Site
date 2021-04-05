import './App.css';
import {Route, HashRouter as Router, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={(props) => {return <Home {...props}/>}}/>
          <Route path="/About" component={(props) => {return <About {...props}/>}}/>
          <Route path="*" component={(props) => {return "404 No."}}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
