// import { Component } from "react";  ----> NE PAS OUBLIER SI COMPOSANT SINON VA NE FONCTIONNERA PAS 
// class MyHeader extends Component {
//   state = {
//     title: "Liste de des voitures",
//     subTitle: "Mes voitures préférées :",
//     color: "#4bbfecff",
//   };

//   render() {
//     return (
//       <div>
//         <h1 style={{ color: this.state.color }}>{this.state.title}</h1>
//         <h2>{this.state.subTitle}</h2>
//       </div>
//     );
//   }
// }

// export default MyHeader;


function MyHeader() {
  const title = "Liste de des voitures";
  const subTitle = "Mes voitures préférées :";
  const color = "#4bbfecff";
  return (
    <div>
      <h1 style={{ color }}>{title}</h1>
      <h2>{subTitle}</h2>
    </div>
  );
}
export default MyHeader;