import { Avatar } from "@material-ui/core";
import React from "react";
import "./AskBox.css";
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';


export default function AskBox() {

  const user = useSelector(selectUser);

  return (
    <div className="askBox">
      <div className="askBox__info">
        <Avatar src = {user.photo} />
        <h5> {user.displayName} </h5>
      </div>
      <div className="askBox__ask">
        <p>What is your question?</p>
      </div>
    </div>
  );
}
