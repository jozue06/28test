import React from 'react';
import Reddit from '../components/styledReddit.js';
import Results from './playerItem.js';

class PlayerResults extends React.Component {
  constructor(props) {
    super(props);
    this.showTable = this.showTable.bind(this);
  }


  showTable() {
    return this.props.players.map((player) => {
      return <Results key={player.id} id={player.id} title={player.title} position={player.position} />;
    });
  }

  render() {
    return (  
    <Reddit.Wrapper>
      <div>
      <ul>
      <Reddit.Text>
      {this.showTable()}
      </Reddit.Text>
      </ul>
     </div>
     </Reddit.Wrapper>
    ); }
}

export default PlayerResults;