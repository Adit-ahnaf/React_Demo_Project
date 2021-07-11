import logo from './logo.svg';
import './App.css';
import Testing from './Practice/Testing';
import Test2 from './Practice/Test2';
import {Route, Switch, BrowserRouter as Router} from '../node_modules/react-router-dom';
import Details from './Practice/Details';
import Login from './Practice/Login';
import Sighnup from './Practice/Sighnup';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { Redirect } from 'react-router-dom';




const requireLogin = (to, from, next) => {
   if (to.meta.true){
    if (localStorage.getItem == null) {
      <Redirect to="/login"/>
    }
  
   else {
      <Redirect to="/"/>
  }
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
