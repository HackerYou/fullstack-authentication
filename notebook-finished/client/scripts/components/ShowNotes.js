import React from 'react';

class ShowNotes extends React.Component {
    constructor() {
        super();
        this.state = {
            notes: [],
        };
    }
    componentWillMount() {
        // 1. Fetch all the exist user notes by a user's ID
        fetch(`/api/notes/${this.props.user._id}`)
            .then((res) => res.json())
            .then((notes) => {
                // 2. Store them in the state                
                this.setState({
                    notes,
                });
            });

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