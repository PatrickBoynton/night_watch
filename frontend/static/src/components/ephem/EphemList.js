import {Component} from 'react';

class EphemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ephems: [],
            isEditMode: false,
            isAdmin: false,
        };
        this.handleEditMode = this.handleEditMode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('api/v1/ephem/');
        const data = await response.json();
        this.setState({ephems: data});
    }

    handleEditMode() {
        this.setState({isEditMode: true});
    }

    handleSubmit() {
        this.setState({isEditMode: false});
    }

    showForm(item) {
        return <form action="" onSubmit={this.handleSubmit}>
            <label className="form-label" htmlFor="image">Image</label>
            <input className="form-control"
                   type="file"
                   name="image"/>

            <label className="form-label" htmlFor="name">Name</label>
            <input className="form-control"
                   type="text"
                   name="name"/>

            <label className="form-label" htmlFor="rise_time">Rise Time</label>
            <input className="form-control" type="text" name="rise_time"/>

            <label className="form-label" htmlFor="set_time">Set Time</label>
            <input className="form-control" type="text" name="set_time"/>

            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" name="description" id="" cols="30" rows="10">

            </textarea>

            <button className="btn btn-success">Edit Planet</button>
        </form>;

    }

    render() {
        const list = this.state.ephems.map(item => <section key={item.id} className="row">
            <div className="col">
                <img src={item.image} alt="A planet, star or satellite."/>
                <h2>{item.name}</h2>
                <p>rise time: {item.rise_time}</p>
                <p>set time: {item.set_time}</p>
                {
                    this.state.isAdmin
                        ?
                        <>
                            <button onClick={this.handleEditMode} className="btn btn-primary">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </>
                        :
                        null
                }

            </div>
        </section>);
        return (
            <div className="container">
                {
                    !this.state.isEditMode
                        ?
                        list
                        :
                        this.showForm()
                }
            </div>
        );
    }
}

export default EphemList;