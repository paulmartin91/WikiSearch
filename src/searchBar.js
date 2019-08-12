import React from 'react'

class SearchBar extends React.Component{
constructor(props){
    super(props)
    this.state ={
    searchInput: "",
    }
}

render(){
    return(
        <div className="searchBox">         {/*searchbox can be one component*/}
        <h1>Searching Wikipedia for... <p>{this.state.searchInput}</p></h1>
        <input id="searchBar" style={{marginTop: 10}} onChange={this.props.updateState}></input>
        <button id = "searchButton" onClick={this.props.callAPI}> Search </button>
         </div>  
    )
}

} 

export default SearchBar