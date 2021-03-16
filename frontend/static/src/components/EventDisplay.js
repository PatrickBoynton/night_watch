import {Component} from 'react';

class EventDisplay extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isEditMode: false,
            isAdmin: true,
        }
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
                <button className="btn btn-primary">Edit</button> <button className="btn btn-danger">Delete</button>
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