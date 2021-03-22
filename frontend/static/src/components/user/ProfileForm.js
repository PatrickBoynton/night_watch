import {Component} from 'react';
import Cookies from 'js-cookie';
import {Redirect} from 'react-router-dom';

class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_picture: '',
            about_me: '',
            equipment: '',
            preview: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImage = this.handleImage.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData();
        formData.append('profile_picture', this.state.profile_picture);
        formData.append('about_me', this.state.about_me);
        formData.append('equipment', this.state.equipment);

        const options = {
            method: 'POST',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken')
            },
            body: formData
        };

        const response = await fetch('/api/v1/profiles/create/', options);
        const data = await response.json().catch(error => console.log(error));
        console.log(data);

        if (response.status === 201)
            return <Redirect to="/profile" />
    }

    handleImage(event) {
        let file = event.target.files[0];

        this.setState({profile_picture: file});

        let reader = new FileReader();

        reader.onloadend = () => {
            this.setState({preview: reader.result});
        };

        reader.readAsDataURL(file);
    }

    render() {
        return (
            <form className="login-register" onSubmit={(e) => this.handleSubmit(e)}>
                <h2>Create Your Profile</h2>
                {
                    this.state.profile_picture && <img src={this.state.preview} alt="preview"/>
                }
                <label className="form-label" htmlFor="profile_picture">Profile Picture</label>
                <input className="form-control"
                       onChange={this.handleImage}
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

                <label className="form-label" htmlFor="phone_number">Phone #</label>
                <input type="tel"
                       className="form-control"
                       name="phone_number"
                       id="phone_number"
                       maxLength={12}
                       placeholder="for alerting you of astro events"/>

                <button className="btn btn-success" type="submit">Create Profile</button>
            </form>
        );
    }
}

export default ProfileForm;