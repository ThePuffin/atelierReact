import React, { Component } from 'react';

class Historique extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            historique:[]
         };
    }
    render() {
        return (
            <div>
            <h4>Historique</h4>
            {(this.state.historique[0] !== undefined)?
            <ul>
            {this.state.historique.map(
                elmt => <li>{elmt}</li>
            )}
            </ul>:<p>Nous attendons votre première proposition</p>}
            </div>
        );
    }
}

export default Historique;