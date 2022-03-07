import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import List from "./List";
import Menu from "./Menu";
import ls from 'local-storage'

class App extends Component {
    constructor(props) {
      super(props);
      this.saved = JSON.parse(ls.get('chr')) || [];
      this.state = {
          characters: this.saved
      };
    }
    

    removeCharacter = index => {
        const { characters } = this.state;
        const newCharacters = characters.filter((character, i) => { 
          return i !== index;
        });
        this.setState({
            characters: newCharacters 
        });
        ls.set('chr', JSON.stringify(newCharacters));
        window.location.reload(false)
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
        ls.set('chr', JSON.stringify([...this.state.characters, character]));
    }
    
  render() {
    const { characters } = this.state;
    return (
      <div>
      <Menu></Menu>

      <div>
        <Routes>
          <Route exact path='/' element={<Home handleSubmit={this.handleSubmit}/>}/>
          <Route path='/list' element={<List characterData={characters} removeCharacter={this.removeCharacter}/>}/>
        </Routes>
      </div>

      </div>
    );
  }
}

export default App;
