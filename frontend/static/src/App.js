import './App.css';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import {Switch, Route} from 'react-router-dom';
import {Component} from 'react';
import EphemForm from './components/EphemForm';
import EphemDisplay from './components/EphemDisplay';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    handleIsLoggedIn() {
        this.setState((previousState) => ({isLoggedIn: !previousState.isLoggedIn}));
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path='/register' component={Register}/>
                    <Route path='/login' component={Login}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/ephem/form" component={EphemForm}/>
                    <Route path="/display" component={EphemDisplay} />
                </Switch>
            </div>
        );
    }
}

export default App;
