import { Component } from "react"
import Image from "./Image"


class Form extends Component {
    render() {
        return (
            <div>
            <Image />
            <h1>Commentaire</h1>
            
            <form>
                <label style={{margin:"5px"}}>Pseudo</label>
                <input type="text" value=""></input>
            </form>
            </div>
        )
    }
}

export default Form