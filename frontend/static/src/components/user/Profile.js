import {Component} from 'react';

class Profile extends Component{
    render() {
        return (
            <>
                <h1>Username</h1>
                <img src="#" alt="user"/>
                <p>About me</p>
                <p>My equipment</p>
                <button className="btn btn-danger">Logout</button>
            </>
        );
    }
}

export default Profile