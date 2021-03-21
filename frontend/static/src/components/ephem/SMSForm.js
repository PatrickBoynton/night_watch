import {Component} from 'react';

class SMSForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {
                to: '',
                body: ''
            },
            submitting: false,
            error: false
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({
            message: {...this.state.message, [event.target.name]: event.target.value}
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/Json'
            },
            body: JSON.stringify(this.state.message)
        };
        const response = await fetch('/api/v1/broadcast/', options);
        const data = await response.json();

        this.setState({submitting: true});
        console.log(data);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="login-register">
                <h2>Set Reminder</h2>
                <label className="form-label" htmlFor="to">Phone #:</label>
                <input className="form-control"
                       value={this.state.message.to}
                       onChange={this.handleInput}
                       type="tel"
                       name="to"
                       id="to"/>

                <label className="form-label" htmlFor="body">Body:</label>
                <textarea className="form-control"
                          name="body"
                          id="body"
                          value={this.state.message.body}
                          onChange={this.handleInput}
                          cols="30"
                          rows="10">
                </textarea>
                <button className="btn btn-success">Remind Me</button>
            </form>
        );
    }
}

export default SMSForm;