import {Component} from 'react';
import {NavLink, Redirect, withRouter} from 'react-router-dom';
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
        this.props.history.push('/login');
        this.props.handleIsLoggedIn();
        return <Redirect to='/login'/>;
    }

    render() {
        return (
            <nav className="nav navbar navbar-expand-md navbar-dark">
                <div className="container-fluid">
                    {
                        this.props.isLoggedIn
                            ?
                            <>
                                <NavLink className="navbar-brand" to='/'>Night Watch</NavLink>


                                <NavLink to="/celestial-list">Celestial Bodies</NavLink>
                                <NavLink to="/events">Solar Events</NavLink>
                                <NavLink to="/event/form">My Events</NavLink>
                                <NavLink to='/glossary'>Glossary</NavLink>
                                <NavLink to="/profile">Profile</NavLink>
                                <NavLink to='/logout' onClick={this.handleLogout}>Logout</NavLink>
                                {/*<NavLink>Logout</NavLink>*/}
                            </>
                            :
                            <>
                                <NavLink className="navbar-brand" to='/home'>Night Watch</NavLink>
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
                </div>
            </nav>
        );
    }
}

export default withRouter(Navigation);