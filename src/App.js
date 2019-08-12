import React from 'react';
import './App.css';
import { all } from 'q';
import SearchBar from './searchBar.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.callAPI = this.callAPI.bind(this);
    
     this.state = {
      wikiName: [],
      wikiDescription: [],
      wikiLink: [],
     }
      
  }
  updateState(event){
    this.setState({
      searchInput: event.target.value
    })
  }

  callAPI(){
    if(this.state.searchInput != ""){
    let searchTerm = this.state.searchInput;
 fetch("https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" + searchTerm + "&format=json&gsrlimit=15", {method: "Get"})
      .then(results => results.json())
      .then( response => 
   this.setState({
        wikiName: response[1],
        wikiDescription: response[2],
        wikiLink: response[3]
      })
   )
  }
}
  
  render() { 
    return (
      <section className="all">
      <SearchBar updateState={this.updateState} callAPI={this.callAPI}/>
      {this.state.wikiName.map((x, y)=> {return <li key={x+1} className="listTab"><p href={this.state.wikiLink[y]}>{x}</p> - {this.state.wikiDescription[y]}</li>})}         {/*this should map components dynamically updating state*/}
      </section>   
    );
  }
};

export default App;