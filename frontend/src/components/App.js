import React, { Component } from "react";
import {render} from "react-dom";
import Homepage from "./Homepage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
                    <Homepage/>
                </div>)
    }
}

const appDiv = document.querySelector("#app");
render(<App name="x"/>, appDiv)