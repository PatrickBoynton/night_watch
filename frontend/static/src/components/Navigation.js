import {Component} from 'react';
import {NavLink, Redirect, withRouter} from 'react-router-dom';
import Cookies from 'js-cookie';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: false,
            editPhone: false,
            subscriber: 0,
            is_subscribed: false
        };

        this.handleLogout = this.handleLogout.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.unsubscribe = this.unsubscribe.bind(this);
    }

    async componentDidMount() {
        const profile = await fetch('api/v1/profiles/details/');
        const data = await profile.json();
        console.log(data);
        this.setState({subscriber: data.id, is_subscribed: data.is_subscribed})
    }


    async subscribe(id) {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/Json',
                'X-CSRFToken': Cookies.get('csrftoken'),
                'Authorizations': Cookies.get('Authorization')
            },
            body: JSON.stringify({
                is_subscribed: true,
            })
        };

        console.log();

        await fetch(`/api/v1/profiles/update/${id}/`, options)
        this.setState({is_subscribed: true})
    }

    async unsubscribe(id) {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/Json',
                'X-CSRFToken': Cookies.get('csrftoken'),
                'Authorizations': Cookies.get('Authorization')
            },
            body: JSON.stringify({
                is_subscribed: false,
            })
        };

        console.log(`Proflie id: ${id}`);

        await fetch(`/api/v1/profiles/update/${id}/`, options)
        this.setState({is_subscribed: false})
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
        this.props.history.push('/celestial-list');
        this.props.handleIsLoggedIn();
        return <Redirect to='/celestial-list'/>;
    }


    handleClick() {
        this.setState({editPhone: true});
    }

    render() {
        return (
            <nav style={{marginBottom: '30px'}} className="nav navbar navbar-expand-md navbar-dark">
                <div className="container-fluid justify-content-start">
                    {
                        this.props.isLoggedIn
                            ?
                            <>
                                <NavLink className="navbar-brand" to='/'>NW</NavLink>

                                <NavLink to="/celestial-list">Celestial Bodies</NavLink>
                                <NavLink style={{padding: '0 20px 0 20px'}} to="/events">Solar Events</NavLink>
                                <NavLink to="/event/form">My Events</NavLink>


                                {
                                    this.props.user.isAdmin
                                        ?
                                        <NavLink to='/admin'>Admin Area</NavLink>
                                        :
                                        null
                                }
                                {this.state.is_subscribed
                                    ?
                                    <button className="ml-auto btn btn-link"
                                            onClick={() => this.unsubscribe(this.state.subscriber)}>Unsubscribe</button>
                                    :
                                    <button className="ml-auto btn btn-link" onClick={() => this.subscribe(this.state.subscriber)}>Subscribe</button>
                                }

                                <NavLink to='/logout' onClick={this.handleLogout}>Log out</NavLink>
                            </>
                            :
                            <>
                                <span>
                                    <NavLink className="navbar-brand" to='/home'>NW</NavLink>
                                    <NavLink style={{paddingLeft: '20px'}}
                                             to="/celestial-list">Celestial Bodies</NavLink>

                                </span>
                                <span className="ml-auto">

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