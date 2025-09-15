import { Component } from "react";
import Car from "./Cars";
import MyHeader from "./MyHeader";

class Mycars extends Component {
    state = {
        voitures: [
            {
                marque: " Renault",
                color: "red",
                year: "2000",
            },

            {
                marque: "Mercedes",
                color: "black",
                year: "2010",
            },

            {
                marque: "Peugeot",
                color: "blue",
                year: "2025",
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

                {this.state.voitures.map(({ marque, color, year }, index) => {
                    return (
                        <div key={index}>
                            <Car
                                marque={marque}
                                color={color}
                                year={year}
                                age={this.getAge(year)}
                            />

                        </div>
                    )
                })}

            </div>
        );
    }
}

export default Mycars;