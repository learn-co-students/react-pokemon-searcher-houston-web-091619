import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemons.map((pokemon, i) => <PokemonCard {...pokemon} display={this.props.displayPokemon[i]} i={i} flipCard={this.props.flipCard}/>)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
