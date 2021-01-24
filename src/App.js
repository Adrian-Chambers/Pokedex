import React from 'react';
import './App.css';
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
      <div className="tc pt5">
          <h1>Pokedex</h1>
          <input type="text" onChange={this.onSearchChange}/>
          <Pokemon pokemon={pokemon}/>
      </div>
    ); 
  }
}

export default App;
