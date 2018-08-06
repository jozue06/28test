import React from 'react';

import Header from './header.js';
import Footer from './footer.js';
import Style from './styledComps';
import PlayerResults from './playerResults';
import PlayerForm from './playerForm.js';
import PlayerItem from './playerItem.js';


class PlayersApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };

    this.addPlayer = this.addPlayer.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);

  }

  addPlayer(player) {
    this.state.players.push(player);
    this.setState({ players: [...this.state.players] });
    console.log('#1 added player:', this.state.players);
  }
  deletePlayer(id) {
    const deletedPlayer = this.state.players.find(player => {
      return player.id = id; });
    const playerIndex = this.state.players.indexOf(deletedPlayer);
    this.state.players.splice(playerIndex, 1);
    this.setState({ players: [...this.state.players] });
  }

  render() {

    return (
      <div>
        <Header />
        <Style.Wrapper>
          <PlayerForm addPlayers={this.addPlayer} />
          {this.state.players.map((player) => <PlayerItem key={player.playerName} player={player} deletePlayer={this.deletePlayer} />)}
          {/*  /> */}
          <PlayerResults players={this.state.players.id} />
        </Style.Wrapper>
        <Footer />
      </div>
    );
  }
}


export default PlayersApp;