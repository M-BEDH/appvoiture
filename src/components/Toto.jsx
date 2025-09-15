import { Component } from "react";


const Toto = props => {
    props.letSate.messageMaman !== null ? (<button>Réponse</button>) : (<button disabled>Réponse</button>)

    const btnReponseToto = props.letSate.messageMaman
    
    return (
        <div>
            <h2>{props.name}</h2>
            {btnReponseToto}
            
            <p>{props.letSate.messageToto}</p>

             <button onClick={this.reponseToto}>Réponse Toto</button>
        </div>    
    )

}


export default Toto;