import {Component} from 'react';
import Cookies from 'js-cookie';
import {Link, Redirect} from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('/rest-auth/user/');
        const data = await response.json();
        console.log(data);
    }


    async handleLogout() {

        await fetch('/rest-auth/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/Json',
                'X-CSRFToken': Cookies.get('csrftoken'),
                'Authorization': Cookies.get('Authorization')
            }
        });
        Cookies.remove('Authorization');
        Cookies.remove('csrftoken');
        this.props.handleIsLoggedIn();
        this.props.history.push('/login');
        return <Redirect to="/login"/>;
    }

    render() {
        return (
            <div className="container test">
                <div className="left-boarder">
                    <h1>Username</h1>
                    <img src="#" alt="username"/>
                    <p>Telescope, binoculars, eyes</p>
                    <p>If you haven't yet created a profile, why not <Link to="/create-profile">Create a
                        Profile</Link></p>
                    <button onClick={this.handleLogout} className="btn btn-danger">Logout</button>
                </div>
                <div className="right-boarder">
                    <p className="about-text" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti error laudantium non,
                        quasi ratione recusandae reprehenderit tempore ullam vel?</p>
                </div>
            </div>
        );
    }
}

export default Profile;