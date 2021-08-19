import React from "react";
import { history } from "../..";
import { routes } from "../../app/routes/routes";

export const NotFound: React.FC = () => {
  return (
    <div className="message fullscreen">
      <h2>What you are looking for is not here...</h2>
      <p className="hover" onClick={() => history.push(routes.homePage)}>
        Go to Home Page
      </p>
    </div>
  );
};
