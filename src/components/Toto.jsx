const Toto = props => {
  // console.log(props)
  return (
    <div>
        <h2>{props.name}</h2>
        <button  style={{color: props.color}}

            // Compléter cette section
             onClick={() => props.reponseToto("Bien sûr Maman chérie")}
             disabled= {props.leState.disabled}
            
        >Réponse</button>

        <p>{props.leState.messageToto}</p>

    </div>
  )
}

export default Toto;