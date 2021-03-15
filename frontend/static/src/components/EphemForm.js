import {Component} from 'react';
import Cookies from 'js-cookie';

class EphemForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            rise_time: '',
            set_time: '',
            magnitude: 0,
            image: null,
            description: '',
            preview: '',
        };
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleImage(e) {
        let file = e.target.file[0];
        this.setState({image: file});
        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState({
                preview: reader.result
            });
        };
        reader.readAsDataURL(file);
    }


    async handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('image', this.state.image);
        const options = {
            method: 'POST',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: formData
        };

        const response = await fetch('/api/v1/ephem/', options);
        const data = await response.json();

        console.log(data);

        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e, this.state)}>
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
                <textarea className="form-control" name="description" cols="30" rows="10"></textarea>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        );
    }
}

export default EphemForm;