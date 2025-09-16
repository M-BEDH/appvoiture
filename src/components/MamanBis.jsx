import { Component } from "react";
import TotoBis from "./TotoBis";


class MamanBis extends Component {
    state = {
        messageMaman: null,
        messageToto: null
    }


    orderMaman = () => {
        this.setState({
            messageMaman: 'Toto vas ranger ta chambre !'
        })
    }

    reponseToto = () => {
        this.setState({
            messageToto: "Pas maintenant :/"
        })
    }

    render() {
        return (
            <div>
                <h1>Maman</h1>

                <button onClick={this.orderMaman}>Ordre de la Mère</button>

                <p>{this.state.messageMaman}</p>


                <TotoBis name="Toto"
                    reponseToto={this.reponseToto}
                    leState={this.state}
                />


            </div>
        )
    }
}

export default MamanBis;