import { Component } from "react";
import Image from "./Image";
import "../Css/style.css";
import styles from "../Css/myCss.module.css";
import MyHeaderOne from "./MyHeaderOne";

import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: purple;
`;
const Button = styled.button`
  background-color: #4312f3;
  color: white;
  font-size: 20px;
  padding: 10px;
  outline-style: solid;
  outline-width: 2px;
  outline-color: #12f325;
  outline-offset: 4px;
`;

const titreRouge = {
  color: "red",
  fontSize: "40px",
};

class Form extends Component {
  state = {
    username: "",
    color: "",
    colors: [
      "",
      "green",
      "red",
      "blue",
      "yellow",
      "white",
      "pink",
      "purple",
      "orange",
      "grey",
    ],
    comment: "",
  };

  handelPseudo = (e) => {
    this.setState({ username: e.target.value });
  };

  handleColor = (e) => {
    this.setState({ color: e.target.value });
  };
  handleComment = (e) => {
    this.setState({ comment: e.target.value });
  };
  handelSubmitForm = (e) => {
    e.preventDefault();
    console.log(
      `Pseudo: ${this.state.username}, Couleur: ${this.state.color}, Commentaire: ${this.state.comment}`
    );
    this.setState({ username: "", color: "", comment: "" });
  };

  render() {
    // Permet d'ajouter une classe conditionnelle en fonction d'une props
    // ici si head est true alors la classe sera blue sinon elle sera red
    // pour le p avec la classe myClass
    const myClass = this.props.head ? "blue" : "red";

    return (
      <div>
        <Image color={this.state.color} height="150" />
        
        <div>
          <label>Couleur</label>
          <select value={this.state.color} onChange={this.handleColor}>
            <option value="">Choisir une couleur</option>

            {this.state.colors.map((color, index) => {
              return (
                <option key={index} value={color}>
                  {color}
                </option>
              );
            })}
          </select>
        </div>


        {/* <div>
          <h1 style={titreRouge}>Commentaire</h1>
          <textarea
            value={this.state.comment}
            onChange={this.handleComment}
          ></textarea>
        </div> */}
        <div>
          {/* Exemple d'utilisation de class conditionnelle */}
          <p className={myClass}>Je suis rouge ou bleu</p>

          {/* myClass entre accolades pour dire que c'est du JS (c'est une constante)
            bigFont est une classe CSS donc pas d'accolades
            */}
          <p className={`${myClass} bigFont`}>Je suis rouge ou bleu</p>
        </div>

        <form onSubmit={this.handelSubmitForm}>
          <div>
            <label> Pseudo</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handelPseudo}
            ></input>
          </div>
        </form>

        <h1 className={styles.green}></h1>
        <MyHeaderOne />
        <h1 className={styles.green}>Mon titre vert</h1>


        {/* Exemple avec styled component */}
        <div>
          <Title>Test styles components</Title>
          <Button>Valider</Button>
        </div>


      </div>
    );
  }
}

export default Form;
