import { Component } from "react";
import Toto from "./Toto";


class Maman extends Component {
    state = {
        messageMaman: null,
        messageToto: null
    }


    orderMaman = () => {
        this.setState({
            messageMaman: 'Vas ranger ta chambre'
        })
    }

    reponseToto = () => {
        this.setState({
            messageToto: "Pas maintenant"
        })
    }

    render() {
        return (
            <div>
                <h1>Maman</h1>

                <button onClick={this.orderMaman}>Ordre de la Mère</button>

                <p>{this.state.messageMaman}</p>


                {/* <Toto name="Toto" reponseToto={this.reponseToto} letState={this.state} /> */}




            </div>
        )
    }
}

export default Maman;