import './App.css';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import {Switch, Route} from 'react-router-dom';
import {Component} from 'react';
import EphemDisplay from './components/ephem/EphemDisplay';
import EphemList from './components/ephem/EphemList';
import EventForm from './components/events/EventForm';
import EventDisplay from './components/events/EventDisplay';
import Navigation from './components/Navigation';
import Cookies from 'js-cookie';
import ProfileForm from './components/user/ProfileForm';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Glossary from './components/pages/Glossary';
import NotFound from './components/pages/NotFound';
import SolarEvents from './components/events/SolarEvents';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: !!Cookies.get('Authorization'),
            isAdmin: false,
            user: {
                user: '',
                profile_picture: '',
                about_me: '',
                my_equipment: [],
                phone: '',
            }
        };
        this.handleIsLoggedIn = this.handleIsLoggedIn.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('api/v1/profiles/details');
        const data = await response.json();


        this.setState({
            user: {
                user: data.user,
                profile_picture: data.profile_picture,
                about_me: data.about_me,
                my_equipment: data.my_equipment,
                phone: data.phone
            }
        });
    }


    handleIsLoggedIn() {
        this.setState((previousState) => ({isLoggedIn: !previousState.isLoggedIn}));
    }

    render() {
        return (
            <div className="App">
                <Navigation isLoggedIn={this.state.isLoggedIn} handleIsLoggedIn={this.handleIsLoggedIn}/>
                <Switch>
                    <Route path='/about' component={About}/>
                    <Route path='/glossary' component={Glossary}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/login' render={(props) => (<Login {...props} isLoggedIn={this.state.isLoggedIn}
                                                                    handleIsLoggedIn={this.handleIsLoggedIn}/>)}/>
                    <Route path="/profile"
                           render={(props) => (<Profile {...props} user={this.state.user}
                                                        handleIsLoggedIn={this.handleIsLoggedIn}/>)}/>
                    <Route path="/create-profile" component={ProfileForm}/>
                    <Route path="/event/form" render={(props) => (<EventForm {...props} phone={this.state.user.phone}/>)}/>
                    <Route path="/display" component={EphemDisplay}/>
                    <Route path="/celestial-list"  component={EphemList}/>
                    <Route path="/events" component={SolarEvents}/>
                    <Route path="/" />
                    <Route exact path='/' component={Home}/>
                    <Route exact path='*' component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
