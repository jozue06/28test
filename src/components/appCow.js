import React from 'react';

import Cowsay from 'react-cowsay';
import faker from 'faker';
import Header from './header.js';
import Footer from './footer.js';
import Style from './styledComps';
import Card from './card.js';


class CowApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fakerLorem: '',
      cowSelect: '',
    };

    this.btnCow = this.btnCow.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateCow = this.updateCow.bind(this);
  }

  btnCow(e) {
    this.updateState(this.state.fakerLorem = faker.hacker.phrase());
  }

  updateState(fakerLorem) {
    this.setState({ fakerLorem });
  }

  updateCow(cowSelect) {
    this.setState({ cowSelect });
  }

  
  render() {  
    const opts = {
    };
    opts[this.state.cowSelect] = true;

    return (
      <div>
        <Header />
        <Style.Wrapper>
        <Card updateCowS={this.updateCow}/>
          <Style.Button primary ><p onClick={this.btnCow} id="gen">
            Generate some text for the cow!</p>
          </Style.Button>
          <Style.Text>
            <Cowsay {...opts}>{this.state.fakerLorem}</Cowsay>
          </Style.Text>
        </Style.Wrapper>
        <Footer />
      </div>
    );
  }
}

export default CowApp;