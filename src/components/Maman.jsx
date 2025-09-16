import { Component } from 'react';
import Toto from './Toto';

class Maman extends Component {
    state = {
        messageMaman: null,
        messageToto: null,
        disabled: true,
        color: "#94d9f5ff",
        colorBtn: "#4bb"
    }

    // Compléter le code de la méthode ordreMaman.
    ordreMaman = msg => this.setState({ messageMaman: msg, disabled:false  })
   
    reponseToto = msg => this.setState({ messageToto: msg } );

    render() {
        return (
            <div>
                <h1>Maman</h1>
                <button style={{color: this.state.color}}
                    onClick={() => this.ordreMaman("Vas ranger ta chambre")}
                >Order de la mère</button>

                <p>{this.state.messageMaman}</p>

                <hr />
                
                <Toto 
                    name="Toto"
                    reponseToto={this.reponseToto}
                    leState={this.state}
                    color={this.state.colorBtn}
                />
            </div>
        )
    }
}

export default Maman;