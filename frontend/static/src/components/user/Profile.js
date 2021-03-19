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
            <div className="container">
                {/*<div className="card-header">*/}
                {/*    <h1>Username</h1>*/}
                {/*    <img src="#" alt="user"/>*/}
                {/*    <p>About me</p>*/}
                {/*</div>*/}
                {/*<div className="card-footer">*/}
                {/*    <p>My equipment</p>*/}

                {/*  <p>If you haven't yet you can <Link to="/create-profile" className="btn-link">Create Profile</Link> </p>*/}
                {/*<button onClick={this.handleLogout} className="btn btn-danger">Logout</button>*/}
                {/*</div>*/}
                <div className="left-boarder">
                    <h1>Username</h1>
                    <img src="#" alt="username"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti error laudantium non,
                        quasi ratione recusandae reprehenderit tempore ullam vel?</p>
                    <p>Telescope, binoculars, eyes</p>
                    <p>If you haven't yet created a profile, why not <Link className="/create-profile">Create a
                        Profile</Link></p>
                    <button onClick={this.handleLogout} className="btn btn-danger">Logout</button>
                </div>
                <div className="right-boarder">
                    <div className="card event-card">
                        <div className="card-header">
                            <h2>Past Event</h2>
                            <p>Past Target</p>
                        </div>
                        <p>12:20</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias fugit inventore
                            officiis placeat quasi quo reprehenderit vero. Nihil, placeat.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;