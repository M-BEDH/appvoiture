import Wrapper from "./Wrapper";

const Car = ({ color, marque, year, age }) => {

    const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>;

    if (marque) {
        return (

            <Wrapper>
                <p>Marque : {marque}</p>
                {colorInfo}
                <p>Année : {year}</p>
                <p>Âge : {age} </p>
            </Wrapper>

        )
    }

}

export default Car
