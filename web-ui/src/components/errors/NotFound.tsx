import React from "react";
import { history } from "../..";
import { routes } from "../../app/routes/routes";

export const NotFound: React.FC = () => {
  return (
    <div className="message fullscreen">
      <h2 className="title">What you are looking for is not here...</h2>
      <p className="button" onClick={() => history.push(routes.homePage)}>
        Go to Home Page
      </p>
    </div>
  );
};
