import React from 'react';
import './App.css';
import { all } from 'q';
import SearchBar from './searchBar.js'
import Card from './Card.js';

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
    if(this.state.searchInput !== ""){
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
      
    const colorArr = (colors = [
      '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
          '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
          '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
          '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
          '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
          '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
          '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
          '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
          '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
          '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
    ]) => colors[Math.floor(Math.random() * 51)]

      const cards = this.state.wikiName.map((x, y)=> {
        return(
            <Card 
            key={x}
            link={this.state.wikiLink[y]}
            description={this.state.wikiDescription[y]}
            name = {x}
            index = {y}
            />
        )
      } 

      

    )
      
    return (
      <section className="all">
      <SearchBar
      style={{backgroundColor: colorArr()}}
      updateState={this.updateState} 
      callAPI={this.callAPI}
      />
      {cards}
      </section>   
    );
  }
}

export default App;