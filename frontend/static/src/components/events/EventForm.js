import {Component} from 'react';
import Cookies from 'js-cookie';
import EventDisplay from './EventDisplay';
import {Modal} from 'react-bootstrap';

class EventForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            date_of_event: '',
            ephemeris: '',
            description: '',
            id: this.props.id,
            message: {
                to: this.props.phone,
                body: 'Testing 1, 2, 3'
            },
            image: null,
            preview: null,
            isOpen: false,
            createMode: false,
            formData: '',
            deleting: false,
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    componentDidMount() {
        console.log(this.props);
    }


    async handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData();

        formData.append('image', this.state.image);
        formData.append('name', this.state.name);
        formData.append('time', this.state.time);
        formData.append('target', this.state.target);
        formData.append('description', this.state.description);
        formData.append('user', this.props.id);
        console.log(this.props);
        const options = {
            method: 'POST',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken')
            },
            body: formData,
        };
        console.log(this.props.id);
        // await this.handleSMS(event);
        await fetch('/api/v1/events/my-events/', options);
        // this.props.history.push('/events');
        this.closeModal();
    }

    async handleSMS(event) {
        event.preventDefault();
        let currentState = this.state.message;
        currentState['body'] = `Your viewing target: ${this.state.name} will rise at ${this.state.date_of_event}  ${this.state.description}`;
        this.setState({currentState});
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/Json'
            },
            body: JSON.stringify(this.state.message.body)
        };
        await fetch('/api/v1/broadcast/', options);
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

    openModal = () => this.setState({createMode: true, isOpen: true});
    closeModal = () => this.setState({createMode: false, isOpen: false});

    render() {
        return (
            <>
                <button style={{marginBottom: '1rem'}}  className="create btn btn-success float-right" onClick={() => this.openModal()}>Create Event</button>
                <EventDisplay/>
                <Modal id={this.props.id} show={this.state.isOpen} onHide={this.closeModal}>
                    <form style={{width: '100%'}} className="modal-content text-center" onSubmit={(e) => this.handleSubmit(e)}>
                        <h2>Create an Event</h2>
                        {
                            <>
                                {this.state.image ? <img src={this.state.preview} alt=""/> : null}
                                <label className="form-label" htmlFor="image">Image</label>
                                <input className="form-control" onChange={this.handleImage} type="file" name="image"/>
                            </>
                        }
                        <label className="form-label" htmlFor="name">Event Name</label>
                        <input className="form-control" type="text"
                               onChange={this.handleInput}
                               value={this.state.value}
                               name="name"/>
                        <label className="form-label" htmlFor="ephemeris">Target</label>
                        <input type="text"
                               className="form-control"
                               onChange={this.handleInput}
                               value={this.state.value}
                               name="ephemeris"/>
                        <label className="form-label" htmlFor="date_of_event">Time</label>
                        <input className="form-control"
                               onChange={this.handleInput}
                               value={this.state.value}
                               name="date_of_event"
                               type="text"/>
                        <label className="form-label" htmlFor="description">Description</label>
                        <textarea className="form-control mb-3"
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
                </Modal>
            </>
        );
    }

}

export default EventForm;