import React from 'react';

class PlayerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: [],
    }

  }

//   handleRemove(e) {
//     this.props.remove(this.props.player.id);
//   }

  render() {
    return <li className="player">
      <h3>{this.props.player}</h3>
      {/* <h4>{this.props.player}</h4> */}
    </li>;
  }
}

export default PlayerItem;