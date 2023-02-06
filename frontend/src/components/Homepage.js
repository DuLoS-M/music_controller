import React, { Component } from "react";
import {render} from "react-dom";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router,
Route,
Routes,
Link,
Redirect,
} from "react-router-dom";

export default class Homepage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <Router>
            <Routes>
                <Route exact path='/' element={<p>Homepages</p>}/>
                <Route exact path='/join' element={<RoomJoinPage/>}/>
                <Route exact path='/create' element={<CreateRoomPage/>}/>
            </Routes>
        </Router>)
    }
}


