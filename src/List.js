import React, {Component} from "react";
import CarCard from "./CarCard";
import FilterContainer from "./FilterContainer";




const CardsList = props => { 
    const style = {
        width: '25rem',
      };
    const rows = props.characterData.map((row, index) => {
        return (
            <div key={index}>
                <CarCard index={index} row={row} removeCharacter={props.removeCharacter}></CarCard>
                <div className="dropdown-divider" style={style}></div>
            </div>
        );
    });
    return <div>{rows}</div>
}

class List extends Component {
    constructor(props) {
      super(props);
      this.characterData = props.characterData;
      this.removeCharacter = props.removeCharacter;
    }


    render() {
        return (
            <div>
                <FilterContainer setFilterByPrice={this.setFilterByPrice}></FilterContainer>
                <CardsList characterData={this.characterData} removeCharacter={this.removeCharacter}></CardsList>
            </div>
          
        );
    }
  
      
}

export default List;