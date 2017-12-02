import React from 'react';
import Field from './Field';

class LoginUser extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        // 1. Collect all of the user data from the state
        // 2. POST it to the back end to check user's credentials.
        // 3. If the user is valid, log them in
        // 4. If the user is invalid, let them know and give them another shot to try again.
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    render() {
        return (
            <div>
                <h2>Login User</h2>
                <form onSubmit={this.handleSubmit}>
                    <Field
                        type="email"
                        name="email"
                        label="Enter your email: "
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <Field
                        type="password"
                        name="password"
                        label="Enter your password: "
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button>Login User</button>
                </form>
            </div>
        );
    }
}

export default LoginUser;