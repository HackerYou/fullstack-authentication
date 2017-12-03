import React from 'react';
import { render } from 'react-dom';
import CreateUser from './components/CreateUser';
import LoginUser from './components/LoginUser';
import CreateNote from './components/CreateNote';
import ShowNotes from './components/ShowNotes';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
        };
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.refresh = this.refresh.bind(this);
    }
    login() {
        this.setState({
            loggedIn: true,
        });
    }
    refresh() {
        fetch('/api/me', {
            method: 'GET',
            credentials: 'include'
        })
        .then((res) => res.json())
        .then((user) => {
            if (user._id) {
                this.setState({
                    user: user,
                });  
                this.login();    
            }
        });
    }

    logout() {
        fetch('/api/logout', {
            method: 'GET',
            credentials: 'include',
        })
        .then(() => {
            this.setState({
                loggedIn: false,
                user: null,
            });
        });
        
    }
    
    componentDidMount() {
        this.refresh();
    }
    render() {
        return (
            <div>
                <header>
                    <h1>Notebook 📓</h1>
                    { this.state.loggedIn && <button onClick={this.logout}>Logout</button> }  
                </header>
                <main>
                    { this.state.loggedIn ?
                        <div>
                            <ShowNotes user={this.state.user} />
                            <CreateNote user={this.state.user} />
                        </div>
                    :  
                        <div>
                            <CreateUser refresh={this.refresh} />
                            <LoginUser refresh={this.refresh} login={this.login} />
                        </div>
                    }
                </main>
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));
