import {Component} from 'react';
import Cookies from 'js-cookie';
import {Link, Redirect} from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            profile_picture:'',
            about_me: '',
            my_equipment: []
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('api/v1/profiles/details/')
        const data = await response.json();
        console.log(data);
        this.setState({user: data.user,
                            profile_picture: data.profile_picture,
                            my_equipment: data.my_equipment,
                            about_me: data.about_me})
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
        const equipment = this.state.my_equipment?.map(item => <p>{item}</p>)
        console.log(equipment);
        return (
            <div className="container test">
                <div className="left-boarder">
                    <h1>{this.state.user}</h1>
                    <img className="profile-image" src={this.state.profile_picture} alt="username"/>
                    <p>{equipment}</p>
                    <p>If you haven't yet created a profile, why not <Link to="/create-profile">Create a
                        Profile</Link></p>
                    <button onClick={this.handleLogout} className="btn btn-danger">Logout</button>
                </div>
                <div className="right-boarder">
                    <p className="about-text" >{this.state.about_me}</p>
                </div>
            </div>
        );
    }
}

export default Profile;