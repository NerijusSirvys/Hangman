import React from "react";
import { history } from "../..";
import { routes } from "../../app/routes/routes";

export const Unauthorized: React.FC = () => {
  return (
    <div className="message fullscreen">
      <h2>Access denied...</h2>
      <p className="hover" onClick={() => history.push(routes.homePage)}>
        Go to Home Page
      </p>
    </div>
  );
};
