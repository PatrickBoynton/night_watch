import {Component} from 'react';
import Cookies from 'js-cookie';

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

    async handleSubmit(event) {
        event.preventDefault();

        const options = {
            method: 'POST',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
                'Authorization': Cookies.get('Authorization')
            },
            body: {
                profile_picture: this.state.profile_picture,
                about_me: this.state.about_me,
                equipment: this.state.equipment
            }
        };

        const response = await fetch('/api/v1/profiles/create/', options);
        const data = await response.json();
        console.log(data);
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