import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

 constructor(props) {
   super(props)


  this.state = {
    front: this.props.pokemon.sprites.front,
    back: this.props.pokemon.sprites.back,
    isClicked: true
  }

 }

 imgHandler() {
   console.log(this.state.isClicked )
   if (this.state.isClicked === true) {
    this.setState({
      front: this.state.back,
      isClicked: false
    })
  }
   else {
    this.setState({
      front: this.props.pokemon.sprites.front,
      isClicked: true
    })
   }
 }

  render() {
    const pokemon = this.props.pokemon

    let hp
    const pokestats = pokemon.stats
      pokestats.map(stat => {
          if (stat.name === 'hp') {
            hp = stat.value
          } 
      })

    return (
      <Card>
        <div>
          <div className="image" onClick={() => this.imgHandler()}>
            <img alt="Pokemon" src={this.state.front}/>
          </div>
          <div className="content">
            <div className="header" >{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
                {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
