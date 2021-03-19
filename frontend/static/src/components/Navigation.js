import {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: true,
        };
    }

    render() {
        return (
            <nav className="navbar container-fluid navbar-dark">
                {
                    this.props.isLoggedIn
                        ?
                        <>
                            <NavLink to='/home' >Home</NavLink>
                            <NavLink to="/profile">Profile</NavLink>
                            <NavLink to="/event/form">Add Event</NavLink>
                            <NavLink to="/celestial-list">Planets</NavLink>
                            <NavLink to="/events">Upcoming Events</NavLink>
                            <NavLink to='/glossary' >Glossary</NavLink>
                            <NavLink to='/about' >About</NavLink>
                        </>
                        :
                        <>
                            <NavLink to='/home' >Home</NavLink>
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