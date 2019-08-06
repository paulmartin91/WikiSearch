import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.callAPI = this.callAPI.bind(this);
    
     this.state = {
      wikiName: [],
      wikiDescription: [],
      wikiLink: [],
      searchInput: ""
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
  
  //these can all go in the css file  
    
  const all = {
  margin: "auto",
  display: "block",
  width: 600,
  fontFamily: "Courgette",
  }
    
  const searchBox = {
  textAlign: "center",
  backgroundColor: "rgba(244,244,244, 0.6)",
  padding: 10 
  }
  
  const listTab = {
  padding: "10px",
  backgroundColor: "rgba(244,244,244, 1)",
  listStyleType: "none",
  marginTop: 10,
  textAlign: "left",
}
    
    return (
      <section style={all}>   {/*section can be app.js*/}
      <div style={searchBox}>         {/*searchbox can be one component*/}
        <h1>Searching Wikipedia for <a style = {{color: this.state.searchInput}} >{this.state.searchInput}</a></h1>
        <input id="searchBar" style={{marginTop: 10}} onChange={this.updateState}></input>
<button id = "searchButton" onClick={this.callAPI}> Search </button>
         </div>
{this.state.wikiName.map((x, y)=> {return <li key={x+1} style={listTab}><a href={this.state.wikiLink[y]}>{x}</a> - {this.state.wikiDescription[y]}</li>})}         {/*this should map components dynamically updating state*/}
        </section>   
    );
  }
};

export default App;
