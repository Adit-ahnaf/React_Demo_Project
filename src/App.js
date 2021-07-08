import logo from './logo.svg';
import './App.css';
import Testing from './Practice/Testing';
import Test2 from './Practice/Test2';
import {Route, Switch, BrowserRouter as Router} from '../node_modules/react-router-dom';
import Details from './Practice/Details';
import Login from './Practice/Login';
import Sighnup from './Practice/Sighnup';
import GuardRoute from './Practice/GuardRoute';
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      <GuardRoute exact path="/Test2" component={Test2}/>
      <Route exact path="/details/description" component={Details}/>
      <Route exact path="/" component={Login}/>
      <GuardRoute exact path="/sighnup" component={Sighnup}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
