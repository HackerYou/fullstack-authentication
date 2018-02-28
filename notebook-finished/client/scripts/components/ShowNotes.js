import React from 'react';

class ShowNotes extends React.Component {
    constructor() {
        super();
        this.state = {
            notes: [],
            ready: false
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
                }, () => {
                  this.setState({
                    ready: true
                  })
                });
            });

    }

    render() {
        if (this.state.ready) {
          return (
              <ul>
                {this.state.notes.map((note, i) => {
                  return (
                    <li key={i}>
                      {note.title} - {note.description}
                    </li>
                  )
                })}
              </ul>
          );
        } else {
          return null
        }
    }
}

export default ShowNotes;
