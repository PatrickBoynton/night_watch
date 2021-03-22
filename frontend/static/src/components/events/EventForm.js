import {Component} from 'react';
import Cookies from 'js-cookie';
import {Redirect} from 'react-router-dom';

class EventForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            time: '',
            target: '',
            description: '',
            message: {
                to: '',
                body: ''
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
                name: this.state.name,
                time: this.state.time,
                ephemeris: this.state.target,
                description: this.state.description,
            })
        };


        await fetch('/api/v1/events/', options);
        this.props.history.push('/events');
        return <Redirect to="/events"/>;
    }

    async handleSMS(event) {
        event.preventDefault();
        let currentState = this.state.message;
        currentState["body"] = `${this.state.name} rises at ${this.state.rise_time} and sets at ${this.state.set_time} look East.`
        this.setState({currentState})
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

    render() {
        return (
            <form className="login-register" onSubmit={this.handleSubmit}>
                <h2>Create an Event</h2>
                <label className="form-label" htmlFor="name">Event Name</label>
                <input className="form-control" type="text"
                       onChange={this.handleInput}
                       value={this.state.value}
                       name="name"/>
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
                <button className="btn btn-success" type="submit">Create Event</button>
            </form>
        );
    }

}

export default EventForm;