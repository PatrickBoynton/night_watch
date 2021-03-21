import {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            statusMessage: '',
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
                'X-CSRFToken': Cookies.get('csrftoken'),
                'Authorization': Cookies.get('Authorization')
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        };

        const response = await fetch('/rest-auth/login/', options);
        const data = await response.json();

        if (data.key) {
            Cookies.set('Authorization', `Token ${data.key}`);
            if (Cookies.get('Authorization')) {
                this.props.handleIsLoggedIn();
                this.props.history.push('/celestial-list');
                return <Redirect to="/celestial-list"/>;
            }
        } else {
            if (response.status !== 200) {
                setInterval(() => {
                    this.setState({statusMessage: 'Something went wrong. Try again later.'});
                }, 200);
            }
        }
    }

    render() {
        return (
            <>
                <form className="text-center login-register" onSubmit={this.handleSubmit}>
                    <h2>Login</h2>
                    {this.state.statusMessage !== '' ?
                        <div className="alert-danger">{this.state.statusMessage}</div> : null}
                    <label className="form-label" htmlFor="username">Username</label>
                    <input onChange={this.handleInput}
                           className="form-control"
                           type="text"
                           name="username" required/>

                    <label className="form-label" htmlFor="password" >Password</label>
                    <input onChange={this.handleInput}
                           className="form-control mb-3"
                           type="password"
                           name="password" required/>
                    <button className="btn btn-success">Login</button>
                    <p>Don't have an account yet? Why not <Link to="/register">Register</Link> First?</p>
                </form>
            </>
        );
    }
}

export default Login;