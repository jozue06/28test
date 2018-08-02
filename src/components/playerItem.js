import React from 'react';

class PlayerItem extends React.Component {
  constructor(props) {
    super(props);

  }

//   handleRemove(e) {
//     this.props.remove(this.props.player.id);
//   }

  render() {
    return <li className="note">
      <h3>{this.props.player.playername}</h3>
      <h4>{this.props.player.position}</h4>
    </li>;
  }
}

export default PlayerItem;