import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import {Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
