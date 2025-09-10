import React from 'react'

function Cars({children, color}) {

  return children ? (
    <div style={{
      border: '1px solid white',
      padding: '10px', margin: '10px',
      width: '200px',
      backgroundColor: '#7cd4faff',
      color: 'black',
      }}>
      
      <p>Marque: {children}</p>

      {color ? <p>Couleur: {color}</p> : <p>Couleur inconnue</p>}
    </div>

  ) : <p>Aucune voiture disponible</p>;
};

export default Cars;
