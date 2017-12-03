import React from 'react';

class ShowNotes extends React.Component {
    constructor() {
        super();
        this.state = {
            notes: [],
        };
    }
    componentDidMount() {
        // 1. Fetch all the exist user notes by a user's ID
        // 2. Store them in the state
    }

    render() {
        const showNote = (note) => <li>{note.title} - {note.description}</li>
        return (
            <ul>
                {this.state.notes.map(showNote)}
            </ul>
        );
    }
}

export default ShowNotes;