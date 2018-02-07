import React, { Component } from "react";
import Emojis from "./components/emojis";
import Wrapper from "./components/wrapper";
import faces from "./faces.json";
import Jumbotron from "./components/jumbotron";
import Navbar from "./components/Navbar";

class App extends Component {
    // setting this.state.faces to the faces json array
    state = {
        faces
    };

    removeEmoji = id => {
        // filter this.state.faces for faces with an id not equal to the id being removed
        // face is like the letter/element 'i' in a for loop??
        const faces = this.state.faces.filter(face => face.id !== id);

        // set this.state.faces equal to the new faces array.
        this.setState({ faces });
    };

    // Map over this.state.faces and render an emoji component for each face object
    render() {
        return (
            <div>
                <Navbar>
                    <ul>
                        <li className="brand">
                            <a href="/">Clicky Game</a>
                        </li>
                        <li>Click an image to begin!</li>
                        <li></li>
                    </ul>
                </Navbar>
                <Jumbotron />
                <Wrapper>
                    {this.state.faces.map(face => (
                        <Emojis key={face.id}
                            removeEmoji={this.removeEmoji}
                            id={face.id}
                            image={face.image}
                        />
                    ))}
                </Wrapper>
            </div>
        );
    }
} 

export default App;