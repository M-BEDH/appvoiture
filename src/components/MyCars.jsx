import { Component } from "react";
import Cars from "./Cars";
import MyHeader from "./MyHeader";
import car from './images/car.png';
import car1 from './images/car1.png';
import car2 from './images/car2.png';

class Mycars extends Component {
    state = {
        voitures: [
            {
                marque: " Renault",
                color: "Green",
                year: "2000",
                img: car
            },

            {
                marque: "Mercedes",
                color: "red",
                year: "2010",
                img: car1
            },

            {
                marque: "Peugeot",
                color: "blue",
                year: "2025",
                img: car2
            },
        ],
    };


    addTenyears = () => {
        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        })

        this.setState({
            updatedState
        })


    }

     getAge = year => {
        const now = new Date().getFullYear();
        const age = now - year;
        let frenchYearsStr = age > 1 ? "ans" : "an";
        return `${age} ${frenchYearsStr}`;
    }

    render() {

        return (
            <div>
                <MyHeader />

                <button onClick={this.addTenyears}> + 10ans </button>

                {this.state.voitures.map(({ marque, color, year, img }, index) => {
                    return (
                        <div key={index}>
                            <Cars
                                marque={marque}
                                color={color}
                                year={year}
                                age={this.getAge(year)}
                                img={img}
                            />

                        </div>
                    )
                })}

            </div>
        );
    }
}

export default Mycars;