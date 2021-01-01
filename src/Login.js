import React, { useState } from "react";
import "./Login.css";
import PersonIcon from "@material-ui/icons/Person";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/feed");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push('/welcome');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="loginPage">
      <div className="logo">
        <div className="swipe">
          <h2 className="s">S</h2>
          <h2 className="w">w</h2>
          <h2 className="i">i</h2>
          <h2 className="p">p</h2>
          <h2 className="E">E</h2>
        </div>
        <img
          className="loginPageImg"
          src="https://pbs.twimg.com/media/Eo3bX7PVEAINkoP?format=png&name=small"
          alt=""
        />

        <h3>Join Now! For Free </h3>
        <h1>Swipe</h1>
        <p className="Dgmail">Developer Contact: swipe@gmail.com</p>
      </div>
      <div className="login_container">
        <h1>Sing in</h1>
        <form>
          <div className="input-field">
            <i>
              <PersonIcon />
            </i>
            <input
              className="user-input-box"
              type="text"
              placeholder="Username/Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="input-field">
            <i>
              <LockOpenIcon />
            </i>
            <input
              className="user-input-box"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <button className="login_singInButton" type="submit" onClick={singIn}>
            Sing In
          </button>
          <p className="Forgottenpassword">Forgotten password?</p>
          <h2>New Here?</h2>
          <button className="login_singUpButton" onClick={register}>
            Create New Account
          </button>
          <p>or,</p>
          <div class="social-media">
            <a
              href="https://www.facebook.com/tawkiralifa"
              class="social-icon-facebook"
            >
              <i class="facebook">
                <FacebookIcon />
              </i>
            </a>
            <a
              href="https://www.twitter.com/alif_tawkir"
              class="social-icon-twitter"
            >
              <i class="twitter">
                <TwitterIcon />
              </i>
            </a>
            <a
              href="https://www.instagram.com/tawkiralif"
              class="social-icon-instagram"
            >
              <i class="instagram">
                <InstagramIcon />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/TawkirAlif20"
              class="social-icon-linkedin"
            >
              <i class="linkedin">
                <LinkedInIcon />
              </i>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
