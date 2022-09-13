import React from "react";
import Chirp from "./components/Chirp";
import { v4 as uuidv4 } from 'uuid'


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            thoughts: '',
            chirps: []
        };
    }

    handleClick(e) {
        e.preventDefault()
        this.setState({
            userName: '',
            thoughts: '',
            chirps:
                [
                    ...this.state.chirps,
                    { id: uuidv4(), userName: this.state.userName, thoughts: this.state.thoughts }
                ]
        })
    };

    render() {
        return (
            <main className="container">
                <section className="row justify-content-center mt-5">
                    <div className="col-md-7">
                        <h1>Classy Chirper</h1>
                        <form className="form-group">
                            <label>username:</label>
                            <input
                                value={this.state.userName}
                                onChange={e => this.setState({ userName: e.target.value })}
                                className="form-control"
                            />
                            <label>thoughts:</label>
                            <input
                                value={this.state.thoughts}
                                onChange={e => this.setState({ thoughts: e.target.value })}
                                className="form-control"
                            />
                            <button
                                onClick={e => this.handleClick(e)}
                                className="btn btn-primary mt-5"
                            >Chirp
                            </button>
                        </form>
                    </div>
                </section>
                <section className="row justify-content-center mt-3">
                    <div className="col-md-6">
                        {this.state.chirps.map(chirp => (
                            <>
                                <Chirp key={chirp.id} userName={chirp.userName} thoughts={chirp.thoughts} />
                            </>
                        ))}
                    </div>
                </section>

            </main>
        );
    }
};



export default App;