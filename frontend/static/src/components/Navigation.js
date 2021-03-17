import {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: false,
        };
    }

    render() {
        return (
            <nav className="navbar container-fluid navbar-dark">
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
                {/*TODO only when logged in*/}
                <NavLink to="/profile">Profile</NavLink>
                {/*TODO Only as admin.*/}
                {/*<NavLink to="/ephem/form">Add Planet</NavLink>*/}
                <NavLink to="/event/form">Add Event</NavLink>
                <NavLink to="/celestial-list">Planets</NavLink>
                <NavLink to="/events">Upcoming Events</NavLink>
            </nav>
        );
    }
}

export default Navigation;