import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../app/routes/routes";

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1 className="title">Welcome to the hangman game</h1>
      <div className="button-row">
        <Link to={{ pathname: routes.register }} className="button">
          Register
        </Link>
        <Link to={{ pathname: routes.login }} className="button">
          Log In
        </Link>
      </div>
    </div>
  );
};
