import React from 'react';
import Style from '../components/styledReddit.js'

class PlayerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {},
    };

    this.deletePlayer = this.deletePlayer.bind(this);
  }
 
      deletePlayer(e) {
        console.log('this state?', this.props.id);
        e.preventDefault();
        this.props.deletePlayer(this.props.id);
      }
  
  render() {
    
    console.log('#2 render the player item', this.props.player);
    
    return (
    <Style.Title>
      <li className="player">
      <Style.Text><h3>Player: {this.props.player.playerName}</h3> 
        <h4>Position:{this.props.player.position} </h4> </Style.Text>
    <Style.Button onClick={this.deletePlayer}>x</Style.Button>
    </li>
    </Style.Title>
    )
  }
}

export default PlayerItem;