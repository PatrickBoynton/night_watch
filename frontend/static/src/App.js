import './App.css';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import {Switch, Route} from 'react-router-dom';
import {Component} from 'react';
import EphemForm from './components/ephem/EphemForm';
import EphemDisplay from './components/ephem/EphemDisplay';
import EphemList from './components/ephem/EphemList';
import EventForm from './components/events/EventForm';
import EventDisplay from './components/events/EventDisplay';
import Navigation from './components/Navigation';
import Cookies from 'js-cookie';
import ProfileForm from './components/user/ProfileForm';
import Home from './components/pages/Home';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: !!Cookies.get('Authorization'),
            isAdmin: false,
        };
        this.handleIsLoggedIn = this.handleIsLoggedIn.bind(this);
    }

    handleIsLoggedIn() {
        this.setState((previousState) => ({isLoggedIn: !previousState.isLoggedIn}));
    }

    render() {
        return (
            <div className="App">
                <Navigation isLoggedIn={this.state.isLoggedIn}/>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/about'/>
                    <Route path='/glossary'/>
                    <Route path='/register' component={Register}/>
                    <Route path='/login' render={(props) => (<Login {...props} isLoggedIn={this.state.isLoggedIn}
                                                                    handleIsLoggedIn={this.handleIsLoggedIn}/>)}/>
                    <Route path="/profile"
                           render={(props) => (<Profile {...props} handleIsLoggedIn={this.handleIsLoggedIn}/>)}/>
                    <Route path="/create-profile" component={ProfileForm}/>
                    <Route path="/ephem/form" component={EphemForm}/>
                    <Route path="/event/form" component={EventForm}/>
                    <Route path="/display" component={EphemDisplay}/>
                    <Route path="/celestial-list" component={EphemList}/>
                    <Route path="/events" component={EventDisplay}/>
                </Switch>
            </div>
        );
    }
}

export default App;
