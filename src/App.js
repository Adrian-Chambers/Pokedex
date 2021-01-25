import './App.css'
import React from 'react';
import Pokemon from './Pokemon';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      pokemon: {},
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  }

  onSearchChange = (event) => {
      this.setState({searchfield: event.target.value});
      fetch('https://pokeapi.co/api/v2/pokemon/' + event.target.value)
      .then(response => response.json())
      .then(p => this.setState({pokemon: p}));
  }

  render(){
    const { pokemon, searchfield } = this.state;
    return ( 
      <>
        <div className="tc pt4">
          <img src="https://fontmeme.com/permalink/210124/66b2e5f0523ae4f5e846c15d2d14c218.png" alt="Pokedex" border="0" />
        </div>
        <br />
        <div className="app-outline">
          <div className="tc">
            <input className="tc" type="text" onChange={this.onSearchChange}/>
          </div>
          <Pokemon pokemon={pokemon}/>
        </div>
      </>
    ); 
  }
}

export default App;
