import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    allPokemons: [],
    displayPokemon: []

  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemon => this.setState({
      pokemons: pokemon,
      allPokemons: pokemon,
      displayPokemon: pokemon.map(() => 'front')
    }))
  }
 
  flipCard = (i) => {
    const {displayPokemon} = this.state
    let copy = [...displayPokemon]
    // copy[i] = 'back'
    // console.log(copy[i])
    if (copy[i] === 'back') {
      copy[i] = 'front' 
    } else {
      copy[i] = 'back'
    }
    this.setState({displayPokemon: copy})
    
  }

  searchPokemon = (text) => {
    console.log(text)
    let filtered = this.state.allPokemons.filter((x) => x.name.includes(text) )
    this.setState({
      displayPokemon: filtered.map(() => 'front'),
      pokemons: filtered
    })
  }

  addPokemon = (event) => {
    let pokemonName = event.target[0].value
    let pokeHp = event.target[1].value
    let pokeFront = event.target[2].value
    let pokeBack = event.target[3].value
    fetch('http://localhost:3000/pokemon', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        "name": pokemonName,
        "stats": [{value: pokeHp, name: 'hp'}],
        "sprites": {front: pokeFront, back: pokeBack}
      })
  })
    .then(res => res.json())
    // console.log(event)
    .then(pokemon => this.props.addPokemon(pokemon))
  }

  
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={(e) => this.searchPokemon(e.target.value)} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} displayPokemon={this.state.displayPokemon} flipCard={this.flipCard} />
      </Container>
    )
  }
}

export default PokemonPage
