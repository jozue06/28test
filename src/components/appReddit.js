import React from 'react';
import ReactDom from 'react-dom';

import Cowsay from 'react-cowsay';
import faker from 'faker';
import Header from './header.js';
import Footer from './footer.js';
import Style from './styledComps';
import Card from './card.js';
import fetch from 'node-fetch';
import SearchForm from './searchForm.js';
import SearchResults from './SearchResults.js';
import Reddit from './styledReddit.js';
import NoResults from './noResults';

class RedditApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fakerLorem: '',
      cowSelect: '',
      query: '',
      results: [],
    };

    this.btnCow = this.btnCow.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateCow = this.updateCow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(query) {
    const url = `https://www.reddit.com/r/${query.subreddit}.json?limit=${query.limit}`;
    fetch(url).
    then((res) => {
      this.state.error = '';
      console.log('ress -->', res);

    return res.json();

    }).
then((json) => {

  // console.log('stufffsfss -->', json.data.children);

  return (json.data.children.length === 0 ? this.setState({ results: <NoResults /> }) : this.setState({
        results: json.data.children.map((item) => <li key={item.data.id}>
            <Reddit.Link href={item.data.url}>
              {item.data.title} <br />
            </Reddit.Link>
            <Reddit.Ups>
             Reddit Up Votes: {item.data.ups}
              </Reddit.Ups>
          </li>)
      })
        );
    }).
    catch((err) => {
      console.log('the fetch err??', err);
    });
  }


  render() {  
    const opts = {
    };
    opts[this.state.cowSelect] = true;

    return (
      <div>
        <Header />
        <Style.Wrapper>
        <SearchForm submit={this.handleSubmit} />
        <SearchResults results={this.state.results}/>
        <Card updateCowS={this.updateCow}/>
          <Style.Button primary ><p onClick={this.btnCow} id="gen">
            Generate some text for the cow!
          </p>
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

export default RedditApp;