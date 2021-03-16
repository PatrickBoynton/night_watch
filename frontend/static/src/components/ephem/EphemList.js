import {Component} from 'react';

class EphemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ephems: [],
        };
    }

    async componentDidMount() {
        const response = await fetch('api/v1/ephem/');
        const data = await response.json();
        this.setState({ephems: data});
    }

    render() {
        const list = this.state.ephems.map(item => <section key={item.id} className="row">
            <div className="col">
                <img src={item.image} alt="A planet, star or satellite."/>
                <h2>{item.name}</h2>
                <p>rise time: {item.rise_time}</p>
                <p>set time: {item.set_time}</p>
            </div>
        </section>);
        return (
            <div className="container">
                {list}
            </div>
        );
    }
}

export default EphemList;