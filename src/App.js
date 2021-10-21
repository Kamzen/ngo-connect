import './App.css';

import Nav from './components/Nav'
import Login from './components/Login'
import Register  from './components/Register';
import AddEvent from './components/AddEvent';
import Events from'./components/Events';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UpdateEvent from './components/UpdateEvent';


function App() {
  return (
    <div className="Container">

      <Router>

        <Nav/>

        <Switch>

          <Route path="/"  exact component={Login}/>

          <Route path="/login" exact component={Login}/>

          <Route path="/register" exact component={Register}></Route>

          <Route path="/add-event" exact component={AddEvent}></Route>

          <Route path="/events" exact component={Events}></Route>

          <Route path="/update/:id" exact component={UpdateEvent}></Route>

        </Switch>

      </Router>
    
    </div>
  );
}

export default App;
