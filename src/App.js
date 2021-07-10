import logo from './logo.svg';
import './App.css';
import Testing from './Practice/Testing';
import Test2 from './Practice/Test2';
import {Route, Switch, BrowserRouter as Router} from '../node_modules/react-router-dom';
import Details from './Practice/Details';
import Login from './Practice/Login';
import Sighnup from './Practice/Sighnup';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { getIsLoggedIn } from 'util';


const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (getIsLoggedIn()) {
      next();
    }
    next.redirect('/login');
  } else {
    next();
  }
};

function App() {
  return (
    
    <Router>
    <GuardProvider guards={[requireLogin]} >
      <Switch>
      <GuardedRoute exact path="/" component={Test2} meta={{auth:true }}/>
      <GuardedRoute exact path="/details/description" component={Details} meta={{ auth: true }} />
      <GuardedRoute exact path="/login" component={Login}/>
      <GuardedRoute exact path="/sighnup" component={Sighnup}/>
      </Switch>
      </GuardProvider>
    </Router>
    
  );
}

export default App;
