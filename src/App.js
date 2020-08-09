import React from 'react';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      monsters :[ ],
      SearchField : ' '
    };
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({monsters : users}));
  }
  handleChange(e){  
      this.setState({ SearchField: e.target.value })
  }
  render(){
    const {monsters, SearchField} = this.state;
    const filteredMonsters = monsters.filter( monsters =>
      monsters.name.toLowerCase().includes(SearchField.toLowerCase())
    );
  return (
    <div className="App">
      <h1 className="ok">Monsters Rolodex</h1>
      <SearchBox
        placeholder='Search Monsters'
        handleChange= {this.handleChange}
      />
     <CardList  monsters={filteredMonsters}/>
    </div>
  );
  }
}

export default App;
