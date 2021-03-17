import {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password1: '',
            password2: '',
            usernameStatus: '',
            emailStatus: '',
            password1Status: '',
            password2Status: '',
            profile_picture: '',
            equipment: '',
            about_me: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/Json',
                'X-CSRFToken': Cookies.get('csrftoken')
            },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password1: this.state.password1,
                password2: this.state.password2,
                equipment: this.state.equipment,
                profile_picture: this.state.profile_picture,
                about_me: this.state.about_me
            })
        };
        const response = await fetch('/rest-auth/registration/', options);
        const data = await response.json();
        console.log(data);
        if (response.status !== 201) {
            // Done this way to prevent multiple errors.
            // this.setState({usernameStatus: data.username[0]});
            // this.setState({emailStatus: data.email[0]});
            // this.setState({password1Status: data.password1[0]});
            // this.setState({password2Status: data.password2[0]});
            console.log('Not logged in!');
        } else {
            Cookies.set('Authorization', `Token ${data.key}`);
            this.props.history.push("/celestial-list")
            return <Redirect to="/celestial-list" />
        }
    }

    render() {
        return (
            <>
                <form className="login-register" onSubmit={(e) => this.handleSubmit(e)}>
                    <h2>Register</h2>
                    {this.state.usernameStatus !== '' ? <div>{this.state.usernameStatus}</div> : null}
                    <label className="form-label" htmlFor="username">Username</label>
                    <input onChange={this.handleInput}
                           value={this.state.username}
                           className="form-control"
                           type="text"
                           name="username"/>

                    {this.state.emailStatus !== '' ? <div>{this.state.emailStatus}</div> : null}
                    <label className="form-label" htmlFor="email">Email</label>
                    <input onChange={this.handleInput}
                           value={this.state.email}
                           className="form-control"
                           type="email"
                           name="email"/>
                    <div className="row g-3">
                        <div className="col">
                            {this.password1Status !== '' ? <div>{this.state.password1Status}</div> : null}
                            <label className="form-label" htmlFor="password1">Password</label>
                            <input onChange={this.handleInput}
                                   value={this.state.password1}
                                   className="form-control"
                                   type="password"
                                   name="password1"/>
                        </div>
                        <div className="col">
                            {this.password2Status !== '' ? <div>{this.state.password2Status}</div> : null}
                            <label className="form-label" htmlFor="password2">Confirm Password</label>
                            <input onChange={this.handleInput}
                                   value={this.state.password2}
                                   className="form-control mb-3"
                                   type="password"
                                   name="password2"/>
                        </div>
                    </div>

                    <label className="form-label" htmlFor="equipment">Equipment</label>
                    <input className="form-control"
                           type="text"
                           onChange={this.handleInput}
                           value={this.state.equipment}
                           name="equipment"
                           placeholder="Your eyes are perfectly valid astronomy tools."/>

                    <label className="form-label" htmlFor="profile_picture">Profile Image</label>
                    <input className="form-control"
                           onChange={this.handleInput}
                           value={this.state.profile_picture}
                           type="file"
                           name="profile_picture"/>

                    <label className="form-label" htmlFor="about_me">About Me</label>
                    <textarea className="form-control"
                              value={this.state.about_me}
                              onChange={this.handleInput}
                              name="about_me"
                              cols="30"
                              rows="10">
                    </textarea>
                    <button className="btn btn-success" type="submit">Register</button>
                    <p>Already have an account? Why don't you <Link to="/login">Login</Link>? </p>
                </form>
            </>
        );
    }
}

export default Register;