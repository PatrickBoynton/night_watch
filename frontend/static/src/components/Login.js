import {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component{
    render() {
        return (
            <>
                <form className="text-center login-register" action="">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input className="form-control" type="text" name="username"/>
                    <label className="form-label" htmlFor="password">Password</label>
                    <input className="form-control mb-3" type="password" name="" id=""/>
                    <button className="btn btn-success disabled">Login</button>
                    <p>Don't have an account yet? Why not <Link to="/register">Register</Link> First?</p>
                </form>
            </>
        );
    }
}

export default Login