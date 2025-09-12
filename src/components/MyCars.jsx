import { Component } from "react";
import Car from "./Cars";
import MyHeader from "./MyHeader";

class Mycars extends Component {
    state = {
        voitures: [
            {
                name: "Ford",
                color: "red",
                year: "2000",
            },

            {
                name: "Mercedes",
                color: "black",
                year: "2010",
            },

            {
                name: "Peugeot",
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

    render() {
           const year = new Date().getFullYear();
        return (
            <div>

                {/* <h1 style={this.props.style}>{this.props.title}</h1> */}

                <MyHeader />

                <button onClick={this.addTenyears}> + 10ans </button>

                <Car year = {this.state.voitures[0].year}
                age = {year - this.state.voitures[0].year + 'ans'} color={this.state.voitures[0].color}>
                    {this.state.voitures[0].name}
                </Car>

                <Car 
                age = {year - this.state.voitures[1].year + 'ans'} color={this.state.voitures[1].color}>
                    {this.state.voitures[1].name}
                </Car>

                <Car 
                age = {year - this.state.voitures[2].year + 'ans'} color={this.state.voitures[2].color}>
                    {this.state.voitures[2].name}
                </Car>

            </div>
        );
    }
}

export default Mycars;