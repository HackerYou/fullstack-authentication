import React from 'react';
import { render } from 'react-dom';
import CreateUser from './components/CreateUser';
import LoginUser from './components/LoginUser';
class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Notebook 📓</h1>
                    <button>Logout</button>
                </header>
                <main>
                    <CreateUser />
                    <LoginUser />
                </main>
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));
