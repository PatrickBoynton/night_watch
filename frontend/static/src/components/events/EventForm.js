import {Component} from 'react';
import Cookies from 'js-cookie';
import EventDisplay from './EventDisplay';

class EventForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            time: '',
            target: '',
            description: '',
            message: {
                to: this.props.phone,
                body: 'Testing 1, 2, 3'
            },
            image: null,
            preview: null,
            isStaff: false,
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

        formData.append('image', this.state.image);
        formData.append('name', this.state.name);
        formData.append('time', this.state.time);
        formData.append('target', this.state.target);
        formData.append('description', this.state.description);
        const options = {
            method: 'POST',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken')
            },
            body: formData,
        };

        // await this.handleSMS(event);
        await fetch('/api/v1/events/', options);
        // this.props.history.push('/events');

        // if (response.status === 201 || response.status === 200)
        //     return <Redirect to="/events"/>;
    }

    async handleSMS(event) {
        event.preventDefault();
        let currentState = this.state.message;
        currentState['body'] = `Your viewing target: ${this.state.name} will rise at ${this.state.time}  ${this.state.description}`;
        this.setState({currentState});
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/Json'
            },
            body: JSON.stringify(this.state.message.body)
        };
        await fetch('/api/v1/broadcast/', options);

        this.setState({submitting: true});
    }

    handleImage(e) {
        let file = e.target.files[0];
        this.setState({image: file});
        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState({preview: reader.result});
        };

        reader.readAsDataURL(file);
    }

    render() {
        return (
            <>
                <EventDisplay/>
                <form className="login-register" onSubmit={(e) => this.handleSubmit(e)}>
                    <h2>Create an Event</h2>
                    {
                        <>
                            {this.state.image ? <img src={this.state.preview} alt=""/> : null}
                            <label className="form-label" htmlFor="image">Image</label>
                            <input className="form-control" onChange={this.handleImage} type="file" name="image"/>
                            <label className="form-label" htmlFor="name">Event Name</label>
                            <input className="form-control" type="text"
                                   onChange={this.handleInput}
                                   value={this.state.value}
                                   name="name"/>
                        </>
                    }
                    <label className="form-label" htmlFor="target">Target</label>
                    <input type="text"
                           className="form-control"
                           onChange={this.handleInput}
                           value={this.state.value}
                           name="target"/>
                    <label className="form-label" htmlFor="time">Time</label>
                    <input className="form-control"
                           onChange={this.handleInput}
                           value={this.state.value}
                           name="time"
                           type="text"/>
                    <label className="form-label" htmlFor="description">Description</label>
                    <textarea className="form-control"
                              onChange={this.handleInput}
                              name="description"
                              value={this.state.value}>
                </textarea>
                    {
                        this.state.name !== '' && this.state.time !== '' && this.state.target !== '' && this.state.description !== ''
                            ?
                            <button className="btn btn-success" type="submit">Create Event</button>
                            :
                            <button className="btn btn-success" type="submit" disabled>Create Event</button>
                    }
                </form>
            </>
        );
    }

}

export default EventForm;