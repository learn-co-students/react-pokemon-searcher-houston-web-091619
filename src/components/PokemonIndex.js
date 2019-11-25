import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
const pokemonsURL='http://localhost:3000/pokemon/'
class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state={
      pokemons:[],
      displayPokemons:[],
      searchText:''
    }
  }

  componentDidMount(){
    this.fetchPokemon()
  }

  updateList = ()=>{
    if(this.state.searchText===''){
      this.setState({
        displayPokemons:this.state.pokemons
      })
    }else{
      this.setState({
        displayPokemons:this.state.pokemons.filter(pokemon=> pokemon.name.toLowerCase().includes(this.state.searchText.toLowerCase()))
      })
    }
  }

  handleSearch = (textSearch) =>{
    this.setState({
      searchText:textSearch
    })
  }

  fetchPokemon=()=>{
    fetch(pokemonsURL)
    .then(res=>res.json())
    .then(pokemonData=>{
      this.setState({
        pokemons:pokemonData,
        displayPokemons:pokemonData
      })
    })
  }

  addPokemon=(newPokemon)=>{
    console.log(newPokemon)
    fetch(pokemonsURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name:newPokemon.name,
        stats:[
          {value:newPokemon.hp,
            name:"special-defense"},
          {value:newPokemon.hp,
            name:"special-attack"},
          {value:newPokemon.hp,
            name:"defense"},
          {value:newPokemon.hp,
            name:"attack"},
          {value:newPokemon.hp,
            name:"speed"},
          {value:newPokemon.hp,
            name:"hp"}
          ],
        sprites:{
          front:newPokemon.frontUrl,
          back:newPokemon.backUrl
        }
      })
    })
    .then(()=>this.fetchPokemon())
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
          addPokemon={this.addPokemon}/>
        <br />
        <Search handleSearch={this.handleSearch} 
          updateList={this.updateList}/>
        <br />
        <PokemonCollection 
          pokemons={this.state.displayPokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
