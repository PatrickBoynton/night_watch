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
            <nav className="nav navbar container-fluid navbar-dark">
                {
                    this.props.isLoggedIn
                        ?
                        <>
                            <NavLink className="navbar-brand" to='/home' >Night Watch</NavLink>
                            <NavLink to="/profile">Profile</NavLink>
                            <NavLink to="/event/form">Add Event</NavLink>
                            <NavLink to="/celestial-list">Celestial Events</NavLink>
                            <NavLink to="/events">Upcoming Events</NavLink>
                            <NavLink to='/glossary' >Glossary</NavLink>
                            <NavLink to='/about' >About</NavLink>
                            {/*<NavLink>Logout</NavLink>*/}
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