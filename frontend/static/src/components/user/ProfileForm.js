import {Component} from 'react';

class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_picture: '',
            about_me: '',
            equipment: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form className="login-register" onSubmit={(e) => this.handleSubmit(e)}>
                <h2>Create Your Profile</h2>
                <label className="form-label" htmlFor="profile_picture">Profile Picture</label>
                <input className="form-control"
                       onChange={this.handleInput}
                       type="file"
                       name="profile_picture"/>

                <label className="form-label" htmlFor="equipment">My Equipment</label>
                <input className="form-control"
                       onChange={this.handleInput}
                       value={this.state.equipment}
                       type="text"
                       name="equipment"
                       placeholder="Whatever you view the night sky with."/>

                <label className="form-label" htmlFor="about_me">About Me</label>
                <textarea className="form-control"
                          onChange={this.handleInput}
                          value={this.state.about_me}
                          name="about_me"
                          cols="30"
                          rows="10">
                </textarea>

                <button className="btn btn-success" type="submit">Create Profile</button>
            </form>
        );
    }
}

export default ProfileForm;