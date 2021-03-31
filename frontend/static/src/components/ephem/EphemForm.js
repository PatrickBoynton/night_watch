import {Component} from 'react';
import Cookies from 'js-cookie';

class EphemForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            rise_time: '',
            set_time: '',
            magnitude: 0,
            image: '',
            description: '',
            preview: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleImage(e) {
        let file = e.target.files[0];

        this.setState({image: file});

        let reader = new FileReader();

        reader.onloadend = () => {
            this.setState({
                preview: reader.result
            });
        };

        reader.readAsDataURL(file);
    }


    async handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData();

        formData.append('image', this.state.image);
        formData.append('name', this.state.name);
        formData.append('rise_time', this.state.rise_time);
        formData.append('set_time', this.state.set_time);
        formData.append('magnitude', this.state.magnitude);
        formData.append('description', this.state.description);
        const options = {
            method: 'POST',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: formData
        };

        await fetch('/api/v1/ephem/', options);
    }

    render() {
        return (
            <form style={{marginTop: '50px'}} className="login-register" onSubmit={(e) => this.handleSubmit(e, this.state)}>
                <label className="form-label" htmlFor="name">Name</label>
                <input className="form-control"
                       type="text"
                       onChange={this.handleInput}
                       value={this.state.name}
                       name="name"/>

                <label className="form-label" htmlFor="rise_time">Rise Time</label>
                <input className="form-control"
                       type="text"
                       onChange={this.handleInput}
                       value={this.state.rise_time}
                       name="rise_time"/>

                <label className="form-label" htmlFor="set_time">Set Time</label>
                <input className="form-control"
                       type="text"
                       onChange={this.handleInput}
                       value={this.state.set_time}
                       name="set_time"/>

                <label className="form-label" htmlFor="magnitude">Magnitude</label>
                <input className="form-control"
                       type="number"
                       onChange={this.handleInput}
                       value={this.state.magnitude}
                       name="magnitude"/>
                {
                    this.state.image && <img src={this.state.preview} alt="preview"/>
                }
                <label className="form-label" htmlFor="image">Image</label>
                <input className="form-control"
                       type="file"
                       onChange={this.handleImage}
                       name="image"/>

                <label className="form-label" htmlFor="description">Description</label>
                <textarea className="form-control"
                          onChange={this.handleInput}
                          value={this.state.description}
                          name="description"
                          cols="30"
                          rows="10">
                </textarea>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        );
    }
}

export default EphemForm;