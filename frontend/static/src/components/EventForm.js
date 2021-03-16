import {Component} from 'react';
class EventForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            time: '',
            description: '',
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label className="form-label" htmlFor="name">Event Name</label>
                <input className="form-control" type="text"
                       onChange={this.handleInput}
                       name="name"/>
                <label className="form-label" htmlFor="time">Time</label>
                <input className="form-control" type="text"
                       onChange={this.handleInput}
                       name="time"/>
                <label className="form-label" htmlFor="description">Description</label>
                <textarea className="form-control"
                          onChange={this.handleInput}
                          name="description"
                          value={this.state.description}>
                </textarea>
                <button className="btn btn-success" type="submit">Create Event</button>
            </form>
        );
    }

}

export default EventForm