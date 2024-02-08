// RoomJoinPageWrapper.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoomJoinPage from './RoomJoinPage';

const RoomJoinPageWrapper = () => {
  const navigate = useNavigate();
  return <RoomJoinPage navigate={navigate} />;
};

export default RoomJoinPageWrapper;
