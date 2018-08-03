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
  
    console.log('#2 render the player item', this.props.player);

    return <li className="player">
      <h3>Player: {this.props.player.playerName} Position:{this.props.player.position} </h3>
      {/* <h4>{this.props.player}</h4> */}
    </li>;
  }
}

export default PlayerItem;