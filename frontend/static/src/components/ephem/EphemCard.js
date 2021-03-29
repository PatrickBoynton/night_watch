import {Component} from 'react';

class EphemCard extends Component {
    constructor(props) {
        super(props);

        this.handleText = this.handleText.bind(this);
        this.handleEditMode = this.handleEditMode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async handleText(event, id) {
        event.preventDefault();
        let currentState = this.state.message;

        currentState['body'] = `Rise time: ${this.state.ephems[id].rise_time} Name: ${this.state.ephems[id].name}`;
        this.setState({submitting: true});
        this.setState({currentState});
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/Json'
            },
            body: JSON.stringify(this.state.message.body)
        };
        // await fetch('/api/v1/broadcast/', options);
        console.log(this.state.message.body);
    }

    handleEditMode() {
        this.setState({isEditMode: true});
    }

    handleSubmit() {
        this.setState({isEditMode: false});
    }

    render() {
        return (
            <>
                <div key={this.props.item.id} className="col-sm-4 col-12 mb-3">
                    <div className="card h-100">
                        <div className="card-header">
                            <div className="img-container">
                                <img style={{height: '100%'}} src={this.props.item.image}
                                     alt="A planet, star or satellite."/>
                            </div>
                            <h2>{this.props.item.name}</h2>
                            <p>{this.props.item.description}</p>
                        </div>
                        {
                                <>
                                    <p>rise time: {this.props.item.rise_time}</p>
                                    <p>set time: {this.props.item.set_time}</p>
                                </>
                        }

                        <button onClick={(event) => this.handleText(event, this.props.index)}
                                className="btn-primary">Remind me
                        </button>
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
                </div>
            </>
        );
    }

}

export default EphemCard;