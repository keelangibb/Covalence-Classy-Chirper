import React from "react";

class Chirp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <h1>{this.props.userName}</h1>
                <h1>{this.props.thoughts}</h1>
            </>
        )
    }
}

export default Chirp;