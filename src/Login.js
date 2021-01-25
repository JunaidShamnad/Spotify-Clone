import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        // src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        src="https://i.pinimg.com/originals/27/6f/27/276f273d11f8b9dbc0a9c55bb38ea8c6.gif"
        alt=""
      />
     
      <a href={accessUrl}>LOGIN TO SPOTIFY</a>
      <p><span>&#9888;</span> You will need Spotify premium to play songs in this</p>
    </div>
  );
}

export default Login;
