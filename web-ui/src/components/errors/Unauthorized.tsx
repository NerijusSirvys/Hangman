import React from "react";
import { history } from "../..";
import { routes } from "../../app/routes/routes";

export const Unauthorized: React.FC = () => {
  return (
    <div className="message fullscreen">
      <h2 className="title">Access denied...</h2>
      <p className="button" onClick={() => history.push(routes.homePage)}>
        Go to Home Page
      </p>
    </div>
  );
};
