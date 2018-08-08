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

    let storageToSet = JSON.stringify(this.state.players)
    localStorage.setItem('note', storageToSet)  }

    addPlayer = (player) => {
      let players = [...this.state.players]
      players.push(player);
      this.setState({ players: players });
      console.log('state on add ', this.state.players);
      let storageToSet = JSON.stringify(players)
      localStorage.setItem('players', storageToSet)
    }

  deletePlayer = id => {
    const players = this.state.players.filter(player => player.id !==id);
    this.setState( { players } );

    let storageToSet = JSON.stringify(players)
    localStorage.setItem('players', storageToSet)
  }

  render() {

    return (
      <div>
        <Header />
        <Style.Wrapper>
          <PlayerForm addPlayers={this.addPlayer} />
          {this.state.players.map((player) => <PlayerItem key={player.id} id={player.id} player={player} deletePlayer={this.deletePlayer} />)}
          {/*  /> */}
          <PlayerResults players={this.state.players.id} />
        </Style.Wrapper>
        <Footer />
      </div>
    );
  }
}


export default PlayersApp;