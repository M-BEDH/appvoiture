
const Welcome = () => {

    function Ok() {
        alert("ok")
    }

    const bonjour = () => {
        alert("Bonjour")
    }

    const bonsoir = text => {
        alert(text)
    }

    return (
        <div>

            <button onClick={Ok}> OK</button>
            <button onClick={bonjour}> Invoquer une fonction </button>
            <button onClick={() => bonsoir("Bonsoir")}> Invoquer une fonction avec argument </button>
            <button onClick={() => alert("Bonne nuit")}> alert sur le boutton </button>


        </div>
    )
}

export default Welcome;