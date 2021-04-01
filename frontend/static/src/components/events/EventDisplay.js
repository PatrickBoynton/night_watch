import {Component} from 'react';
import Cookies from 'js-cookie';
import moment from 'moment';

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
            date_of_event: '',
            image: null,
            isOpen: false,
            isDeleted: false,
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEditMode = this.handleEditMode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal = () => this.setState({isOpen: true});
    closeModal = () => this.setState({isOpen: false});

    async handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        if (typeof (this.state.image) !== 'string') {
            formData.append('image', this.state.image);
        }
        formData.append('name', this.state.name);
        formData.append('ephemeris', this.state.ephemeris);
        formData.append('date_of_event', this.state.date_of_event);

        const options = {
            method: 'PUT',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken')
            },
            body: formData,
        };
        const response = await fetch(`/api/v1/events/${this.state.id}/my-events/`, options);
        const json = await response.json();
        const data = [...this.state.data];
        const index = this.state.data.findIndex(element => element.id === json.id);
        data[index] = json;
        this.setState({data, isEditMode: false});
    }

    handleDelete(id) {
        const options = {
            method: 'DELETE',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        fetch(`/api/v1/events/${id}/my-events/`, options);

        const data = [...this.state.data];
        const index = data.indexOf(item => item.id === id);
        data.splice(index, 1);
        this.setState({data});
    }

    async componentDidMount() {
        const response = await fetch('/api/v1/events/my-events/');
        const data = await response.json();
        console.log(data);
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

    handleInput(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    showForm() {
        return <form className="m-auto" onSubmit={this.handleSubmit}>
            {this.state.preview ? <img src={this.state.preview}/> : <img src={this.state.image}/>}
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

            <label className="form-label" htmlFor="time">Date and Time</label>
            <input className="form-control"
                   type="text"
                   onChange={this.handleInput}
                   name="date_of_event"
                   value={this.state.date_of_event || ''}
                   placeholder="2021-06-12 22:33"/>

            <label className="form-label" htmlFor="description">Description</label>
            <textarea className="form-control"
                      name="description"
                      onChange={this.handleInput}
                      value={this.state.description} cols="30" rows="10">
            </textarea>
            <div className="btn-group">
                <button className="btn btn-primary" type="submit">Save</button>
                <button className="btn btn-success"><a style={{color: 'white'}} href="/event/form">Go Back</a></button>
            </div>
        </form>;
    }

    handleEditMode(e) {
        this.setState((previousState) => ({isEditMode: !previousState.isEditMode}));
        this.setState({
            name: e.name,
            ephemeris: e.ephemeris,
            date_of_event: e.date_of_event,
            id: e.id,
            description: e.description,
            image: e.image,
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
                <p>{moment(event.date_of_event).format('LLL')}</p>
                <p>{event.description}</p>
                <div className="button-group card-footer">
                    <button style={{marginRight: '20px'}} onClick={() => this.handleEditMode(event)} className="btn btn-primary">Edit</button>
                    <button onClick={() => this.handleDelete(event.id)} className="btn btn-danger">Delete
                    </button>
                </div>
            </div>
        </div>);
        return (
            <div className="row clearfix">
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