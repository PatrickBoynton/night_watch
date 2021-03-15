import {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password1: '',
            password2: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const user = {
            username: this.state.username,
            email: this.state.email,
            password1: this.state.password1,
            password2: this.state.password2
        }

        axios.post('/rest-auth/registration/', user).then(x => console.log(x))
    }

    render() {
        return (
            <>
                <form className="login-register" onSubmit={this.handleSubmit}>
                    <label className="form-label" htmlFor="username">Username</label>
                    <input onChange={this.handleInput} value={this.state.username} className="form-control" type="text"
                           name="username"/>
                    <label className="form-label" htmlFor="email">Email</label>
                    <input onChange={this.handleInput} value={this.state.email} className="form-control" type="email"
                           name="email"/>
                    <label className="form-label" htmlFor="password1">Password</label>
                    <input onChange={this.handleInput} value={this.state.password1} className="form-control"
                           type="password" name="password1"/>
                    <label className="form-label" htmlFor="password2">Confirm Password</label>
                    <input onChange={this.handleInput} value={this.state.password2} className="form-control mb-3"
                           type="password" name="password2"/>
                    <button className="btn btn-success" type="submit">Register</button>
                    <p>Already have an account? Why don't you <Link to="/login">Login</Link>? </p>
                </form>
            </>
        );
    }
}

export default Register;