import {Component} from 'react';
import Cookies from 'js-cookie';

class EventDisplay extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isEditMode: false,
            isAdmin: true,
        }
    }

    handleDelete(event, id) {
        event.preventDefault();
        const options = {
            method: "DELETE",
            headers: {
                "X-CSRFToken": Cookies.get("csrftoken")
            }
        }
        fetch(`/api/v1/events/${id}/`, options)
    }

    async componentDidMount() {
        const response = await fetch("/api/v1/events/");
        const data = await response.json();
        console.log(data);
        this.setState({data})
    }

    render() {
        const events = this.state.data?.map(event => <section key={event.id}>
            <h2>{event.name}</h2>
            <p>{event.ephemeris}</p>
            <p>{event.time}</p>
            <p>{event.description}</p>
            <div className="button-group">
                <button className="btn btn-primary">Edit</button> <button onClick={(e) => this.handleDelete(e, event.id)} className="btn btn-danger">Delete</button>
            </div>
        </section>);
        return (
            <div>
                {events}
            </div>
        );
    }
}

export default EventDisplay