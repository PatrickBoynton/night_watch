import {Component} from 'react'
import moment from 'moment';

class SolarEvents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
        }
    }


    async componentDidMount() {
        const response = await fetch('/api/v1/events/solar-events/');
        const data = await response.json();

        this.setState({events: data});
    }


    render() {
        const solarEvent = this.state.events.map(item =>
            <div className="col-sm-4 col-12 mb-3">
                    <div className="card h-100">
                        <div className="card-header">
                            <div>
                                <img style={{width: '100%'}} src={item.image} alt="Some sort of event"/>
                            </div>
                            <h1>{item.name}</h1>
                            <h3>{item.ephemeris}</h3>
                        </div>
                        <div className="card-footer">
                            <p>{moment(item.date_of_event).format('LLL')}</p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
        )


        return (
            <div className="row">
                {solarEvent}
            </div>
        );
    }
}

export default SolarEvents