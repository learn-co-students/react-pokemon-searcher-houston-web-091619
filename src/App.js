import React from 'react';
import PokemonIndex from './components/PokemonIndex'
import './App.css';

class App extends React.Component {

  constructor(){
    super()
  
    this.state = {
        pokemon: [],
        pokemonDefault: [],
        isLoaded: true
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        pokemon: json,
        pokemonDefault: json
      })
    });
  }

  render() {
    var { isLoaded } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    }

    else {

    return (
      <div className="App">
        < PokemonIndex pokemons={this.state.pokemon}/>
      </div>
    );
    }
  }
}

export default App;
