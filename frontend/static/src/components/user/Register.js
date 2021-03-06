import {Component} from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password1: '',
            password2: '',
            phone: '',
            formErrors: {
                email: '',
                username: '',
                other: '',
            }
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
                phone: this.state.phone,
            })
        };
        const response = await fetch('/rest-auth/registration/', options);
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            Cookies.set('Authorization', `Token ${data.key}`);
            const profileCreateOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/Json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify({
                username: this.state.username,
                body: this.state.phone
            })
        }
        await fetch('/api/v1/profiles/create/', profileCreateOptions)
            this.props.history.push('/celestial-list');

        } else {
            console.log(data);
            this.setState({formErrors: {username: data.username, email: data.email}});
        }

        this.props.updateAuth(data.subscriber)
    }

    render() {
        return (
            <>
                <form className="col-8 mx-auto login-register needs-validation" onSubmit={(e) => this.handleSubmit(e)}>
                    <h2>Register</h2>
                    {this.state.formErrors.username !== '' ?
                        <div className="alert-danger">{this.state.formErrors.username}</div> : null}
                    <label className="form-label" htmlFor="username">Username</label>
                    <input onChange={this.handleInput}
                           value={this.state.username}
                           className="form-control needs-validation mb-3"
                           type="text"
                           name="username"
                           required/>

                    {this.state.formErrors.email !== '' ?
                        <div className="alert-danger">{this.state.formErrors.email}</div> : null}
                    <label className="form-label" htmlFor="email">Email</label>
                    <input onChange={this.handleInput}
                           value={this.state.email}
                           className="form-control needs-validation mb-3"
                           type="email"
                           name="email"
                           required/>

                    <div className="row g-3">
                        <div className="col-6">

                            <label className="form-label" htmlFor="password1">Password</label>
                            <input onChange={this.handleInput}
                                   value={this.state.password1}
                                   className="form-control needs-validation"
                                   type="password"
                                   name="password1"
                                   required/>
                        </div>
                        <div className="col-6">

                            <label className="form-label" htmlFor="password2">Confirm Password</label>
                            <input onChange={this.handleInput}
                                   value={this.state.password2}
                                   className="form-control mb-3 needs-validation"
                                   type="password"
                                   name="password2"
                                   required/>


                        </div>
                        <div className="col-6 mb-4">
                              <label className="form-label" htmlFor="phone">Phone</label>
                            <input className="form-control"
                                   onChange={this.handleInput}
                                   value={this.state.phone}
                                   type="tel"
                                   name="phone"/>
                        </div>
                    </div>
                    {
                        this.state.username !== '' && this.state.email !== '' && this.state.password1 && this.state.password2
                            ?
                            <button className="btn btn-success mb-3" type="submit">Register</button>
                            :
                            <button className="btn btn-success mb-3" type="submit" disabled>Register</button>
                    }
                    <p>Already have an account? Why don't you <Link to="/login">Login</Link>? </p>
                </form>
            </>
        );
    }
}

export default Register;