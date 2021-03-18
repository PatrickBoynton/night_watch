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
                {
                    this.props.isLoggedIn
                        ?
                        <>
                            <NavLink to="/profile">Profile</NavLink>
                            <NavLink to="/event/form">Add Event</NavLink>
                            <NavLink to="/celestial-list">Planets</NavLink>
                            <NavLink to="/events">Upcoming Events</NavLink>
                        </>
                        :
                        <>
                            <NavLink to="/register">Register</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </>
                }
                {/*TODO Only as admin.*/}
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