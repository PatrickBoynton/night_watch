import {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/rest-auth/login/', user).then(x => x)
    }

    render() {
        return (
            <>
                <form className="text-center login-register" onSubmit={this.handleSubmit}>
                    <label className="form-label" htmlFor="username">Username</label>
                    <input onChange={this.handleInput} className="form-control" type="text" name="username"/>
                    <label className="form-label" htmlFor="password">Password</label>
                    <input onChange={this.handleInput} className="form-control mb-3" type="password" name="password" />
                    <button className="btn btn-success">Login</button>
                    <p>Don't have an account yet? Why not <Link to="/register">Register</Link> First?</p>
                </form>
            </>
        );
    }
}

export default Login;