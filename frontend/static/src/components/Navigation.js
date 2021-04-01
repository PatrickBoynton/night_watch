import {Component} from 'react';
import {NavLink, Redirect, withRouter} from 'react-router-dom';
import Cookies from 'js-cookie';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: false,
            editPhone: false,
        };


        this.handleLogout = this.handleLogout.bind(this);
        this.handleClick = this.handleClick.bind(this);
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


    handleClick() {
        this.setState({editPhone: true});
    }

    render() {
        return (
            <nav style={{marginBottom: '30px'}} className="nav navbar navbar-expand-md navbar-dark">
                <div className="container-fluid">
                    {
                        this.props.isLoggedIn
                            ?
                            <>
                                <NavLink className="navbar-brand" to='/'>NW</NavLink>
                                <span>
                                    <NavLink to="/celestial-list">Celestial Bodies</NavLink>
                                    <NavLink style={{padding: '0 20px 0 20px'}} to="/events">Solar Events</NavLink>
                                    <NavLink to="/event/form">My Events</NavLink>
                                </span>

                                {
                                    this.props.user.isAdmin
                                        ?
                                        <NavLink to='/admin'>Admin Area</NavLink>
                                        :
                                        null
                                }
                                <NavLink to='/logout' onClick={this.handleLogout}>Logout</NavLink>
                            </>
                            :
                            <>
                                <span>
                                    <NavLink className="navbar-brand" to='/home'>NW</NavLink>
                                    <NavLink style={{paddingLeft: '20px'}}
                                             to="/celestial-list">Celestial Bodies</NavLink>
                                    {
                                        !this.state.editPhone
                                            ?
                                            <button>Phone</button>
                                            :
                                            <h1>Test</h1>
                                    }
                                </span>
                                <span>
                                    {
                                    }
                                    <NavLink style={{paddingRight: '20px'}} to="/register">Register</NavLink>
                                    <NavLink to="/login">Login</NavLink>
                                </span>
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