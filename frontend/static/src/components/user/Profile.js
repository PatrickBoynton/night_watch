import {Component} from 'react';
import Cookies from 'js-cookie';
import {Redirect} from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    async componentDidMount() {
        const response = await fetch("/rest-auth/user/");
        const data = await response.json();
        console.log(data);
    }


    handleLogout() {
        Cookies.remove('Authorization');
        this.props.history.push("/login")
        return <Redirect to="/login" />
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h1>Username</h1>
                    <img src="#" alt="user"/>
                    <p>About me</p>
                </div>
                <div className="card-footer">
                    <p>My equipment</p>
                <button onClick={this.handleLogout} className="btn btn-danger">Logout</button>
                </div>
            </div>
        );
    }
}

export default Profile;