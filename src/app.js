import React, { Component } from "react";
import Emojis from "./components/emojis";
import Wrapper from "./components/wrapper";
import faces from "./faces.json";
import Jumbotron from "./components/jumbotron";
import Navbar from "./components/navbar";

class App extends Component {
    // setting this.state.faces to the faces json array
    state = {
        faces,
        currentScore: 0,
        topScore: 0,
        currentPicks: [],
        randomPics: []
    };

    removeEmoji = id => {
        // filter this.state.faces for faces with an id not equal to the id being removed
        // face is like the letter/element 'i' in a for loop??
        const faces = this.state.faces.filter(face => face.id !== id);

        // set this.state.faces equal to the new faces array.
        this.setState({ faces });
    };

    clickGame = event => {

    };

    // Map over this.state.faces and render an emoji component for each face object
    render() {
        return (
            <div>
                <Navbar 
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                />
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