import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateRoomPageWrapper from "./CreateRoomPageWrapper";
import RoomJoinPageWrapper from "./RoomJoinPageWrapper";
import RoomWrapper from "./RoomWrapper";
export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<p>This is the Home Page</p>} />
          <Route path="/join" element={<RoomJoinPageWrapper />} />
          <Route path="/create-room" element={<CreateRoomPageWrapper />} />
          <Route path="/room/:roomCode" element={<RoomWrapper />} />
        </Routes>
      </Router>
    );
  }
}
