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
        const response = await fetch('/api/v1/events/', options);
        const data = await response.json();
        console.log(data);
        this.props.history.push('/events');
        return <Redirect to="/events"/>;
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