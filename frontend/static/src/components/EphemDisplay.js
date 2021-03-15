import {Component} from 'react';

class EphemDisplay extends Component{

    constructor(props) {
        super(props);

        this.state = {
            ephem: [],
        }
    }

    async componentDidMount() {
        const response =  await fetch("/api/v1/ephem/");
        const data = await response.json();

        this.setState({ephem: data})
        console.log(this.state);
    }

    render() {
        const ephems = this.state.ephem.map(ephem => <section>
            <img src={ephem.image} alt="The sun."/>
            <h1>{ephem.name}</h1>
            <p>Rise time: </p>
            <h2>{ephem.rise_time}</h2>
            <p>Set time: </p>
            <h2>{ephem.set_time}</h2>
        </section>);
        return (
            <>
                {ephems}
            </>
        );
    }
}

export default EphemDisplay