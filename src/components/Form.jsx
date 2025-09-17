import { Component } from "react"
import Image from "./Image"


class Form extends Component {
    state = {
        username: '',
        color: '',
        colors: ['','green', 'red', 'blue', 'yellow', 'white', 'pink', 'purple', 'orange', 'grey'],
        comment: ''
    }

    handelPseudo = e => {
        this.setState({ username: e.target.value })
    }

    handleColor = e => {
        this.setState({ color: e.target.value })
    }
    handleComment = e => {
        this.setState({ comment: e.target.value })
    }
    handelSubmitForm = e => {
        e.preventDefault();
    console.log(`Pseudo: ${this.state.username}, Couleur: ${this.state.color}, Commentaire: ${this.state.comment}`)
        this.setState({ username: '', color: '', comment: '' })
    }

    render() {
        return (
        <div>
            <Image color={this.state.color} />
            <div>
            <label>Commentaire</label>
            <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
        </div>

            <form onSubmit={this.handelSubmitForm}>
                <div>
                <label style={{margin:"5px"}}>  Pseudo</label>
                <input type="text" value={this.state.username} onChange={this.handelPseudo}></input>
                </div>
            </form>

            <div>
            <label>Couleur</label>
            <select value={this.state.color} onChange={this.handleColor}>
            <option value="">Choisir une couleur</option>

            {this.state.colors.map((color, index) => {
                 return <option key={index} value={color}>{color}</option>
            })}
            </select>
            </div>
            </div>
        )
    }
}

export default Form