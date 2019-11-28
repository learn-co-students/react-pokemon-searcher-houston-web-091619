import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    const {flipCard, i, name, stats, sprites, display} = this.props
    return (
      <Card>
        <div onClick={() => flipCard(i)}>
          <div className="image">
            <img src={sprites[display]} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              HP: {stats.find((x) => x.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
