import {Component} from 'react';
import EphemCard from './EphemCard';
import Cookies from 'js-cookie';

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
            result: '',
            id: 0,
            isSubscribed: false,
        };
        this.handleInput = this.handleInput.bind(this);
        this.addSubscriber = this.addSubscriber.bind(this);
        this.removeSubscriber = this.removeSubscriber.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('api/v1/ephem/');
        const data = await response.json();
        this.setState({ephems: data});

        const profile = await fetch('api/v1/profiles/details/');
        const profileData = await profile.json();
        let currentState = this.state.message;
        console.log(profileData.id);
        currentState['to'] = '+' + profileData.phone;
        this.setState({currentState, id: profileData.id});
    }


    handleInput(event) {
        this.setState({result: event.target.value});
    }

    async addSubscriber(item, state) {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/Json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };

        const response = await fetch(`/api/v1/ephem/${item.id}/subscribe/`, options);
        const json = await response.json();
        console.log(json);
        this.setState({is_subscribed: true})
    }

    async removeSubscriber(item) {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/Json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };

        const response = await fetch(`/api/v1/ephem/${item.id}/unsubscribe/`, options);
        const json = await response.json();
        console.log(json);
        this.setState({is_subscribed: false});
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

        const list = this.state.ephems.filter((searchItem) => {
            if (this.state.search === null) {
                return searchItem;
            } else if (searchItem.name.toLowerCase().includes(this.state.result.toLowerCase())) {
                return searchItem;
            }
        }).map((item, index) =>
            <EphemCard item={item}
                       key={item.id}
                       isLoggedIn={this.props.isLoggedIn}
                       addSubscriber={this.addSubscriber}
                       removeSubscriber={this.removeSubscriber}
                       isAdmin={this.state.isAdmin}/>
        );
        return (
            <>
                <div className="row">
                    <input className="col-12 mb-5"
                           style={{ marginLeft: '30px', marginRight: '40px'}}
                           value={this.state.result}
                           onChange={this.handleInput}
                           type="text"
                           name="result"
                           placeholder="Search..."/>
                </div>

                {
                    !this.state.isEditMode
                        ?
                        <div className="row">

                            {
                                list
                            }
                        </div>
                        :
                        this.showForm()
                }
            </>
        );
    }
}

export default EphemList;