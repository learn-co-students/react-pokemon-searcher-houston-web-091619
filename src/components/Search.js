import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(event)=>props.handleSearch(event.target.value)} />
      </div>
        <i onClick={()=>props.updateList()} className="search icon" />
    </div>
  )
}

export default Search
// ()=>console.log('🤔')