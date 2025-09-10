import { Component } from 'react';
import Cars from './Cars';

class Mycars extends Component {
  state = {
    // voitures: [
    //   {marques: 'Peugeot', color: 'Bleu'},
    //   {marques: 'Renault', color: 'Rouge'},
    //   {marques: 'Citroen', color: 'Vert'}
    // ]
  }

  render() {
    return (
      <div>

        <Cars color="bleu">Peugeot</Cars>
        <Cars color="rouge">Renault</Cars>
        <Cars color="vert">Citroen</Cars>

      </div>
    )
  }

}
export default Mycars;