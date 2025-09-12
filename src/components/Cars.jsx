import Wrapper from "./Wrapper";

const Car = ({ color, children, year, age }) => {

    const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>;

    if (children) {
        return (

            <Wrapper>
                <p>Marque : {children}</p>
                {colorInfo}
                <p>Année : {year}</p>
                <p>Âge : {age} </p>
            </Wrapper>

        )
    }

}

export default Car
