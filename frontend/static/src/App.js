import './App.css';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import {Switch, Route} from 'react-router-dom';
import {Component} from 'react';
import EphemDisplay from './components/ephem/EphemDisplay';
import EphemList from './components/ephem/EphemList';
import EventForm from './components/events/EventForm';
import Navigation from './components/Navigation';
import Cookies from 'js-cookie';
import ProfileForm from './components/user/ProfileForm';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Glossary from './components/pages/Glossary';
import NotFound from './components/pages/NotFound';
import SolarEvents from './components/events/SolarEvents';
import EphemForm from './components/ephem/EphemForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: !!Cookies.get('Authorization'),
            user: {
                user: '',
                profile_picture: '',
                about_me: '',
                phone: '',
                isAdmin: false,
                id: 0,
            }
        };
        this.updateAuth = this.updateAuth.bind(this);
        this.handleIsLoggedIn = this.handleIsLoggedIn.bind(this);
    }

    updateAuth(subscriber) {
        this.setState({isLoggedIn:!!Cookies.get('Authorization'), subscriber});
    }

    async componentDidMount() {
        const response = await fetch('/api/v1/profiles/details/');
        const user = await fetch('/rest-auth/user');
        const userData = await user.json();
        const data = await response.json();

        console.log(userData);
        this.setState({
            user: {
                id: userData.pk,
                user: data.user,
                profile_picture: data.profile_picture,
                about_me: data.about_me,
                phone: data.phone,
                isAdmin: data.isAdmin
            }
        });
    }


    handleIsLoggedIn(subscriber) {
        this.setState((previousState) => ({isLoggedIn: !previousState.isLoggedIn, subscriber}));
    }

    render() {
        return (
            <div className="App">
                <Navigation user={this.state.user} isLoggedIn={this.state.isLoggedIn} subscriber={this.state.subscriber} handleIsLoggedIn={this.handleIsLoggedIn}/>
                <Switch>
                    <Route path='/about' component={About}/>
                    <Route path='/glossary' component={Glossary}/>
                    <Route path='/register' render={(props) => (<Register {...props} isLoggedIn={this.state.isLoggedIn}
                                                                    updateAuth={this.updateAuth}/>)}/>
                    <Route path='/login' render={(props) => (<Login {...props} isLoggedIn={this.state.isLoggedIn}
                                                                    handleIsLoggedIn={this.handleIsLoggedIn}/>)}/>
                    <Route path="/profile"
                           render={(props) => (<Profile {...props} user={this.state.user}
                                                        handleIsLoggedIn={this.handleIsLoggedIn}/>)}/>
                    <Route path="/event/form" render={(props) => (<EventForm {...props} id={this.state.user.id} phone={this.state.user.phone}/>)}/>
                    <Route path="/display" component={EphemDisplay}/>
                    <Route path="/celestial-list"  render={(props) => <EphemList {...props} user={this.state.user} isLoggedIn={this.state.isLoggedIn}/>}/>
                    <Route path="/events" component={SolarEvents}/>
                    <Route path='/admin' component={EphemForm}/>
                    <Route exact path='/' component={EphemList}/>
                    <Route exact path='*' component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
