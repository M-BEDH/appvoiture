import { Component } from "react";
import Cars from "./Cars";

class Mycars extends Component {
  state = {
    voitures: [
      { marque: "Peugeot", color: "Bleu", year: 2010 },
      { marque: "Renault", color: "Rouge", year: 2015 },
      { marque: "Citroen", color: "Vert", year: 2018 },
    ],
  };

  render() {
    return (
      <div>

        {this.state.voitures.map((voiture, index) => (
          <Cars
            key={index}
            color={voiture.color}
            children={voiture.marque}
            year={voiture.year}
          />
        ))}

      </div>
    );
  }
}
export default Mycars;
