import {Component} from 'react';
import Search from './Search';

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
            error: false,
            result: ''
        };
        this.handleEditMode = this.handleEditMode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
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
        await fetch('/api/v1/broadcast/', options);
        console.log(this.state.message.body);
        // console.log(data);
    }

    handleInput(event) {
        this.setState({result: event.target.value})
    }

    handleCheck() {
        console.log(this.state.ephems.filter(name => name.name ===  this.state.result))
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
            <div key={item.id} className="col-sm-4 col-12">
                <div className="card">
                <div className="card-header">
                    <img src={item.image} alt="A planet, star or satellite."/>
                    <h2>{item.name}</h2>
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
            </div>
        );
        return (
            <>
                <label htmlFor="result">Search</label>
                <input  className="form-control"
                        value={this.state.result}
                        onChange={this.handleInput}
                        type="text"
                        name="result" />
                <button  onClick={this.handleCheck} className="btn btn-primary" >Search</button>
                {
                    !this.state.isEditMode
                        ?
                        <div className="planet-width
                                        px-4
                                        row">
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