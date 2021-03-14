import {Component} from 'react'
import {Link} from 'react-router-dom';

class Register extends Component{
    render() {
        return (
            <>
                <form className="login-register" action="">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input className="form-control" type="text" name="username"/>
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-control" type="email" name="email"/>
                    <label className="form-label" htmlFor="password1">Password</label>
                    <input className="form-control" type="password" name="password1"/>
                    <label className="form-label" htmlFor="password2">Confirm  Password</label>
                    <input className="form-control mb-3" ype="password" name="password2"/>
                    <button className="btn btn-success disabled" type="submit">Register</button>
                    <p>Already have an account? Why don't you <Link to="/login">Login</Link>? </p>
                </form>
            </>
        );
    }
}

export default Register