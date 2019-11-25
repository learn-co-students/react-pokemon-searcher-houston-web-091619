import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state={
      cardFlip:true
    }
  }
  handleFlip=()=>{
    this.setState({
      cardFlip:!this.state.cardFlip
    })
  }
  render() {
    return (
      <Card>
        <div>
          <div onClick={()=>this.handleFlip()} className="image">
            <img src= {this.state.cardFlip ? this.props.pokemon.sprites.front:this.props.pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              Hp: {this.props.pokemon.stats[5].value}hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
