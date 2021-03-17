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
                'X-CSRFToken': Cookies.get('csrftoken')
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        };

        const response = await fetch('/rest-auth/login/', options);
        const data = await response.json();

        console.log(data);
        if (data.key) {
            Cookies.set('Authorization', `Token ${data.key}`);
            console.log(this.props.isLoggedIn);
            if (this.props.isLoggedIn) {
                return <Redirect from="/login" to="/celestial-list"/>;
            }
        } else {
            if (response.status !== 200) {
                // this.setState({statusMessage: data})
                // if (data.)
                console.log('Login unsuccessful.');
            }
        }
    }

    render() {
        return (
            <>
                <form className="text-center login-register" onSubmit={this.handleSubmit}>
                    <h2>Login</h2>
                    {this.state.statusMessage !== '' ? <div>{this.state.statusMessage}</div> : null}
                    <label className="form-label" htmlFor="username">Username</label>
                    <input onChange={this.handleInput}
                           className="form-control"
                           type="text"
                           name="username"/>
                    <label className="form-label" htmlFor="password">Password</label>
                    <input onChange={this.handleInput}
                           className="form-control mb-3"
                           type="password"
                           name="password"/>
                    <button className="btn btn-success">Login</button>
                    <p>Don't have an account yet? Why not <Link to="/register">Register</Link> First?</p>
                </form>
            </>
        );
    }
}

export default Login;