import {Component} from 'react';

class EphemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ephems: [],
            message: {
                to: '',
                body: ''
            },
            isEditMode: false,
            isAdmin: false,
            submitting: false,
            error: false
        };
        this.handleEditMode = this.handleEditMode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleText = this.handleText.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('api/v1/ephem/');
        const data = await response.json();
        this.setState({ephems: data});

        const profile = await fetch('api/v1/profiles/details/');
        const profileData = await profile.json();
        let currentState = this.state.message;

        currentState["to"] = '+' + profileData.phone
        this.setState({currentState});
    }

    handleEditMode() {
        this.setState({isEditMode: true});
    }

    handleSubmit() {
        this.setState({isEditMode: false});
    }

    async handleText(event, id) {
        event.preventDefault();
        // const data = await response.json();
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
        const response = await fetch('/api/v1/broadcast/', options);
        console.log(this.state.message.body);
        // console.log(data);
    }
    // TODO hook up when finished.
    // showForm(item) {
    //     return <form action="" onSubmit={this.handleSubmit}>
    //         <label className="form-label" htmlFor="image">Image</label>
    //         <input className="form-control"
    //                type="file"
    //                name="image"/>
    //
    //         <label className="form-label" htmlFor="name">Name</label>
    //         <input className="form-control"
    //                type="text"
    //                name="name"/>
    //
    //         <label className="form-label" htmlFor="rise_time">Rise Time</label>
    //         <input className="form-control" type="text" name="rise_time"/>
    //
    //         <label className="form-label" htmlFor="set_time">Set Time</label>
    //         <input className="form-control" type="text" name="set_time"/>
    //
    //         <label htmlFor="description" className="form-label">Description</label>
    //         <textarea className="form-control" name="description" id="" cols="30" rows="10">
    //
    //         </textarea>
    //
    //         <button className="btn btn-success">Edit Planet</button>
    //     </form>;
    //
    // }

    render() {
        const list = this.state.ephems.map((item, index) =>
            <div key={item.id} className="card">
                <div className="card-header">
                    <img src={item.image} alt="A planet, star or satellite."/>
                    <h2 className="align-self-end">{item.name}</h2>
                </div>
                <p>rise time: {item.rise_time}</p>
                <p>set time: {item.set_time}</p>
                <button onClick={(event) => this.handleText(event, index)} className="btn-primary">Remind me</button>
                {
                    this.state.isAdmin
                        ?
                        <div className="card-footer">
                            <button onClick={this.handleEditMode} className="btn btn-primary">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </div>
                        :
                        null
                }
            </div>
        );
        return (
            <>
                {
                    !this.state.isEditMode
                        ?
                        <div className="d-flex flex-wrap justify-content-center">
                            {list}
                        </div>
                        :
                        this.showForm()
                }
            </>
        );
    }
}

export default EphemList;