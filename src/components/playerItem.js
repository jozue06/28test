import React from 'react';

class PlayerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {},
    };

  }

  //   handleRemove(e) {
  //     this.props.remove(this.props.player.id);
  //   }

  render() {
  
    console.log('#2 render the player item', this.props);

    return <li className="player">
      {/* <h3>what is this?: {this.props.players[0].playerName}</h3> */}
      {/* <h4>{this.props.player}</h4> */}
    </li>;
  }
}

export default PlayerItem;