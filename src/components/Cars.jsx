import React from 'react'

function Cars({ marque, color }) {

  return (
    <div style={{
      border: '2px solid white',
      borderRadius: '10px',
      padding: '10px', margin: '10px',
      width: '200px',
      backgroundColor: '#7cd4faff',
      color: 'black',
    }}>

      {/* <p>Marque: {marque}</p> */}

      {marque ? <p>Marque : {marque}</p> : <p>Marque inconnue</p>}
      {color ? <p>Couleur : {color}</p> : <p>Couleur inconnue</p>}

    </div>

  );
};

export default Cars;
