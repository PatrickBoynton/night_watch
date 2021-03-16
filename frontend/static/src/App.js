import './App.css';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import {Switch, Route} from 'react-router-dom';
import {Component} from 'react';
import EphemForm from './components/ephem/EphemForm';
import EphemDisplay from './components/ephem/EphemDisplay';
import EphemList from './components/ephem/EphemList';
import EventForm from './components/EventForm';
import EventDisplay from './components/EventDisplay';

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
                    <Route path="/event/form"  component={EventForm}/>
                    <Route path="/display" component={EphemDisplay} />
                    <Route path="/celestial-list" component={EphemList}/>
                    <Route path="/events" component={EventDisplay}/>
                </Switch>
            </div>
        );
    }
}

export default App;
