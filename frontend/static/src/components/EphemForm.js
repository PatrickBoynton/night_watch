import {Component} from 'react';

class EphemForm extends Component{
    render() {
        return (
            <form>
                <label className="form-label" htmlFor="name">Name</label>
                <input className="form-control" type="text" name="name"/>
                <label className="form-label" htmlFor="rise_time">Rise Time</label>
                <input className="form-control" type="text" name="rise_time"/>
                <label className="form-label" htmlFor="set_time">Set Time</label>
                <input className="form-control" type="text" name="set_time"/>
                <label className="form-label" htmlFor="magnitude">Magnitude</label>
                <input className="form-control" type="number" name="magnitude"/>
                <label className="form-label" htmlFor="image">Image</label>
                <input className="form-control" type="file" name="image"/>
                <label className="form-label" htmlFor="description">Description</label>
                <textarea name="description" cols="30" rows="10"></textarea>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        );
    }
}

export default EphemForm