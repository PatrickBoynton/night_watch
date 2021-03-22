import {Component} from 'react';
import Cookies from 'js-cookie';
import {Link, Redirect} from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
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
        const equipment = this.props.user.my_equipment?.map(item => <p key={item.id}>{item}</p>)
        return (
            <div className="container test">
                <div className="left-boarder">
                    <h1>{this.props.user.user}</h1>
                    <img className="profile-image" src={this.props.user.profile_picture} alt="username"/>
                    <div>{equipment}</div>
                    <p>If you haven't yet created a profile, why not <Link to="/create-profile">Create a
                        Profile</Link></p>
                    <button onClick={this.handleLogout} className="btn btn-danger">Logout</button>
                </div>
                <div className="right-boarder">
                    <p className="about-text" >{this.props.user.about_me}</p>
                </div>
            </div>
        );
    }
}

export default Profile;