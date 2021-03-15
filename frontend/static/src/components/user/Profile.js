import {Component} from 'react';

class Profile extends Component{
    render() {
        return (
            <>
                <h1>Username</h1>
                <img src="#" alt="user's image"/>
                <p>About me</p>
                <p>My equipment</p>
                <button className="btn btn-danger">Logout</button>
            </>
        );
    }
}

export default Profile