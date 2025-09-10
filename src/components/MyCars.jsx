import { Component } from 'react';
import Cars from './Cars';

class Mycars extends Component {
  state = {
    voitures: [
      {marque: 'Peugeot', color: 'Bleu'},
      {marque: 'Renault', color: 'Rouge'},
      {marque: 'Citroen', color: 'Vert'}
    ]
  }

  render() {
    return (
      <div>

        {this.state.voitures.map((voiture, index) => (
          <Cars key={index} 
          color={voiture.color} 
          marque={voiture.marque} 
          />
        ))}

      </div>
    )
  }

}
export default Mycars;