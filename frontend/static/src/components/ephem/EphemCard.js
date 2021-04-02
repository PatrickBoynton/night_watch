import {Component} from 'react';
import moment from 'moment';

class EphemCard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            is_subscribed: false,
        }
        this.handleText = this.handleText.bind(this);
        this.handleEditMode = this.handleEditMode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async handleText(event, id) {
        event.preventDefault();
        // let currentState = this.state.message;
        //
        // currentState['body'] = `Rise time: ${this.state.ephems[id].rise_time} Name: ${this.state.ephems[id].name}`;
        // this.setState({submitting: true});
        // this.setState({currentState});
        // const options = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'Application/Json'
        //     },
        //     body: JSON.stringify(this.state.message.body)
        // };
        // await fetch('/api/v1/broadcast/', options);
        alert(this.props.id);
    }


    handleEditMode() {
        this.setState({isEditMode: true});
    }

    handleSubmit() {
        this.setState({isEditMode: false});
    }

    render() {
        return (

                    <div className="card mb-3">
                        <div className="card-image">
                            <img width="255" className="card-img-top" src={this.props.item.image} alt={this.props.item.name}/>
                        </div>
                        <div className="card-body">
                            <h2 className="mb-4">{this.props.item.name}</h2>
                            <p>{this.props.item.description}</p>


                             {
                                this.props.isLoggedIn
                                    ?
    /**/
                                    this.props.item.is_subscribed
                                        ?
                                        <button type="submit" onClick={() => this.props.removeSubscriber(this.props.item)}
                                                className="btn btn-primary">Cancel Reminder
                                        </button>
                                        :

                                        <button type="submit" onClick={() => this.props.addSubscriber(this.props.item, this.state.is_subscribed)}
                                                className="btn btn-primary">Remind me
                                        </button>

                                    :
                                    null
                            }

                            {
                                this.props.isAdmin
                                    ?
                                        <div className="card-footer">
                                            <button onClick={this.handleEditMode} className="btn btn-primary">Edit</button>
                                            <button className="btn btn-danger">Delete</button>
                                        </div>
                                    :
                                        null
                            }

                        </div>
                        <div className="footer">
                            <p className="pt-2">rises at <span>{moment(this.props.item.rise_time).format('LLL')}</span></p>
                            <p className="pb-2">sets at <span>{moment(this.props.item.set_time).format('LLL')}</span></p>
                        </div>
                    </div>
        );
    }

}

export default EphemCard;