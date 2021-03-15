import {Component} from 'react';
import Cookies from 'js-cookie';

class Profile extends Component {

    handleLogout() {
        Cookies.remove('Authorization');
    }

    render() {
        return (
            <>
                <h1>Username</h1>
                <img src="#" alt="user"/>
                <p>About me</p>
                <p>My equipment</p>
                <button onClick={this.handleLogout} className="btn btn-danger">Logout</button>
            </>
        );
    }
}

export default Profile;