import {Component} from 'react';
import Cookies from 'js-cookie';

class EventDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isEditMode: false,
            isAdmin: true,
            name: '',
            ephemeris: '',
            time: '',
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEditMode = this.handleEditMode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    async handleSubmit() {
        const options = {
            method: "PUT",
            headers: {
                "X-CSRFToken": Cookies.get("csrftoken")
            },
            body: JSON.stringify({name: this.state.name,
                                        ephemeris: this.state.ephemeris,
                                        time: this.state.time})
        }

        await fetch("/api/v1/events/", options);
    }

    handleDelete(id) {
        const options = {
            method: 'DELETE',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        fetch(`/api/v1/events/${id}/`, options);
    }

    async componentDidMount() {
        const response = await fetch('/api/v1/events/');
        const data = await response.json();
        console.log(data);
        this.setState({data});
    }

    showForm() {
        return <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text"
                   onChange={this.handleInput}
                   name="name"
                   value={this.state.name}/>
            <label htmlFor="ephemeris">Target</label>
            <input type="text"
                   onChange={this.handleInput}
                   name="ephemeris"
                   value={this.state.ephemeris}/>
            <label htmlFor="time">Time</label>
            <input type="text"
                   onChange={this.handleInput}
                   name="time"
                   value={this.state.time}/>
            <label htmlFor="description">Description</label>
            <textarea name="description" value={this.state.description} cols="30" rows="10">
            </textarea>
            <button type="submit">Edit</button>
        </form>;
    }

    handleEditMode(e) {
        this.setState((previousState) => ({isEditMode: !previousState.isEditMode}));
        this.setState({name: e.name,
                             ephemeris: e.ephemeris, time: e.time})
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        let events = this.state.data?.map(event => <section key={event.id}>
            <>
                <h2>{event.name}</h2>
                <p>{event.ephemeris}</p>
                <p>{event.time}</p>
                <p>{event.description}</p>
                <div className="button-group">
                    <button onClick={() => this.handleEditMode(event)} className="btn btn-primary">Edit</button>
                    <button onClick={() => this.handleDelete(event.id)} className="btn btn-danger">Delete
                    </button>
                </div>
            </>
        </section>);
        return (
            <>
                {
                    !this.state.isEditMode
                        ?
                        events
                        :
                        this.showForm()
                }
            </>
        );
    }

}

export default EventDisplay;