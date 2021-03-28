import {Component} from 'react';
import Cookies from 'js-cookie';
import {Redirect} from 'react-router-dom';

class EventDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            data: [],
            isEditMode: false,
            isAdmin: false,
            name: '',
            ephemeris: '',
            time: '',
            image: null,
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEditMode = this.handleEditMode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleImage = this.handleImage.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async handleSubmit(e) {
        e.preventDefault();
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/Json',
                'X-CSRFToken': Cookies.get('csrftoken')
            },
            body: JSON.stringify({
                name: this.state.name,
                ephemeris: this.state.ephemeris,
                time: this.state.time,
                description: this.state.description,
            })
        };
        await fetch(`/api/v1/events/${this.state.id}/`, options);
        window.location.reload();
        return <Redirect to='/events'/>;
    }

    handleDelete(id) {
        const options = {
            method: 'DELETE',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        fetch(`/api/v1/events/${id}/`, options);
        // this.props.history.push('/events');
        window.location.reload();
    }

    async componentDidMount() {
        const response = await fetch('/api/v1/events/');
        const data = await response.json();
        this.setState({data});
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

    showForm() {
        return <form className="login-register" onSubmit={this.handleSubmit}>
            {this.state.image ? <img src={this.state.preview} alt=""/> : null}
            <label className="form-label" htmlFor="image">Image</label>
            <input className="form-control"
                   type="file"
                   onChange={this.handleImage}
                   name="image"/>

            <label className="form-label" htmlFor="name">Name</label>
            <input className="form-control"
                   type="text"
                   onChange={this.handleInput}
                   name="name"
                   value={this.state.name || ''}/>

            <label className="form-label" htmlFor="ephemeris">Target</label>
            <input className="form-control"
                   type="text"
                   onChange={this.handleInput}
                   name="ephemeris"
                   value={this.state.ephemeris || ''}/>

            <label className="form-label" htmlFor="time">Time</label>
            <input className="form-control"
                   type="text"
                   onChange={this.handleInput}
                   name="time"
                   value={this.state.time || ''}/>

            <label className="form-label" htmlFor="description">Description</label>
            <textarea className="form-control"
                      name="description"
                      onChange={this.handleInput}
                      value={this.state.description} cols="30" rows="10">
            </textarea>
            <button className="btn btn-primary" type="submit">Edit</button>
        </form>;
    }

    handleEditMode(e) {
        this.setState((previousState) => ({isEditMode: !previousState.isEditMode}));
        this.setState({
            name: e.name,
            ephemeris: e.ephemeris,
            time: e.time,
            id: e.id,
            description: e.description
        });
    }

    render() {
        let events = this.state.data?.map(event => <div className="col-sm-4 col-4 mb-3" key={event.id}>
                    <div className="card h-100">
                        <div className="card-header">
                            <div className="img-container img-responsive">
                                <img style={{height: '100%'}} src={event.image} alt="Nothin here."/>
                            </div>
                            <h2>{event.name}</h2>
                            <p>{event.ephemeris}</p>
                        </div>
                        <p>{event.time}</p>
                        <p>{event.description}</p>
                        <div className="button-group card-footer">
                            <button onClick={() => this.handleEditMode(event)} className="btn btn-primary">Edit</button>
                            <button onClick={() => this.handleDelete(event.id)} className="btn btn-danger">Delete
                            </button>
                        </div>
                </div>
        </div>);
        return (
            <div className="row">
                {
                    !this.state.isEditMode
                        ?
                        events
                        :
                        this.showForm()
                }
            </div>
        );
    }

}

export default EventDisplay;