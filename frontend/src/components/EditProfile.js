// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import { useNavigate } from 'react-router-dom';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.navigate = useNavigate();
        this.state = {
            username: this.props.username,
            email: this.props.email,
            day: this.props.day,
            month: this.props.month,
            year: this.props.year
        }
    }

    submitChanges() {
        // Add the login functionality here
        this.navigate('./Profile');

    }

    cancelChanges() {
        // Add the login functionality here
        this.navigate('./Profile');
    }

    render() {
        return (
            <div>
                <form className="editProfile" onSubmit={this.submitChanges}>
                    <input type="text" placeholder={this.state.username}/>
                    <input type="text" placeholder={this.state.email}/>

                    <input type="number" placeholder="Day" value={this.state.day} onChange={(e) => this.setState({ day: e.target.value })} />
                    <input type="number" placeholder="Month" value={this.state.month} onChange={(e) => this.setState({ month: e.target.value })} />
                    <input type="number" placeholder="Year" value={this.state.year} onChange={(e) => this.setState({ year: e.target.value })} />

                    <button type="submit">Confirm Changes</button>
                    <button onClick={this.cancelChanges}>Cancel</button>
                </form>
            </div>
        );
    }
};

export {EditProfile};