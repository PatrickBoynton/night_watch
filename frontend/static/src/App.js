import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
    }

    handleIsLoggedIn() {
        this.setState((previousState) => ({isLoggedIn: !previousState.isLoggedIn}))
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path='/register'>
                        {this.state.isLoggedIn ? <Redirect to="/profile"/> :  <Register/>}
                    </Route>
                    <Route path='/login'>
                        {this.state.isLoggedIn ? <Redirect to="/profile"/> : <Login/>}
                    </Route>
                    <Route path="/profile" component={Profile} />
                </Switch>
            </div>
        );
    }
}

export default App;
