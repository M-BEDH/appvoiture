import Wrapper from './Wrapper';

// export default function Cars({ marque, color, year }) {

//   return (
//     <div>
//       <Wrapper>
//         {marque ? <p>Marque : {marque}</p> : <p>Marque inconnue</p>}
//         {color ? <p>Couleur : {color}</p> : <p>Couleur inconnue</p>}
//         {year ? <p>Année : {year}</p> : <p>Année inconnue</p>}
//       </Wrapper>
//     </div>

//   );
// };


const Cars = ({color, children, year}) => {

    const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>;

    if (children) {
        return (
              <Wrapper>
                
                    <p>Marque: { children }</p>
                    <p>Année: { year }</p>
                    {colorInfo}
                
              </Wrapper>
        )
    }

}

export default Cars
