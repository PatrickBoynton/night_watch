import {Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: false,
        };


        this.handleLogout = this.handleLogout.bind(this);
    }

    async handleLogout() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/Json',
                'X-CSRFToken': Cookies.get('csrftoken'),
                'Authorization': Cookies.get('Authorization'),
            }
        };
        await fetch('/rest-auth/logout/', options);
        Cookies.remove('csrftoken');
        Cookies.remove('Authorization');
        this.state.history.push('/login');
        return <Redirect to='/login'/>;
    }

    render() {
        return (
            <nav className="nav navbar container-fluid navbar-dark">
                {
                    this.props.isLoggedIn
                        ?
                        <>
                            <NavLink className="navbar-brand" to='/home'>Night Watch</NavLink>
                            <NavLink to="/profile">Profile</NavLink>
                            <NavLink to="/event/form">Add Event</NavLink>
                            <NavLink to="/celestial-list">Celestial Events</NavLink>
                            <NavLink to="/events">Upcoming Events</NavLink>
                            <NavLink to='/glossary'>Glossary</NavLink>
                            <NavLink to='/logout' onClick={this.handleLogout}>Logout</NavLink>
                            {/*<NavLink>Logout</NavLink>*/}
                        </>
                        :
                        <>
                            <NavLink to='/home'>Home</NavLink>
                            <NavLink to="/register">Register</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </>
                }
                {
                    this.state.isAdmin
                        ?
                        <NavLink to="/ephem/form">Add Planet</NavLink>
                        :
                        null
                }
            </nav>
        );
    }
}

export default Navigation;