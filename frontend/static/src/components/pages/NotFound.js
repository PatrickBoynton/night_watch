import {Component} from 'react'
import {Link} from 'react-router-dom';

class NotFound extends Component{
    render() {
        return (
            <>
                <h1>We're sorry the page you are not looking for was not found</h1>
                <p>Please click on the navbar links or go  <Link to='/celestial-events'>Here</Link> </p>
            </>
        );
    }
}

export default NotFound