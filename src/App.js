import logo from './logo.svg';
import './App.css';
import Testing from './Practice/Testing';
import Test2 from './Practice/Test2';
import {Route, Switch, BrowserRouter as Router} from '../node_modules/react-router-dom';
import Details from './Practice/Details';
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      <Route exact path="/" component={Test2}/>
      <Route exact path="/details/:id" component={Details}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
