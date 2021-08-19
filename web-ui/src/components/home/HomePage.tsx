import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../app/routes/routes";
import "./styles.css";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the hangman game</h1>
      <div className="links">
        <Link to={{ pathname: routes.register }} className="link button">
          Register
        </Link>
        <Link to={{ pathname: routes.login }} className="link button">
          Log In
        </Link>
      </div>
    </div>
  );
};

export { HomePage };
